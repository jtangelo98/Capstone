// CSVParser.js
import csv from 'csv-parse';

// Function to parse CSV data and return an array of objects
export const parseCSV = async (csvData) => {
  return new Promise((resolve, reject) => {
    csv(csvData, { columns: true }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
