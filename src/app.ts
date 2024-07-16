import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.routes";

const app: Application = express();
// const port = 3000

// Parser
app.use(express.json());
app.use(cors());

// Student routes
app.use("/api/v1/students", StudentRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

export default app;
