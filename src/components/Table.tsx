import React from "react";
import { Column } from "priority-web-sdk";

const Table = (props: any) => {
  const { rows, form } = props;
  const { CUSTOMERS } = rows;
  const reqFields = ["CUSTNAME", "ADDRESS", "CREATEDDATE", "EMAIL", "STATDES"];
  const columns: [string, Column][] = Object.entries(form.columns);
  const filtered = columns.filter((col) => col[1].iskey);

  const tableCols = columns.filter((col) => reqFields.includes(col[0]));

  const mySet = new Set(tableCols);

  filtered.forEach((col) => mySet.add(col));

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

    return array.map((tableField, idx) => {
      return (
        <td key={`${tableField[0]}_${idx}}`}>{customer[tableField[0]]}</td>
      );
    });
  };

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
          {customers.map((customer) => {
            return <tr key={customer["CUSTNAME"]}>{getRowData(customer)}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
