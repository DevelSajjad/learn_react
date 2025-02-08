import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router";

function Filter() {
    const {category_name} = useParams();
    const [searchParam, setSearchParam] = useSearchParams();
    const city = searchParam.get('city');
    const age = searchParam.get('age');
    const text = searchParam.get('text');
    function submitForm(e) {
        e.epreventDefault();
    }
    return (
        <>
            <h1>City: {city} </h1>
            <h1>Age: {age} </h1>
            <h1>Text: {text} </h1>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Form.Label>Filter</Form.Label>
                    <Form.Control id="filter" type="text" onChange={(e)=> setSearchParam({age:30, city:'Dinajpur'})} defaultValue={category_name}  placeholder="Enter you anything to search" />
                </FormGroup>
                <Button onClick={()=>setSearchParam({text:document.getElementById('filter').value, age:age, city:city})} variant="info">
                    Filter
                </Button>
            </Form>
        </>
    )
}

export default Filter;