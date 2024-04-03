// CSVTable.js
import React, { useState } from 'react';
import { parseCSV } from './parseCSV'; // Import the CSV parser function

const CSVTable = () => {
  const [csvData, setCSVData] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const text = event.target.result;
      setCSVData(text);
      const parsedData = await parseCSV(text);
      setTableData(parsedData);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileInputChange} />
      <table>
        <thead>
          <tr>
            {tableData.length > 0 &&
              Object.keys(tableData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVTable;
