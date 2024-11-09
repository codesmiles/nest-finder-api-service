const { joi, validator } = require("./validator");

const registerUserSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: joi.ref("password")
});

exports.validateRegisterUser = validator(registerUserSchema);

const forgetPasswordSchema = joi.object({
  email: joi.string().email().required(),
});
exports.validateForgetPassword = validator(forgetPasswordSchema);

const resetPasswordSchema = joi.object({
  password: joi
    .string()
    .min(6)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  token: joi.string().required(),
});
exports.validateResetPassword = validator(resetPasswordSchema);
