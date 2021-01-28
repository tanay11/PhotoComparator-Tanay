import React from 'react'
import Table from 'react-bootstrap/Table'
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export const TableComponent = (props) => {
    const {tableData, setTableData} = props;

    const removeRow = (rowIndex) => {
        const filteredData = tableData.filter( element => element.id !== rowIndex)
        setTableData(filteredData);
    }

    return (
        <div>
            <h3> Comparision Table</h3>
            { tableData.length > 0 ?
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th></th>
                    <th>ID</th>
                    <th>URL</th>
                    <th>Title</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return (
                            <tr>
                            <td><img src={item.thumbnailUrl} style={{maxWidth:"30px"}}/></td>
                            <td>{item.id}</td>
                            <td>{item.url}</td>
                            <td>{item.title}</td>
                            <td><button onClick = {() => removeRow(item.id)}>Remove</button></td>
                            </tr>
                        )
                    })}
                    
                    
                </tbody>
                </Table>:
                <div>
                    <h5> Press Compare to add photos to table</h5>
                </div>
                }
        </div>
    )
}
