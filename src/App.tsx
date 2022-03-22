import React, { useEffect, useState } from "react";
import "./App.css";
import {
  login,
  formStart,
  Form,
  MessagesCallback,
  FormRows,
} from "priority-web-sdk";
import { loginConfig, filterObj } from "./config";
import { updateFieldsCallback, messagesCallback } from "./utils/utils";
import Search from "./components/Search";
import Report from "./components/Report";
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
  let customersForm: any;

  // const updateFieldsCallback = (updates: any) => {
  //   console.log("updateFieldsCallback - update:", updates);

  //   if (updates["CUSTOMERS"] != null) {
  //     Object.assign(customersForm.rows, updates["CUSTOMERS"]);
  //   }
  // };

  // const messagesCallback = (serverMessage: any) => {
  //   console.log("messagesCallback - serverMessage:", serverMessage);

  //   alert(serverMessage.message);
  // };

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

  // useEffect(() => {
  //   const loginMethods = async () => {
  //     const x = await login(loginConfig);
  //     console.log("loginMethods:", x);
  //     setReady(true);
  //   };
  //   loginMethods();
  // }, []);

  // useEffect(() => {
  //   if (ready) {
  //     const getFormData = async () => {
  //       // console.log("Let's go!");
  //       const myForm = await formStart(
  //         "CUSTOMERS",
  //         messagesCallback,
  //         updateFieldsCallback,
  //         { company: "test" },
  //         0
  //       );
  //       // console.log("myForm:", myForm);
  //       // setForm(myForm);
  //     };
  //     getFormData();
  //   }
  // }, [ready]);

  // useEffect(()=> {

  //   const clearFilter = async()=> {
  //     if(form) await form.clearSearchFilter()
  //   }
  //   if(filter) {
  //     // clearFilter()
  //     // filterObj.QueryValues[0].fromval = filter + "*"

  //     const getFormData = async () => {
  //       const myForm = await formStart('CUSTOMERS', messagesCallback, updateFieldsCallback, {company: "test"}, 0);
  //       setForm(myForm)
  //     }
  //     // if(form) {
  //     //   form.queryFilters.queryValues[0].fromval = filter
  //     //   getFormData();
  //     // }
  //   }
  //     console.log("filterObj:", filterObj);
  //   if(form) {
  //     // console.log("setting a search filter");
  //     // if(filter) filterObj.QueryValues[0].fromval = filter + "*"
  //     // console.log("filterObj:", filterObj);

  //     const setFilter = async () => {
  //       await form.setSearchFilter(filterObj)
  //       // console.log("getting rows");
  //       const rows = await form.getRows(1);
  //       // console.log("My rows:", rows);
  //       setRows(rows)
  //     }
  //     setFilter();
  //   }
  // }, [form, filter])

  useEffect(() => {
    if (form) {
      const getRowsData = async () => {
        await form.setSearchFilter(filterObj);
        // console.log("getting rows");
        const rows = await form.getRows(1);
        // console.log("My rows:", rows);
        setRows(rows);
      };
      if (filter) {
        console.log({ filterObj });
        filterObj.QueryValues[0].fromval = filter + "*";
        filterObj.QueryValues[0].field = "CUSTNAME";
      }
      console.log({ filterObj });

      // getRowsData();
    }
  }, [form, filter]);
  console.log("Form:", form);
  console.log("Filter:", filter);

  return (
    <div className="App">
      <h1>Play Ground</h1>
      <h2>Priority Web SDK</h2>
      <Search setFilter={setFilter} />
      {/* {rows && form && <Report rows={rows} form={form}/>} */}
      {rows && form && <Table rows={rows} form={form} />}
      {/* {rows && form && <Report data={rows} formData={form}/>} */}
    </div>
  );
}

export default App;

{
  /* <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">1</Language><Hostname xmlns="PriorityNS">LP813</Hostname><WinUser xmlns="PriorityNS">ESHBEL\oshrih</WinUser><UtcOffset xmlns="PriorityNS">120@TZ@Asia/Jerusalem</UtcOffset><Environment xmlns="PriorityNS">test</Environment><SilverLight xmlns="PriorityNS">2</SilverLight><Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0"><u:Created>2022-03-08T11:11:34.489Z</u:Created><u:Expires>2022-03-08T11:17:34.489Z</u:Expires></u:Timestamp> <UsernameToken><Username>אלכסר	tabdev.ini</Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">1</Password></UsernameToken></Security></s:Header><s:Body><GeneralGetRecentUpdates xmlns="http://tempuri.org/"></GeneralGetRecentUpdates></s:Body></s:Envelope> */
}
