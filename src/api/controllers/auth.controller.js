const { ResponseType, SendResponse } = require("../utils/Response.utils");
const { validateRegisterUser } = require("../validations/index");

// const authValidation = require("../Validations/auth.validation");
module.exports.registerUser = async (req, res) => {
    try {
        //   validate user
        const validation = await validateRegisterUser(req.body);

        // check id user with email exists
        // register user
        // return a successful response
    } catch (err) { };
};
