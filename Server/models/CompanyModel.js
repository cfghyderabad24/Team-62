const mongoose=require("mongoose");

const CompanySchema=new mongoose.Schema({
    companyName:{
        type:"String",
    },
    year:{
        type:"String",
    },
    totalTurnover:{
        type:"Number",
    },
    netWorth:{
        type:"Number",
    },
    isMandatedByLaw:{
        type:"Boolean",
    },
    csr_policies:{
        type:[String],
    },
    anual_csr_spend:{
        type:"Number",
    },
    unspend_csr:{
        type:"Number",
    },
    method_of_execution:{
        type:[String],
    },
    geographics_of_interest:{
        type:[String],
    }
})

const CompanyModel=mongoose.models.company || mongoose.model("company",CompanySchema)

module.exports=CompanyModel;