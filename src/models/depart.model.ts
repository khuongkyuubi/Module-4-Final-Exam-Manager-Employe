import mongoose from "mongoose";

const departSchema = new mongoose.Schema({
    departID: {type: "String", required: true, unique: true},
    departName: {type: "String", required: true}
});

const departModel = mongoose.model("Depart", departSchema)

export {departModel} ;