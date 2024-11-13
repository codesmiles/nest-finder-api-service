const { logger } = require("../../configs");
const { SendResponse, ResponseType } = require("../utils/Response.utils");
module.exports.errorHandler = (err, req, res, next) => {
  
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Handle JSON parse error
    logger.error("JSON parse error:", err);
    const errorResponse = new SendResponse(
      400,
      ResponseType.ERROR,
      SendResponse.SERVER_ERROR,
      err
    );
    return res.status(400).json(errorResponse.toJSon());
  }

  next(err);
};
