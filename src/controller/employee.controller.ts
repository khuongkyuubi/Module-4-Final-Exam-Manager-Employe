import {employeeModel} from "../models/employee.model";
import {departModel} from "../models/depart.model";


class EmployeeController {

    constructor() {
    }

    async createDepart(req, res, next) {
        // const newDaprt = [
        //     {
        //         departID: "MKT",
        //         departName: "Marketing",
        //     },
        //     {
        //         departID: "HR",
        //         departName: "Human Resource",
        //     },
        //     {
        //         departID: "ACC",
        //         departName: "Accounting",
        //     },
        //     {
        //         departID: "IT",
        //         departName: "Information Technology",
        //     }
        // ];
        //
        // for (const depart of newDaprt) {
        //     await departModel.create(depart)
        // }

        return res.json(await departModel.find({}))
    }

    async showList(req, res, next) {

        const employeeList = await employeeModel.find({})
            .populate({
                path: "depart",
                select: ["departName", "departID"]
            });
        // return res.json(employeeList)
        const departList = await departModel.find({});
        const sortAge = "age"
        return res.render("index", {employeeList, departList, sortAge})


    }

    async createEmployee(req, res, next) {

        await employeeModel.create(req.body)
        return res.redirect("/employee/list");

    }


    async findEmployee(req, res, next) {
        let employeeID = req.query.id;
        console.log(employeeID)
        const employee = await employeeModel.findOne({_id: employeeID});
        return res.json(employee)

    }

    async updateEmployee(req, res, next) {
        const { employeeID, name, code, age, salary, depart } = req.body;
        try {
            await employeeModel.findOneAndUpdate({_id: employeeID}, {name, code, age, salary, depart});
            return res.redirect("/employee/list")

        } catch (e) {
            console.log(e.message)
        }

    }

    async deleteEmployee(req, res, next) {
        const {employeeID} =  req.body;
        try {
            await employeeModel.findByIdAndDelete({_id: employeeID});
            console.log("Delete employee successfull!");
            return res.redirect("/employee/list")
        } catch (e) {
            console.log(e.message)
        }

    }

    async sortByAge(req, res, next) {
        let sortAge = req.query.sort
        if(sortAge === "age") {
            sortAge = "-age"
        } else if (sortAge === "-age") {
            sortAge = "age";
        }

        const employeeList = await employeeModel.find({})
            .populate({
                path: "depart",
                select: ["departName", "departID"]
            }).sort(sortAge);
        // return res.json(employeeList)
        const departList = await departModel.find({})
        return res.render("index", {employeeList, departList, sortAge})



    }


}

export default new EmployeeController();