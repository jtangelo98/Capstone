import { useState } from 'react';
import { Table } from 'react-bootstrap';

export function GroceryTable(){
  const [data, setData] = useState([]);
  fetch('assets/mini_products_data.csv')
  .then(response => response.text()) 
  .then(csvString => {
  //Split the csv into rows
  const rows = csvString.split('\n');
  for (const row of rows) {
  //Split the row into each of the comma separated values
      data.push(row.split(","));
    }
    console.log(data);

    return(
      <table>
        <tbody>
          {
               data.map((numList,i) =>(
                  <tr key={i}>
                   {
                     numList.map((num,j)=>
                        <td key={j}>{num}</td>
                     )
                   }
                  </tr>
               ))
          }
        </tbody>
      </table>
    )
});
}

export default GroceryTable;