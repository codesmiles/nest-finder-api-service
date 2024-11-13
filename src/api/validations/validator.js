const joi = require("joi");

// create a closure to hold the schema
const validator = (schema) => async (payload) => {
  const validateData = await schema.validate(payload, { abortEarly: false });
  
  if (validateData.error) { 
    const errors = validateData.error.details.map((error) => ({
      field: error.context.key,
      message: error.message,
    }));

    return { errors };
  }
  
  return validateData.value;
}

module.exports = {
  validator,
  joi,
};
