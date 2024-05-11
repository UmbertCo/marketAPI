import app from "./app.js";
import { sequelize } from "./db/db.js";
import 'dotenv/config'
const PORT = process.env.PORT || 3200

export const main = async () => {
  try {
    await sequelize.sync({force: false}) /*eliminar force para recreate a todo */
    await sequelize.authenticate()
    console.log("Connection has been established successfully.");
    app.listen(PORT);
    console.log("Serverlistening on port: ", PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
