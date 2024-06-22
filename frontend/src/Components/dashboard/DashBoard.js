import React from 'react'
import TableComponent from '../tablecomponent/TableComponent'
import './DashBoard.css'
function DashBoard() {
    const data = [
        {name:'Vodafone Foundation',location:'Gujarat',csr:'25.0-50.0',contact:'hari.gopalakrishnen@vodafoneidea.com'},
        {name:'Vodafone Foundation',location:'Maharashtra',csr:'25.0-50.0',contact:'hari.gopalakrishnen@vodafoneidea.com'},
        {name:'Aditya Birla Hindalco',location:'Chhattisgarh',csr:'25.0-50.0',contact:'hil.refractory@adityabirla.com'},
        {name:'Aditya Birla Hindalco',location:'Dadra and Nagar Haveli',csr:'25.0-50.0',contact:'hil.refractory@adityabirla.com'},
        {name:'Aditya Birla Hindalco',location:'Gujarat',csr:'25.0-50.0',contact:'hil.refractory@adityabirla.com'},
        {name:'Aditya Birla Hindalco',location:'Jharkhand',csr:'25.0-50.0',contact:'hil.refractory@adityabirla.com'},
        {name:'Aditya Birla Hindalco',location:'Karnataka',csr:'25.0-50.0',contact:'hil.refractory@adityabirla.com'},
        {name:'Sun Foundation',location:'Tamil Nadu',csr:'25.0-50.0',contact:'info@sunfoundationindia.org'},
        {name:'Nalco Foundation',location:'Odisha',csr:'25.0-50.0',contact:'asutosh.rath@nalcoindia.co.in'},
        {name:'Lupin Human Welfare and research Foundation',location:'Maharashtra',csr:'25.0-50.0',contact:'infolhwrf@lupin.com'}
      ];
    
  return (
    <div className='container'>
       <TableComponent data={data} />
    </div>
  )
}

export default DashBoard
