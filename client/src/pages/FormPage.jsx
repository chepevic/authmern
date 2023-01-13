import React, { useState } from "react";

export const FormPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { name, email } = inputs;

  const onSubmit = async(e) => {
    e.preventDefault();
    const resp=await fetch("http://localhost:8888/php/api/",{
        method:"POST",
        body:JSON.stringify(inputs)

    })
    // const data=await resp.json();
    // console.log(data);
  };
  const handleInputChange = ({ target }) => {

    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="name">Email</label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};
