import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "priority-web-sdk";
import Search from "./components/Search";
import Table from "./components/Table";
import {
  initLogin,
  getFormData,
  getRowsData,
} from "./services/priorityService";

function App() {
  const [ready, setReady] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("*");
  const [form, setForm] = useState<null | Form>(null);
  const [rows, setRows] = useState<any>(null);

  useEffect(() => {
    initLogin().then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) {
      getFormData().then((res) => setForm(res));
    }
  }, [ready]);

  useEffect(() => {
    if (form)
      getRowsData(filter, undefined, form).then((rows) => setRows(rows));
  }, [form, filter]);

  return (
    <div className="App">
      <h2>Priority Web SDK Exercise</h2>
      <Search setFilter={setFilter} />
      {rows && form && <Table rows={rows} form={form} />}
    </div>
  );
}

export default App;
