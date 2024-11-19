import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  bcrypt_SaltRound: Number(process.env.BCRYPT_SALT_ROUNDS) as number,
};
