import React, { useState } from "react";
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })
  const history = useHistory()

  const onChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', form)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        history.push("/bubblepage")
      })
      .catch(err => console.log(err))
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">username
          <input type="text" id="username" name="username" placeholder="Username" value={form.username} onChange={onChange} />
          </label>
        </div>
        <div>
          <label htmlFor="password">password
          <input type="password" id="password" name="password" placeholder="Password" value={form.password} onChange={onChange} />
          </label>
        </div>
        <button>Log In</button>
      </form>
    </div>
      
    </>
  );
};

export default Login;
