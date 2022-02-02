import React, { useState } from "react";
import "../App.css";
import { Button, TextField } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Company, setCompany] = useState("");
  return (
    <div>
      <h1>Form</h1>
      <form className="form" >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={name}
          autoComplete="off"
          autoFocus={true}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="Designation"
          label="Designation"
          variant="outlined"
          autoComplete="off"
          value={Designation}
          onChange={(e) => setDesignation(e.target.value)}
        />

        <TextField
          id="Company"
          label="Company"
          variant="outlined"
          autoComplete="off"
          value={Company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Button variant="contained" onClick={() => console.log(name,Designation,Company)}>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
