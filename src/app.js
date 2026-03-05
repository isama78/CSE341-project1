import "dotenv/config.js";
import express from "express";
import contactsRouter from "./routes/contacts.routes.js";
import swaggerRoute from "./routes/swagger.routes.js";
import { initDb } from "./data/database.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept, X-Requested-With, Z-Key"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to my Contacts API!");
});

app.use("/", swaggerRoute);

app.use("/", contactsRouter);

const startServer = async () => {
  try {
    await initDb();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

startServer();
