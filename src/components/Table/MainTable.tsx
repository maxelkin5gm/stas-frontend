import React, {useState} from 'react';
import {Table} from "antd";



const MainTable = ({data, columns} :{data: any, columns: any}) => {
    const [selectedRow, setSelectedRow] = useState(0)

    return (
        <Table
            pagination={false}
            dataSource={data}
            columns={columns}
            size={"small"}
            rowSelection={{
                type: "radio",
                onChange: (selectedRowKeys, selectedRows) => {
                    setSelectedRow(selectedRowKeys[0] as number)
                },
                selectedRowKeys: [selectedRow]
            }}

            onRow={(record, rowIndex) => {
                return {
                    onClick: event => {
                        setSelectedRow(record.key)
                    },
                    onDoubleClick: event => {
                        console.log("dbl")
                    },
                };
            }}
        />
    );
};

export default MainTable;