const Joi = require("joi");
const authConfig = require("../config/auth");

const registerSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(authConfig.usernameMinLength)
    .max(authConfig.usernameMaxLength)
    .required()
    .messages({
      "string.alphanum": "Username must contain only letters and numbers",
      "string.min": `Username must be at least ${authConfig.usernameMinLength} characters`,
      "string.max": `Username must not exceed ${authConfig.usernameMaxLength} characters`,
      "any.required": "Username is required",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .min(authConfig.passwordMinLength)
    .required()
    .messages({
      "string.min": `Password must be at least ${authConfig.passwordMinLength} characters`,
      "any.required": "Password is required",
    }),
  displayName: Joi.string().max(50).optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    "any.required": "Refresh token is required",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
};
