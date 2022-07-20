import express from "express";
import bodyParser from 'body-parser';
import connectDB from "./src/config/db";
import employeeRouter from "./src/routers/employee.router";

const PORT = 3000;

connectDB();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
// setup view engine (do file index.js nằm ở thư mục dist nên sau này , mọi truy cập phải từ file đấy)
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.get("/", (req, res, next) => {
    return res.redirect("/employee/list");
});


app.use("/employee", employeeRouter)

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
});

