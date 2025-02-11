import React, { useState } from "react";

function Voucher()
{
    const [formValues, setFormValues] = useState([{ name: "", email : ""}]);
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
     }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <>
            <div className="row" data-row={index}>
                <div className="col-md-5">
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input onChange={(e)=> handleChange(index, e)} className="form-control" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input onChange={(e)=> handleChange(index, e)} className="form-control" />
                    </div>
                </div>
                {
                    index 
                    ?
                    <div className="col-md-1">
                        <button className="btn btn-danger mt-4" onClick={() => removeFormFields(index)} >X</button>
                    </div>
                    :
                    null
                }
            </div>
            </>
          ))}
          <div className="button-section">
              <button className="btn btn-primary m-3" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="btn btn-success" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default Voucher;