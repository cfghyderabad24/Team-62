import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Chatbot from './Chatbot'
import axios from "axios"
import { useState,useEffect } from 'react'
import {toast} from "react-toastify"

const Home=()=>{
    // const [isFetchingComplete, setIsFetchingComplete] = useState(false);
    const [responses, setResponses] = useState([]);
    const [cName,setCName]=useState("")
    const [resCompanies,setResCompanies]=useState([])
    // const companies = [
    //   "Reliance Industries Limited",
    //   "Tata Consultancy Services Limited",
    //   "HDFC Bank Limited",
    //   "ICICI Bank Limited",
    //   "Infosys Limited",
    //   "Hindustan Unilever Limited",
    //   "State Bank of India",
    //   "Housing Development Finance Corporation Limited",
    //   "Adani Enterprises Limited"
    // ];
  
    // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     for (const company of companies) {
    //       const prompt = `give me the companyName(string), year(string), totalTurnover in crore rupees(int), netWorth in crore rupees(int), isMandated by law(boolean), csr_policies(array of string), annual_csr spend in crs(int), unspend_csr in crs(int), method_of_execution(array of strings) and geographics of interest(array of strings) of ${company} in 2020 to 21 in as a only JSON string with no other note and unwanted tags like json at the initial give me the location in india`;
  
    //       try {
    //         const response = await axios.post(
    //           "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
    //           { contents: [{ parts: [{ text: prompt }] }] }
    //         );
  
    //         const answer = JSON.parse(response.data.candidates[0].content.parts[0].text);
    //         setResponses(prevResponses => [...prevResponses, answer]);
    //         console.log(answer);
    //       } catch (error) {
    //         console.error(`Error fetching data for ${company}:`, error);
    //       }
  
    //       // Delay for 2 seconds between requests
    //       await delay(2000);
    //     }
    //     setIsFetchingComplete(true);
    //   };
  
    //   fetchData();

      
    // }, []);
  
    // useEffect(() => {
    //     if (isFetchingComplete) {
    //       console.log(JSON.stringify(responses));
    //         const addCompanies=async()=>{
    //           await axios.post("http://localhost:4000/company/add",JSON.stringify(responses))
    //         }
    //     }
    //   }, [isFetchingComplete, responses]);

    // useEffect(() => {
        // console.log(cName)
        // console.log(JSON.stringify(responses));
            // const addCompanies=async()=>{
            //   await axios.post("http://localhost:4000/company/add",JSON.stringify(responses))
            // }
    //   },[]);

      const fetchCompanies=async(req,res)=>{
        console.log(cName)
        var response=await axios.post("http://localhost:4000/company/get",{cName})
        if(response.data.success){
            const companies = response.data.companies;
            if(companies.length === 0){
                toast.dark("No company exists with such name")
            }else{
                setResCompanies(response.data.companies)
            }
        }else{
            toast.error("Error")
        }
      }

      useEffect(()=>{
        const getFirst=async()=>{
            var response=await axios.post("http://localhost:4000/company/get",{cName})
            setResCompanies(response.data.companies)
        }
        getFirst()
      },[])

    return(
        <div>
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid" style={{backgroundColor:"#192841",}}>
                {/* <Chatbot/> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHlxVwS8JynktGFnCQ30V02GlRFrWInQP2g&s" alt="" style={{minWidth:"50px",borderRadius:"50%",padding:"10px 5px",width:"70px"}} />
                <a className="navbar-brand me-auto px-3" href="#" style={{color:"white",fontSize:"max(15px,3vw)"}}>Jaldhaara</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div> */}
            </div>
            </nav>

            <div class="container my-4">
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <input class="form-control" type="search" placeholder="Enter Company Name" aria-label="Search" onChange={(e)=>{setCName(e.target.value)}} />
                        <span onClick={fetchCompanies} class="input-group-text"><i class="fas fa-search"></i></span>
                    </div>
                </form>
            </div>

            <div className='container'>
            <table className='table table-hover table-bordered'>
                    <tr>
                        <th>Company Name</th>
                        <th>Year</th>
                        <th>CSR Policies</th>
                        <th>CSR Spend</th>
                        <th>Geographics of Interest</th>
                    </tr>
                    { resCompanies  && resCompanies.map((company, index) => (
              <tr key={index}>
                <td>{company.companyName}</td>
                <td>{company.year}</td>
                <td>{company.csr_policies.join(', ')}</td>
                <td>{company.annual_csr_spend}</td>
                <td>{company.geographics_of_interest.join(', ')}</td>
              </tr>
            ))}
            </table>
            </div>

            <div style={{textAlign:"center"}}>
                <footer style={{backgroundColor:"#192841",color:"white",width:"100%",fontSize:"max(15px,1.5vw)"}}>
                <p>&copy; 2024 Jaldhaara Foundation. All rights reserved.</p>
                <p>Contact: contact@jaldhaara.org</p>
                </footer>
            </div>
        </div>
    )
}


export default Home