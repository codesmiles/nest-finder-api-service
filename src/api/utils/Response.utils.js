const ResponseType = Object.freeze({
  SUCCESS: "success",
  ERROR: "Error",
});

class ResponseAbstract {
  constructor(message, status, type, data = null) {
    this.message = message;
    this.status = status;
    this.type = type;
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
  constructor(message, status, type, data) {
    super(message, status, type, data);
  }

  toJSon() {
    return {
      type: this.type,
      status: this.status,
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
