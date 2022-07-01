import React, { useState } from 'react'

export const App = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = data;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler} >
          <input type="text" name="username" value={username}
            onChange={changeHandler}
            placeholder="Username" /><br />
          <input type="text" name="password" value={password}
            onChange={changeHandler}
           placeholder="password" /><br />
          <input type="submit" name="submit" />

        </form>
      </center>
    </div>
  );
}
export default App