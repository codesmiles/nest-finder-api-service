const { User } = require("../models");

module.exports.registerUserService = async (payload) => {

  const user = await User.create({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  return user;
};

module.exports.findUserService = async (payload) => {
  const findUser = await User.findOne({ where: payload });
  return findUser;
};
