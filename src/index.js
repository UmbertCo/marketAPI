import app from "./app.js";
import { sequelize } from "./db/db.js";
import './models/post.js';

export const main = async () => {
  try {
    await sequelize.sync()
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(3200);
    console.log("Serverlistening on port: ", 3200);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
