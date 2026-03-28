const userSchema = require("../models/userSchema");
const { sentVerificationEmail } = require("../services/emailServices");
const { generateOTP } = require("../services/helper");
const { isValidEmail, isValidPass } = require("../services/validations");

const signUp = async (req, res) => {
  try {
    const { fullname, email, password, address, phone } = req.body;
    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!isValidEmail(email))
      return res.status(400).send({ message: "Invalid email" });
    if (!password)
      return res.status(400).send({ message: "Password is required" });
    if (!isValidPass(password))
      return res
        .status(400)
        .send({ message: "Minimum 8 character is required for password" });

    const existUser = await userSchema.findOne({ email });
    if (!existUser)
      return res
        .status(400)
        .send({ message: "User with this email already exists" });

    const OTP = generateOTP();

    // saving to dataBase
    const user = new userSchema({
      fullname,
      email,
      password,
      address,
      phone,
      otp: OTP,
      otpExpires: Date.now() + 2 * 60 * 1000,
    });
    sentVerificationEmail({
      email: email,
      subject: "Email Verification",
      otp: OTP,
    });
    await user.save();
    return res.status(200).send({ message: "Registration successfull" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = { signUp };
