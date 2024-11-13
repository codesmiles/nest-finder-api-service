const ResponseType = Object.freeze({
  SUCCESS: "success",
  ERROR: "Error",
});

class ResponseAbstract {
  constructor(status, type, message, data = null) {
    this.status = status;
    this.type = type;
    this.message = message;
    this.data = data;

    if (this.constructor === ResponseAbstract) {
      throw new Error(
        "ResponseAbstract is a base class and cannot be instantiated directly"
      );
    }
    if (this.toJSon === undefined) {
      throw new Error("Child classes must implement toJSon method");
    }
  }
}

class SendResponse extends ResponseAbstract {
  static SERVER_ERROR = "server_errors";
  static EXISTING_USER = "user_already_exists";
  static NOT_FOUND_ERROR = "not_found";
  static VALIDATION_ERROR = "request_validation_errors";
  static SERVICE_REQUEST_ERROR = "service_request_errors";
  static SERVICE_REQUEST_SUCCESS = "service_request_successful";

  constructor(status, type, message, data) {
    super(status, type, message, data);
  }

  toJSon() {
    return {
      status: this.status,
      type: this.type,
      message: this.message,
      data: this.data,
    };
  }
}

module.exports = { ResponseType, SendResponse };

// // Usage examples:
// const successResponse = new SendResponse("Operation successful", 200, { id: 1 }, ResponseType.SUCCESS);
// console.log(successResponse.toJSon());
// // Output: { message: "Operation successful", type: "success", status: 200, data: { id: 1 } }

// const errorResponse = new SendResponse("Something went wrong", 400, { error: "Invalid input" }, ResponseType.ERROR);
// console.log(errorResponse.toJSon());
// // Output: { message: "Something went wrong", type: "error", status: 400, data: { error: "Invalid input" } }
