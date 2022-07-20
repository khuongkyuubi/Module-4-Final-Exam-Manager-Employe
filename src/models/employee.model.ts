import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {type: "String", required: [true, "Missing name!"]},
    code: {type: "String", required: [true, "Missing code!"], unique: [true, "ID have exsist!"]},
    salary: {type: "Number", required: [true, "Missing salary!"]},
    age: {
        type: "Number",
        required: [true, "Missing age"],
        min: [18, "Must be more than 18"],
        max: [100, "Too old for work"]
    },
    depart: {type : mongoose.Schema.Types.ObjectId, ref: "Depart"}
});

const employeeModel = mongoose.model("Employee",employeeSchema);

export {employeeModel}