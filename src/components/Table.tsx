import React from "react";
import { Column } from "priority-web-sdk";
// import {createTable } from "../utils/createTable"

const Table = (props: any) => {
  const { rows, form } = props;
  const { CUSTOMERS } = rows;
  const reqFields = ["CUSTNAME", "ADDRESS", "CREATEDDATE", "EMAIL", "STATDES"];
  const columns: [string, Column][] = Object.entries(form.columns);
  const filtered = columns.filter((col) => col[1].iskey);
  // console.log("filtered:", filtered);
  // console.log("My columns:", columns);
  // console.log("My rows:", rows);
  const tableCols = columns.filter((col) => reqFields.includes(col[0]));
  // console.log("tableCols:", tableCols);
  const mySet = new Set(tableCols);
  // filtered.push(columns[15])
  filtered.forEach((col) => mySet.add(col));
  // console.log("mySet:", mySet);
  // console.log("CUSTOMERS:", CUSTOMERS[1]["CUSTNAME"]);
  // console.log("CUSTOMERS:", CUSTOMERS);
  const createCustomersArray = () => {
    const customers = [];
    for (const idx in CUSTOMERS) {
      customers.push(CUSTOMERS[idx]);
    }
    return customers;
  };
  const customers = createCustomersArray();

  const createCols = () => {
    const array = Array.from(mySet);
    return array.map((colData) => {
      return (
        <th key={colData[0]} style={{ padding: "20px" }}>
          {colData[1].title}
        </th>
      );
    });
  };

  const getRowData = (customer: any) => {
    const array = Array.from(mySet);
    // console.log("My array:", array);

    // console.log("Row customer:", customer);
    return array.map((tableField, idx) => {
      return (
        <td key={`${tableField[0]}_${idx}}`}>{customer[tableField[0]]}</td>
      );
    });
  };
  // const FillRows = () => {
  //     const getRowData = (customer: any) => {
  //         const array = Array.from(mySet)
  //         console.log("My array:", array);

  //         console.log("Row customer:", customer);
  //         return array.map((tableField, idx)=> {
  //             return (
  //                 <td key={`${tableField[0]}_${idx}}`} style={{padding: "20px"}}>{customer[tableField[0]]}</td>
  //             )

  //         })
  //     }

  //      for(const row in CUSTOMERS) {
  //         console.log("My index:", row);

  //         // return (
  //             <tr key={CUSTOMERS[row]["CUSTNAME"]} id={CUSTOMERS[row]["CUSTNAME"]} >
  //                 {getRowData(CUSTOMERS[row])}

  //             </tr>

  //         // )

  //     }
  // }
  // FillRows();
  // const tableStyle = {

  //     display: "flex",
  // flexDirection: "column",
  //     marginRight: "10px"
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2>{form.title}</h2>
      <table style={{ direction: "rtl", marginRight: "10px" }}>
        <thead>
          <tr>{createCols()}</tr>
        </thead>
        <tbody>
          {/* {FillRows()} */}
          {customers.map((customer) => {
            return <tr key={customer["CUSTNAME"]}>{getRowData(customer)}</tr>;
          })}
        </tbody>
      </table>
      {/* {createTable(Array.from(mySet), CUSTOMERS)} */}
    </div>
  );
};

export default Table;
