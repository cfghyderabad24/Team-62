// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//   const [responses, setResponses] = useState([]);
//   const companies = [
//     "Reliance Industries Limited",
//     "Tata Consultancy Services Limited",
//     "HDFC Bank Limited",
//     "ICICI Bank Limited",
//     "Infosys Limited",
//     "Hindustan Unilever Limited",
//     "State Bank of India",
//     "Housing Development Finance Corporation Limited",
//     "Adani Enterprises Limited"
//   ];

//   const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

//   useEffect(() => {
//     const fetchData = async () => {
//       for (const company of companies) {
//         const prompt = `give me the companyName(string), year(string), totalTurnover in crore rupees(int), netWorth in crore rupees(int), isMandated by law(boolean), csr_policies(array of string), annual_csr spend in crs(int), unspend_csr in crs(int), method_of_execution(array of strings) and geographics of interest(array of strings) of ${company} in 2020 to 21 in as a only JSON string with no other note and unwanted tags like json at the initial give me the location in india`;

//         try {
//           const response = await axios.post(
//             "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
//             { contents: [{ parts: [{ text: prompt }] }] }
//           );

//           const answer = JSON.parse(response.data.candidates[0].content.parts[0].text);
//           setResponses(prevResponses => [...prevResponses, answer]);
//           // console.log(answer);
//         } catch (error) {
//           console.error(`Error fetching data for ${company}:`, error);
//         }

//         // Delay for 2 seconds between requests
//         await delay(2000);
//       }
//     };

//     // const addCompanies=async()=>{
//     //   await axios.post("http://localhost:4000/company/add",JSON.stringify(responses))
//     // }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const addCompanies = async () => {
//       if (responses.length > 0) {
//         try {
//           await axios.post("http://localhost:4000/company/add", responses);
//           console.log("Data sent to backend successfully");
//         } catch (error) {
//           console.error("Error sending data to backend:", error);
//         }
//       }
//     };

//     addCompanies();
//   }, [responses]);
//   return null;
// };

// export default Chatbot;