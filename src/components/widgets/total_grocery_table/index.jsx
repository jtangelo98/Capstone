import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export function GroceryTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('mini_products_data.csv')
      .then(response => response.text())
      .then(csvString => {
        //Split the csv into rows
        const rows = csvString.split('\n');
        const parsedData = rows.map(row => row.split(","));
        setData(parsedData);
      });
  }, []); 

  return (
    <Table striped bordered hover variant = "dark">
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((item, j) => (
              <td key={j}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
