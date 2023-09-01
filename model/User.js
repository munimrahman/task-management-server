const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: [true, "Email Already Exists"],
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, "Username Already Exists"],
    },
    profilePhoto: {
      type: String,
    },
    about: {
      type: String,
    },
    designation: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [4, "Password must be at least 4 characters."],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const { password } = this;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordMatch = bcrypt.compareSync(password, hash);
  return isPasswordMatch;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
