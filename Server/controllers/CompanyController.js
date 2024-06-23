const Cmodel=require("../models/CompanyModel.js")

const arrayOfCompanies=[{
    "companyName": "Reliance Industries Ltd", "year": "2020-21", "totalTurnover": 665778, "netWorth": 1482543, "isMandatedByLaw": true, "csr_policies": ["Education", "Healthcare", "Rural development", "Sustainability"], "anual_csr_spend": 1128, "unspend_csr": 0, "method_of_execution": ["Direct implementation", "Partnership with NGOs"], "geographics_of_interest": ["All India"] 
}
]

const addCompany=async(req,res)=>{
    // const {cname, csrFund, gInterests,contact,location }=req.body;
    try{
        await Cmodel.insertMany(arrayOfCompanies)
    }catch(error){
        console.log(error)
    }
    res.send("Done")
}

const getCompany=async(req,res)=>{
    const companyName="Reliance Industries Ltd"
    const isMandatedByLaw=true
    const year="2020-21"
    try{
        const companies=await Cmodel.find({
            $and: [
                { companyName },
                { isMandatedByLaw}, // Convert string to boolean
                { year },
                { csr_policies: { $in: ["Healthcare", "Rural development"] } } // Convert comma-separated string to array
            ]
        })

        // const companies = await Cmodel.find({
        //     csr_policies: { $any: ["Healthcare", "Rural development"] }
        // });
        console.log(companies)
    }catch(error){
        console.log(error)
    }
    res.send("Given")
}

module.exports={addCompany,getCompany}