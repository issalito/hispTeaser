import React from "react";
import jsonData from "../data/json-data.json";

const dxData = jsonData.metaData.dimensions.dx;
const peData = jsonData.metaData.dimensions.pe;
const ouData = jsonData.metaData.dimensions.ou;
const rowsData = jsonData.rows;

const Headers = () => {
  const tableHeader = ["", "", ""];

  ouData.forEach((pla) => {
    tableHeader.push(jsonData.metaData.items[pla].name);
    tableHeader.push(["", "", "", "", "", "", "", "", "", ""]);
  });

  return tableHeader;
};

const subHeader = () => {
  const subHeaderTable = [""];
  ouData.forEach((pla) => {
    dxData.forEach((diz) => {
      subHeaderTable.push(jsonData.metaData.items[diz].name);
    });
  });

  return subHeaderTable;
};

const rowsValues = () => {
  const rowss = [];
  peData.forEach((pe) => {
    let valueWor = [jsonData.metaData.items[pe].name];
    ouData.forEach((pla) => {
      dxData.forEach((diz) => {
        rowsData.forEach((row) => {
          if (row[0] === diz && row[1] === pla && row[2] === pe) {
            valueWor.push(row[3]);
          }
        });
      });
    });
    rowss.push(valueWor);
  });
  return rowss;
};

const Table = () => {
  const headers = Headers();
  const rows = rowsValues();
  const subhead = subHeader();

  return (
    <div>
      <table
        className="table table-bordered"
        style={{
          width: "70%",
          height: "350px",
          marginLeft: "10%",
          marginTop: "90px",
        }}
      >
        <thead>
          <tr>
            {headers.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
          <tr>
            {subhead.map((sub) => {
              return <th>{sub}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
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
