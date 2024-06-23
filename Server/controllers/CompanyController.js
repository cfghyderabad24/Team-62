const Cmodel=require("../models/CompanyModel.js")

const arrayOfCompanies=[{"companyName":"Reliance Industries Limited","year":"2020-21","totalTurnover":590257,"netWorth":388596,"isMandatedByLaw":true,"csr_policies":["Sustainable Development Goals","Education","Healthcare","Skill Development","Rural Development","Empowerment of Women","Environment Protection"],"annual_csr_spend":1000,"unspend_csr":0,"method_of_execution":["Direct Implementation","Partnerships with NGOs","Grants"],"geographics_of_interest":["India","International"]},
{"companyName":"Tata Consultancy Services Limited","year":"2020-21","totalTurnover":191753,"netWorth":126954,"isMandatedByLaw":true,"csr_policies":["Sustainable Development Goals","Education","Healthcare","Livelihood Development","Environment"],"annual_csrSpendInCrs":100,"unspendCsrInCrs":0,"methodOfExecution":["Direct Execution","Partnerships with NGOs","Grant Making"],"geographicsOfInterest":["India","Global"]},
{"companyName":"HDFC Bank Limited","year":"2020-21","totalTurnover":123860,"netWorth":140974,"isMandatedByLaw":true,"csr_policies":["Sustainable Development Goals (SDGs)","Environmental Sustainability","Financial Inclusion","Education and Skill Development","Health and Hygiene","Community Development"],"annual_csr_spend":475,"unspend_csr":0,"method_of_execution":["Direct Implementation","Partnerships with NGOs","Grants and Donations"],"geographics_of_interest":["India"]},
{"companyName":"ICICI Bank Limited","year":"2020-21","totalTurnover":102880,"netWorth":170598,"isMandatedByLaw":true,"csr_policies":["Sustainable Development Goals","Financial Inclusion","Education","Healthcare","Skill Development","Environmental Sustainability","Disaster Relief"],"annual_csrSpendInCrs":450,"unspendCsrInCrs":0,"methodOfExecution":["Direct Implementation","Partnerships with NGOs","Grant Making"],"geographicsOfInterest":["India"]},
{"companyName": "Infosys Limited",
    "year": "2020-21",
    "totalTurnover": 104220,
    "netWorth": 84200,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Healthcare", "Rural Development", "Environment"],
    "annual_csr_spend": 360,
    "unspend_csr": 10,
    "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
    "geographics_of_interest": ["India", "Global"]
  },
  {
    "companyName": "Hindustan Unilever Limited",
    "year": "2020-21",
    "totalTurnover": 45000,
    "netWorth": 37000,
    "isMandatedByLaw": true,
    "csr_policies": ["Health and Well-being", "Water and Sanitation", "Sustainable Livelihoods"],
    "annual_csr_spend": 120,
    "unspend_csr": 5,
    "method_of_execution": ["Direct Implementation", "Partnerships", "Grants"],
    "geographics_of_interest": ["India"]
  },
  {
    "companyName": "State Bank of India",
    "year": "2020-21",
    "totalTurnover": 278200,
    "netWorth": 214000,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Healthcare", "Sanitation", "Environment"],
    "annual_csr_spend": 500,
    "unspend_csr": 15,
    "method_of_execution": ["Direct Implementation", "Partnerships with NGOs"],
    "geographics_of_interest": ["India"]
  },
  {
   "companyName": "Housing Development Finance Corporation Limited",
    "year": "2020-21",
    "totalTurnover": 106500,
    "netWorth": 92000,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Healthcare", "Community Development", "Environment"],
    "annual_csr_spend": 200,
    "unspend_csr": 8,
    "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
    "geographics_of_interest": ["India"]
  },
  {
    "companyName": "Adani Enterprises Limited",
    "year": "2020-21",
    "totalTurnover": 38000,
    "netWorth": 25000,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Healthcare", "Sustainable Development Goals", "Rural Development"],
    "annual_csr_spend": 80,
    "unspend_csr": 2,
    "method_of_execution": ["Direct Implementation", "Partnerships"],
    "geographics_of_interest": ["India"]
  },
{
    "companyName": "Bharti Airtel Limited",
    "year": "2020-21",
    "totalTurnover": 100000, // Placeholder value, please replace with actual data
    "netWorth": 80000, // Placeholder value, please replace with actual data
    "isMandatedByLaw": true, // Placeholder value, please replace with actual data
    "csr_policies": ["Education", "Healthcare", "Digital Inclusion"], // Placeholder value, please replace with actual data
    "annual_csr_spend": 300, // Placeholder value, please replace with actual data
    "unspend_csr": 7, // Placeholder value, please replace with actual data
    "method_of_execution": ["Direct Implementation", "Partnerships"], // Placeholder value, please replace with actual data
    "geographics_of_interest": ["India", "Africa"] // Placeholder value, please replace with actual data
  },
{
    "companyName": "ITC Limited",
    "year": "2020-21",
    "totalTurnover": 53310,
    "netWorth": 48547,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Healthcare", "Environment Sustainability", "Livelihood Enhancement"],
    "annual_csr_spend": 250,
    "unspend_csr": 5,
    "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
    "geographics_of_interest": ["India"]
  },
  {
    "companyName": "Bajaj Finance Limited",
    "year": "2020-21",
    "totalTurnover": 26045,
    "netWorth": 33992,
    "isMandatedByLaw": true,
    "csr_policies": ["Education", "Skill Development", "Financial Inclusion", "Healthcare"],
    "annual_csr_spend": 90,
    "unspend_csr": 3,
    "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
    "geographics_of_interest": ["India"]
  },
    {
        "companyName": "Adani Total Gas Ltd",
        "year": "2020-21",
        "totalTurnover": 1283.01,
        "netWorth": 4986.09,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Environment"],
        "annual_csr_spend": 5.2,
        "unspend_csr": 0.5,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Kotak Mahindra Bank Ltd.",
        "year": "2020-21",
        "totalTurnover": 32083.21,
        "netWorth": 71983.39,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Financial Inclusion", "Skill Development"],
        "annual_csr_spend": 120.4,
        "unspend_csr": 2.3,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Adani Green Energy Ltd",
        "year": "2020-21",
        "totalTurnover": 303.78,
        "netWorth": 15091.17,
        "isMandatedByLaw": true,
        "csr_policies": ["Renewable Energy", "Environment", "Community Development"],
        "annual_csr_spend": 3.5,
        "unspend_csr": 0.4,
        "method_of_execution": ["Direct Implementation", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Bajaj Finserv Ltd.",
        "year": "2020-21",
        "totalTurnover": 60301.19,
        "netWorth": 37139.01,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Financial Inclusion", "Skill Development"],
        "annual_csr_spend": 90.7,
        "unspend_csr": 1.2,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Sun Pharmaceutical Industries Ltd.",
        "year": "2020-21",
        "totalTurnover": 33102.59,
        "netWorth": 56234.75,
        "isMandatedByLaw": true,
        "csr_policies": ["Healthcare", "Education", "Access to Medicines"],
        "annual_csr_spend": 104.3,
        "unspend_csr": 0.7,
        "method_of_execution": ["Direct Implementation", "Partnerships with Healthcare NGOs", "Grants"],
        "geographics_of_interest": ["India", "Global"]
      },
      {
        "companyName": "Titan Company Limited",
        "year": "2020-21",
        "totalTurnover": 21052.29,
        "netWorth": 7753.68,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Artisan Support"],
        "annual_csr_spend": 47.8,
        "unspend_csr": 1.0,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Wipro Ltd.",
        "year": "2020-21",
        "totalTurnover": 61938.89,
        "netWorth": 55064.96,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Digital Literacy", "Environmental Sustainability"],
        "annual_csr_spend": 166.5,
        "unspend_csr": 0.8,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India", "Global"]
      },
      {
        "companyName": "UltraTech Cement Ltd.",
        "year": "2020-21",
        "totalTurnover": 42121.02,
        "netWorth": 47468.22,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Infrastructure Development", "Environment"],
        "annual_csr_spend": 142.9,
        "unspend_csr": 1.3,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Nestlé India Ltd.",
        "year": "2020-21",
        "totalTurnover": 14089.43,
        "netWorth": 3195.89,
        "isMandatedByLaw": true,
        "csr_policies": ["Nutrition", "Water Conservation", "Health and Wellness"],
        "annual_csr_spend": 41.5,
        "unspend_csr": 0.9,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Adani Ports and Special Economic Zone Ltd. (APSEZ)",
        "year": "2020-21",
        "totalTurnover": 12555.88,
        "netWorth": 47364.75,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Maritime Development"],
        "annual_csr_spend": 80.3,
        "unspend_csr": 1.5,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Oil and Natural Gas Corporation Ltd. (ONGC)",
        "year": "2020-21",
        "totalTurnover": 39678.56,
        "netWorth": 234857.67,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Environmental Conservation", "Community Development"],
        "annual_csr_spend": 350.2,
        "unspend_csr": 0.6,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "JSW Steel",
        "year": "2020-21",
        "totalTurnover": 81965.85,
        "netWorth": 48322.45,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Environment"],
        "annual_csr_spend": 225.4,
        "unspend_csr": 1.7,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "NTPC Limited",
        "year": "2020-21",
        "totalTurnover": 103550.32,
        "netWorth": 130231.43,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Renewable Energy", "Community Development"],
        "annual_csr_spend": 320.5,
        "unspend_csr": 0.9,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Mahindra and Mahindra Limited",
        "year": "2020-21",
        "totalTurnover": 44257.26,
        "netWorth": 59712.17,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Rural Development"],
        "annual_csr_spend": 190.2,
        "unspend_csr": 1.1,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      },
      {
        "companyName": "Power Grid Corporation of India",
        "year": "2020-21",
        "totalTurnover": 40317.67,
        "netWorth": 78613.85,
        "isMandatedByLaw": true,
        "csr_policies": ["Education", "Healthcare", "Skill Development", "Infrastructure Development"],
        "annual_csr_spend": 112.3,
        "unspend_csr": 0.7,
        "method_of_execution": ["Direct Implementation", "Partnerships with NGOs", "Grants"],
        "geographics_of_interest": ["India"]
      }
]

const addCompany=async(req,res)=>{
    // const {cname, csrFund, gInterests,contact,location }=req.body;
    // const {responses}=req.body;
    console.log(arrayOfCompanies)
    try{
        await Cmodel.insertMany(arrayOfCompanies)
    }catch(error){
        console.log(error)
    }
    res.send("Done")
}

const getCompany=async(req,res)=>{
    const {cName}=req.body;
    try{

        if(cName===""){
            const companies=await Cmodel.find({})
            res.json({success:true,companies})
        }else{
            const companies=await Cmodel.find({companyName: cName })
            res.json({success:true,companies})
            console.log(companies)
        }
        
    }catch(error){
        res.json({success:false})
        console.log(error)
    }
}

module.exports={addCompany,getCompany}