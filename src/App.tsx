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
  const [filter, setFilter] = useState<string>("");
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
    if (form) {
      getRowsData(undefined, undefined, form).then((rows) => setRows(rows));
      if (filter)
        getRowsData(filter, undefined, form).then((rows) => setRows(rows));
    }
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

{
  /* <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">1</Language><Hostname xmlns="PriorityNS">LP813</Hostname><WinUser xmlns="PriorityNS">ESHBEL\oshrih</WinUser><UtcOffset xmlns="PriorityNS">120@TZ@Asia/Jerusalem</UtcOffset><Environment xmlns="PriorityNS">test</Environment><SilverLight xmlns="PriorityNS">2</SilverLight><Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0"><u:Created>2022-03-08T11:11:34.489Z</u:Created><u:Expires>2022-03-08T11:17:34.489Z</u:Expires></u:Timestamp> <UsernameToken><Username>אלכסר	tabdev.ini</Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">1</Password></UsernameToken></Security></s:Header><s:Body><GeneralGetRecentUpdates xmlns="http://tempuri.org/"></GeneralGetRecentUpdates></s:Body></s:Envelope> */
}
