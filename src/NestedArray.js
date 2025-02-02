import React from "react";
import { Table } from "react-bootstrap";

function NestedArray() {

    const users = [
        {name: 'Sajjad', email:'sajjad@gmail.com', phone:'01718', address:[
            {house:'H1'},
            {house:'H3'},
            {house:'H2'},
        ]},
        {name: 'Sajjad', email:'sajjad@gmail.com', phone:'01718', address:[
            {house:'H1'},
            {house:'H3'},
            {house:'H2'},
        ]},
        {name: 'Sajjad', email:'sajjad@gmail.com', phone:'01718', address:[
            {house:'H1'},
            {house:'H3'},
            {house:'H2'},
        ]},
    ];
    return (
        <div>
            <h1>Nested Array</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                    {
                        users.map((item, key)=> (
                            <tr key={key}>
                                <td> {key + 1} </td>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td> {item.phone} </td>
                                <td>
                                    {
                                        item.address.map((address, addKey)=>(
                                            <tr key={addKey}>
                                                <td> {address.house} </td>
                                            </tr>
                                        ))
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default NestedArray;