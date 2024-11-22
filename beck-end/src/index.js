import express from "express"; 
import loginRoutes from "./routes/login.js";
import cors from "cors"; 

const app = express();  
app.use(express.json()); 
app.use(cors()); 
app.use("/", loginRoutes);
app.listen(8800); 