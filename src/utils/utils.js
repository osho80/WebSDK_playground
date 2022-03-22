export const updateFieldsCallback = (updates) => {
    if(updates["CUSTOMERS"] != null) {
      Object.assign(customersForm.rows,updates["CUSTOMERS"]);
    }
  }
  
  export const messagesCallback = (serverMessage) => {
    alert(serverMessage.message);
  }