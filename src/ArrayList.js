import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Table } from "react-bootstrap";
function ArrayList()
{
    const users = [
        {name:'Sajjad', email:'sajjad@gmail.com', phone:'01719041636'},
        {name:'Sajja', email:'sajja@gmail.com', phone:'0171904163'},
        {name:'Sajj', email:'sajj@gmail.com', phone:'017190416'},
        {name:'Saj', email:'saj@gmail.com', phone:'01719041'},
    ];

    return (
        <div>
           <Table  bordered  >
                <tbody>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                    {
                        users.map((item, key)=> (
                            <tr key={key}>
                                <td> {key + 1} </td>
                                <td> { item.name} </td>
                                <td> { item.email} </td>
                                <td> { item.phone} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> 
        </div>
    );
}

export default ArrayList;