const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    fullname: {
      String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
    },
    otp: {
      type: Number,
      default: null,
    },
    otpExpires: { type: Date },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

// middleWare
userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log(error);
  }
});

// custom password compare method
userSchema.methods.comparePasswords = async function (paramPass) {
  return await bcrypt.compare(paramPass, this.password);
};

module.exports = mongoose.model("user", userSchema);
