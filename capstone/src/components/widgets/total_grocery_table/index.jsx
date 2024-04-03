import React, { useState } from 'react';
import CSVfile from "../../../assets/products_data.csv"

export function CsvTable() {
  // const [file, setCSVFile] = useState();
  const file = CSVfile;
  const [array, setArray] = useState([]);
  const fileReader = new FileReader();
  
  const handleOnChange = (e) => {
    this.setCSVFile(e.target.files[0]);
  };


  const csvArray = (string) => {
    const header = string.slice(0, string.indexOf("\n")).split(",");
    const rows = string.slice(string.indexOf("\n") + 1).split("\n");
    const array = rows.map((i) => {
      const values = i.split(",");
      const obj = header.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    this.setArray(array);
  };

  fileReader.onload = (e) => {
    this.csvArray(e.target.result);
  };

  if (file) {
    fileReader.readAsText(file);
  }

  return (
    <div>

    </div>
  );
}

export default CsvTable();
