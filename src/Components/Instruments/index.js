import React, { useState, useEffect } from 'react';

function Instruments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://prototype.sbulltech.com/api/v2/instruments')
      .then(response => response.text())
      .then(csv => {
        // Parse the CSV string into an array of rows
        const rows = csv.split('\n');

        // Set the state with the rows
        setData(rows);
      });
  }, []);
  return (
    
    <table>
      <thead>
        <tr>
          <th>{data[0].split(',')[0]}</th>
          <th>{data[0].split(',')[1]}</th>
          <th>{data[0].split(',')[2]}</th>
          <th>{data[0].split(',')[3]}</th>

          
        </tr>
      </thead>
      <tbody>
        {data.map(row => {
          // Split the row into an array of cells
          const cells = row.split(',');

          return (
            <tr>
              {cells.map(cell => <td>{cell}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Instruments;