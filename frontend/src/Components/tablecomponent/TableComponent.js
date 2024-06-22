import React from 'react';
import './TableComponent.css'
const TableComponent = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name of the company',
        accessor: 'name',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'CSR Fund',
        accessor: 'csr',
      },
      {
        Header: 'Contact',
        accessor: 'contact',
      },
    ],
    []
  );

  return (
    <div className='table-container'>
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;
