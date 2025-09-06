const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    addresses: [
      {
        street: String,
        city: String,
        state: String,
        pinCode: String,
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
