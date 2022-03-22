import {
  login,
  formStart,
  Form,
  MessagesCallback,
  ServerResponse,
  BooleanNumber,
} from "priority-web-sdk";
import { loginConfig } from "../config";

type Filter = {
  or: BooleanNumber;
  ignorecase: BooleanNumber;
  QueryValues: [
    {
      field: string;
      fromval: string;
      toval: string;
      op: string;
      sort: BooleanNumber;
      isdesc: BooleanNumber;
    }
  ];
};

const configFilter = (query: string, field: string) => {
  return {
    or: 1 as BooleanNumber,
    ignorecase: 1 as BooleanNumber,
    QueryValues: [
      {
        field,
        fromval: query + "*",
        toval: "",
        op: "=",
        sort: 0 as BooleanNumber,
        isdesc: 0 as BooleanNumber,
      },
    ],
  };
};
export const getRowsData = async (
  query: string,
  field: string = "CUSTNAME",
  form: Form
) => {
  const filter = configFilter(query, field);
  await form.setSearchFilter(filter);
  const rows = await form.getRows(1);
  // console.log("My rows:", rows);

  return rows;
};
export const updateFieldsCallback = (updates: any) => {
  if (updates["CUSTOMERS"] != null) {
    // Object.assign(customersForm.rows, updates["CUSTOMERS"]);
    console.log("Updats:", updates);
  }
};

const messagesCallback = (serverMessage: ServerResponse) => {
  alert(serverMessage.message);
};

export const initLogin = async () => {
  const res: any = await login(loginConfig);
  return res;
};

export const getFormData = async () => {
  const form = await formStart(
    "CUSTOMERS",
    messagesCallback,
    updateFieldsCallback,
    { company: "test" },
    0
  );
  return form;
};
