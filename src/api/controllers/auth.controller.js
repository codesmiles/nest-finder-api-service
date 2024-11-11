const { ResponseType, SendResponse } = require("../utils/Response.utils");
const { validateRegisterUser } = require("../validations/index");
const { registerUserService, findUserService } = require("../services/index");

module.exports.registerUser = async (req, res) => {
  try {
    // validate user
    const validated = await validateRegisterUser(req.body);
    if (!validated) {
      const errorResponse = new SendResponse(
        400,
        ResponseType.ERROR,
        SendResponse.VALIDATION_ERROR,
        validated.error
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // register user
    const register_user = await registerUserService(dataValidated);
    if (!register_user) {
      const errorResponse = new SendResponse(
        400,
        ResponseType.ERROR,
        SendResponse.SERVICE_REQUEST_ERROR,
        null
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // return a successful response
    const response = new SendResponse(
      200,
      ResponseType.SUCCESS,
      SendResponse.SERVICE_REQUEST_SUCCESS,
      register_user
    );
    return res.status(200).json(response);
  } catch (err) {
    const errorResponse = new SendResponse(
      500,
      ResponseType.ERROR,
      SendResponse.SERVER_ERROR,
      null
    );
    return res.status(500).json(errorResponse.toJSon());
  }
};
