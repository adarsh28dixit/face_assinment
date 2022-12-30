//triimport { JSON } from "mysql/lib/protocol/constants/types";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const { userName, password } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(formData.userName);
    if (!formData.userName || !formData.password) {
      alert("Pls filled all the details");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(formData.userName));
      alert('successfully logged in')
      navigate("/main");
    }
  };
  return (
    <>
      <h3>Login</h3>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User id</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            value={userName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
