const express=require("express")
const {addCompany,getCompany}=require("../controllers/CompanyController.js")

const CompanyRouter=express.Router()

CompanyRouter.get("/add",addCompany)

CompanyRouter.post("/get",getCompany)

module.exports=CompanyRouter;