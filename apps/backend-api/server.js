import "dotenv/config";
import express from "express";
import iconv from "iconv-lite"

const app = express();
const PORT = process.env.PORT ?? 5500;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
})

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is healthy"
    });
})

app.post("/user", (req, res) => {
   const { username , password } = req.body;
   if(!username || !password) {
     return res.status(400).json({
        message: "Either of the input fields is missing"
     });
   }

   return res.status(200).json({
      message: `Welcome ${username}!. Be careful with your password: ${iconv.encode(password, "base64")} `
   });
})

app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on port ${PORT}`);
})
