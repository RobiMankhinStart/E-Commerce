const cartSchema = require("../models/cartSchema");
const OrderSchema = require("../models/OrderSchema");
const { responseHandler } = require("../services/responseHandler");
const stripe = require("stripe")(process.env.STRIPESE);
const endpointSecret = process.env.STRIPE_ENDPOINT;
// paymentType =   cash or SSLCommerz
const checkOut = async (req, res) => {
  const { paymentType, cartId, shippingAddress, insideDhaka } = req.body;
  const orderNumber = `${Date.now()}`;

  if (!paymentType || !cartId || !shippingAddress || !insideDhaka)
    return responseHandler.error(res, 400, "All fields are required.");

  try {
    if (!cartId) return responseHandler.error(res, 400, "Invalid Request");
    const cartData = await cartSchema.findOne({ _id: cartId });
    if (!cartData) return responseHandler.error(res, 400, "Invalid Request");
    const charge = insideDhaka === "true" ? 80 : 120;
    const totalPrice = cartData.items.reduce((total, current) => {
      return (total += current.subtotal);
    }, charge);

    const orderData = new OrderSchema({
      user: req.user._id,
      items: cartData.items,
      shippingAddress,
      insideDhaka,
      deliveryCharge: charge,
      totalPrice,
      payment: {
        method: paymentType,
      },
      orderNumber,
    });
    orderData.save();

    if (paymentType === "cash") {
      return responseHandler.success(res, 200, "Order successfully completed.");
    }

    // online money

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "BDT",
            product_data: {
              name: "T-Shirt",
              description: `Blue T-Shirt with chest print`,
            },
            unit_amount: 500 * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: `${req.user.email}`,
      metadata: {
        orderId: `${orderData._id}`,
      },
      success_url: `https://example.com/success`,
      cancel_url: `https://example.com/error`,
    });

    console.log(session);

    res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, 500, error.message);
  }
};

const webhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  console.log(event);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    //Payment Saving in the database
    const orderData = await OrderSchema.findByIdAndUpdate(
      session.metadata.orderId,
      {
        "payment.status": "paid",
        "payment.paymentId": session.id,
        "payment.currency": session.currency,
        "payment.fullname": session.customer_details.name,
        "payment.email": session.customer_details.email,
        "payment.paidAmount": session.amount,
        "payment.paidAt": Date.now(),
      },
    );
  }

  if (event.type === "charge.updated") {
    const session = event.data.object;

    await orderSchema.findOneAndUpdate(session.metadata.orderId, {
      "payment.receipt": session.receipt_url,
    });
  }
  // Return a 200 response to acknowledge receipt of the event
  return res.status(200).json({ received: true });
};

module.exports = { checkOut, webhook };
