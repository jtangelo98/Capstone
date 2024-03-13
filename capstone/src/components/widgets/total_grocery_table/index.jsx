import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { CsvToHtmlTable } from 'react-csv-to-table';

export function TableComponent(){
  const [parsedCsvData, setParsedCsvData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../../../assets/products_data.csv'); // Path to your CSV file
      const reader = response.body.getReader();
      const result = await reader.read(); // Read the CSV file as binary data
      const decoder = new TextDecoder('utf-8');
      const csvData = decoder.decode(result.value); // Decode the binary data to CSV string
      const results = Papa.parse(csvData, {header:true});
      const rows = results.data;
      setParsedCsvData(rows); // Set parsed CSV data into state
    }
    fetchData();
  }, []); 

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
        </tr>
      </thead>
        <tbody>
        {parsedCsvData &&
            parsedCsvData.map((parsedData, index) => {
              {console.log(parsedData)}
              return(
                <tr key={index}>

                    <td>{parsedData.Name}</td>
                    <td>{parsedData.price}</td>
                    <td>{parsedData.PricePerUnit}</td>
                    <td>{parsedData.Category}</td> 
                </tr>
            )})}          
            
        </tbody>
    </Table>
  );
};

export default TableComponent;