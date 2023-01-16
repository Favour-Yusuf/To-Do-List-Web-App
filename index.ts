import express, { Application, Request, Response } from "express";
import cors from "cors";

const Port = 2003;
const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: " server is up and Running",
  });
});

app.listen(Port, () => {
  console.log("Server is listening");
});
