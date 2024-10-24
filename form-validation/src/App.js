import "./App.css";
import FormInput from "./components/FormInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    password: "",
    confirmpassword: "",
    photo: null,
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      errorMessage: "Do not include any special character!",
      label: "Firstname",
      pattern: "^[A-Za-z]+$",
      required:true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      errorMessage: "Do not include any special character!",
      label: "Lastname",
      pattern: "^[A-Za-z]+$",
      required:true,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter the valid email id",
      label: "Email",
      required:true,
    },
    {
      id: 5,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true,
    },
    {
      id: 6,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords don't match!",
      label: "Confirm password",
      pattern: values.password,
      required:true,
    },
    {
      id: 7,
      name: "photo",
      type: "file",
      placeholder: "Upload your picture",
      label: "Upload picture(optional)",
      accept: "image/*",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your details are succuessfully registered.");
    console.log(values);
  };

  const onChange = (e) => {
    if (e.target.name === "photo"){
      setValues({...values, [e.target.name]: e.target.files[0]});
    }else{
    setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={input.type === "file" ? undefined: values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
