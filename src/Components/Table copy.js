/* eslint-disable array-callback-return */
import React from "react";
import jsonData from "../data/json_data.json";
const ouData = jsonData.metaData.dimensions.ou;
const dxData = jsonData.metaData.dimensions.dx;
const rowData = jsonData.rows;

const firstRowData = (tableSelection) => {
  const firstTableCol = [];
  const secondTableCol = [];

  ouData.map((place) => {
    firstTableCol.push(jsonData.metaData.names[place]);
  });
  dxData.map((disease) => {
    secondTableCol.push(jsonData.metaData.names[disease]);
  });

  if (tableSelection) {
    return ["Places vs data", ...firstTableCol];
  } else {
    return ["Data vs places", ...secondTableCol];
  }
};

const tableRowsData = (tableSelection) => {
  const firstTableRows = [];
  const secondTableRows = [];

  if (tableSelection) {
    dxData.forEach((diz) => {
      let values = [jsonData.metaData.names[diz]];
      ouData.forEach((pla) => {
        rowData.forEach((row) => {
          if (row[0] === diz && row[1] === pla) {
            values.push(row[2]);
          }
        });
      });
      firstTableRows.push(values);
    });
    return firstTableRows;
  } else {
    ouData.forEach((pla) => {
      let values = [jsonData.metaData.names[pla]];
      dxData.forEach((diz) => {
        rowData.forEach((row) => {
          if (row[0] === diz && row[1] === pla) {
            values.push(row[2]);
          }
        });
      });
      secondTableRows.push(values);
    });
    return secondTableRows;
  }
};

const Table = (props) => {
  return (
    <div>
      <table
        className="table"
        style={{
          width: "70%",
          height: "350px",
          marginLeft: "15%",
          marginTop: "90px",
        }}
      >
        <thead className="thead-dark">
          <tr>
            {firstRowData(props.name).map((value) => {
              return (
                <th>
                  <b>{value}</b>
                </th>
              );
            })}

            {}
          </tr>
        </thead>
        <tbody>
          {tableRowsData(props.name).map((row) => (
            <tr>
              {row.map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
