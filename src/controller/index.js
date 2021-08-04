module.exports = {
  userCreate: require("./users/users_create_controller"),
  userUpdate: require("./users/users_update_controller"),
  userGetOne: require("./users/users_get_one_controller"),
  userGetAll: require("./users/users_get_all_controller"),
  userDeleteOne: require("./users/users_delete_controller"),
  sendMail: require("./emails/send_email_controller"),
};
