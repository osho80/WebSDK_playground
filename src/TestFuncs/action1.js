import * as priorityWebSdk from 'priority-web-sdk'
// import {onShowMessge} from 'priority-web-sdk'

const action1 = async () => {
        //Open the LOGPART Form
        

    const mainFormHandler = await priorityWebSdk.formStart('LOGPART', onShowMessge, null, company, 0);

    // Create a filter to locate the desired part by part number, in this example - "001"

    let filter = {
        or: 0,
        ignorecase:1,
        QueryValues: [{
            field : "PARTNAME",
            fromval : "001",
            op : "=",
            sort : 0,
            isdesc : 0
        }]
    };

    //Set the new filter on the form

    await mainFormHandler.setSearchFilter(filter);

    //retrieve form rows with the applied filter

    await mainFormHandler.getRows(1);
    await mainFormHandler.setActiveRow(1)

}