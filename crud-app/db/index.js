const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://shaheer:${process.env.DB_PASSWORD}@mobilephonesinventory.60rr69o.mongodb.net/mobilePhones?retryWrites=true&w=majority&appName=mobilePhonesInventory`
    )
    .then(() => console.log("Database is connected"))
    .catch((error) => console.log(error));
};

module.exports = { dbConnection };
