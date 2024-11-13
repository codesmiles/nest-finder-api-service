const { ResponseType, SendResponse } = require("../utils/Response.utils");
const { validateRegisterUser } = require("../validations");
const { registerUserService, findUserService } = require("../services");

module.exports.registerUser = async (req, res) => {
  try {
    // validate user
    const validated = await validateRegisterUser(await req.body);
    if (validated.errors) {
      const errorResponse = new SendResponse(
        400,
        ResponseType.ERROR,
        SendResponse.VALIDATION_ERROR,
        validated.errors
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // check if user exists
    const find_user = await findUserService({ email: validated.email });
    if (find_user) {
      const errorResponse = new SendResponse(
        400,
        ResponseType.ERROR,
        SendResponse.EXISTING_USER,
        null
      );
      return res.status(400).json(errorResponse.toJSon());
    }

    // hash password
    // validated.password = await bcrypt.hash(validated.password, 10);
    
    // register user
    const register_user = await registerUserService(validated);
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
