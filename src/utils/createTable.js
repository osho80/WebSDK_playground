export const createTable = (cols, data) => {
    const createCols = () => {
            
        return cols.map(colData => {
            return (
                <th key={colData[0]} style={{padding: "20px"}}>
                    {colData[1].title}
                </th>
            )
        })
        
    }

    const FillRows = () => {
        const getRowData = (customer) => {
            return cols.map((tableField, idx)=> {
                return (
                    <td key={`${tableField[0]}_${idx}}`}>{customer[tableField[0]]}</td>
                )

            })
        }
        for(const row in data) {
            
            return (
                <tr key={data[row]["CUSTNAME"]} id={data[row]["CUSTNAME"]} >
                    {getRowData(data[row])}
                    
                </tr>


            )
            
        }
    }

    const tableStyle = {
        display: 'flex',
        justifyContent: "right",
        marginRight: "10px"
    }
    return (
        <table style={tableStyle}>
            <thead style={{direction: "rtl"}}>
                <tr>
                    {createCols()}
                </tr>
            </thead>
            <tbody>
                {FillRows()}
            </tbody>
        </table>
    )
}