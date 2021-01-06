const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@ecomern.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Sherdil Khan",
    email: "khansherdilprivate@gmail.com",
    password: bcrypt.hashSync("sherdil", 10),
  },
  {
    name: "John Doe",
    email: "jdoe@gmail.com",
    password: bcrypt.hashSync("john", 10),
  },
];

module.exports = users;
