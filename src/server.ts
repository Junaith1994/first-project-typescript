import app from "./app";
import mongoose from "mongoose";
import config from "./config";
// import config from "./config/index";

// Mongoose connection info
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_URL as string);
    app.listen(config.port, () => {
      console.log(`Project app listening on port ${config.port}`);
    });

    console.log("Mongoose connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}
