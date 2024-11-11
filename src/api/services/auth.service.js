const { User } = require("../models/index");

module.exports.registerUserService = async (payload) => {
    const [user, created] = await User.findOrCreate({
      where: { email: payload.email},
      defaults: {
        ...payload
      },
    });

    return created ?? user;
};

module.exports.findUserService = async (payload) => {
    const findUser = await User.findOne({ where: payload });
    return findUser;
};
