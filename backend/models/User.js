//user login signup model
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        verified: {type: Boolean, default:false},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const User = mongoose.model("User", UserSchema);
const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = { User:User, validate:validate };