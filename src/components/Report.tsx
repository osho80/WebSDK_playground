import React, {useState, useEffect} from "react";
import { Form } from "priority-web-sdk" 


const Report = (props: any) => {
    const {rows, form } = props;
    const {CUSTOMERS} = rows;
    const columns = form.columns;
    const [cols, setCols] = useState<any>(null);
    console.log("$$ columns:", columns);
    
    
    
    useEffect(()=> {
        const cols = new Set()
        const updatedCols = createCols(form)
        setCols(updatedCols)
    }, [])

    useEffect(()=> {
        createRows(CUSTOMERS)
    }, [cols])
    const createCols = (form: Form) => {
        const cols = new Set()
        for (const col in columns) {
            if(columns[col].iskey) {
                // cols.add({id: col, value:columns[col]})
                
                  
                cols.add(columns[col])  
            }
        }
        // cols.add({id: "CUSTNAME", value: columns.CUSTNAME})
        // cols.add({id: "ADDRESS", value: columns.ADDRESS})
        // cols.add({id: "CREATEDDATE", value: columns.CREATEDDATE})
        // cols.add({id: "EMAIL", value: columns.EMAIL})
        // cols.add({id: "STATDES", value: columns.STATDES})

        cols.add(columns.ADDRESS)
        cols.add(columns.CREATEDDATE)
        cols.add(columns.EMAIL)
        cols.add(columns.STATDES)
        return Array.from(cols);
    }
    const createRows = (CUSTOMERS: any) => {
        
        // console.log("Report CUSTOMERS:", CUSTOMERS);
    }
    // console.log("columns:", columns);
    // createCols(form)
    // console.log("cols:", cols);
    const tableStyle = {
        display: 'flex',
        justifyContent: "right",
        marginRight: "10px"
        // direction: 'rtl',
    }
    
    return (
    
    <div>
        <h1>My Report</h1>
        <h2>{form.title}</h2>
        {cols && cols.length > 0 && <table style={tableStyle}>
            {console.log("$$ cols:", cols)}
            <thead style={{direction: "rtl"}}>
                
            <tr >
                {cols.map((col: any) => {
                    
                    
                    return (
                        <th key={col.title} style={{padding: "20px"}}>
                            {col.title}
                        </th>
                    )
                })}
                
                {/* <th>
                    שם
                </th>
                <th>
                    תיאור
                </th>
                <th>
                    סטטוס
                </th> */}
            </tr>
            </thead>
            <tbody>
                {/* {createRows(CUSTOMERS)} */}
            </tbody>
        </table>}
    </div>)
}

export default Report