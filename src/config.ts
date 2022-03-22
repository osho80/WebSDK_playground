import { BooleanNumber } from "priority-web-sdk";
// type ServerMessage = {
//   type: string;
//   code: string;
//   fatal: boolean;
//   form: Form;
//   isLast: number;
//   message: string;
// };

export const loginConfig = {
  url: "http://localhost:3000/",
  username: "oshrih",
  password: "o123",
  tabulaini: "tabdev.ini",
  language: 1,
  profile: { company: "" },
  appname: "Mimi 3",
  devicename: "",
  appid: "",
  appkey: "",
};

export const filterObj = {
  or: 1 as BooleanNumber,
  ignorecase: 1 as BooleanNumber,
  QueryValues: [
    {
      field: "CUSTNAME",
      fromval: "b*",
      toval: "",
      op: "=",
      sort: 0 as BooleanNumber,
      isdesc: 0 as BooleanNumber,
    },
  ],
};
