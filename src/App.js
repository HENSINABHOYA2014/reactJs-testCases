import logo from './logo.svg';
import './App.css';
import './Crud.css';
import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Users from './Users';
import Query from './Query';



function App() {

  return (
    <>
      <center>
        <br />
        <br />
       
        {/* <Crud />
        <h1>Class Component Method testing</h1>
        <Users />
        <h1>Function Component Method testing</h1>
        <button>Update</button>
        <h2>getByRole</h2>
        <input type='text' value="HelloWorld" /> */}
        <h1>Multiple elements and Custom Role</h1>
        <h1>Custom Role</h1>
        <button>Click 1</button>
        <button>Click 2</button>
        <label htmlFor='input1' >User Name</label>
        <input type='text' id='input1'/>
        <label htmlFor='input1'>User Age</label>
        <input type='text' id='input2'/>
        <div role='dummy'>dummy text</div>
        <br/>
        <Query/>
      </center>
    </>
  );
}

export default App;
