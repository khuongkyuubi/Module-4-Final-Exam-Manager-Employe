import express from "express";
const router = express.Router();
import employeeController from "../controller/employee.controller";

import {employeeModel} from "../models/employee.model";
import {departModel} from "../models/depart.model";


//[GET] /employee/create-depart
router.get('/create-depart',employeeController.createDepart );

//[GET] /employee/list
router.get("/list", employeeController.showList);

//[POST] /employee/create
router.post("/create", employeeController.createEmployee);

router.get("/find-employee", employeeController.findEmployee);

router.post("/update", employeeController.updateEmployee);

router.post("/delete", employeeController.deleteEmployee);

router.get("/sort-by-age", employeeController.sortByAge)




export default router;