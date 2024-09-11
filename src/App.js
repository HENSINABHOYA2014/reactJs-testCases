import logo from './logo.svg';
import './App.css';
import './Crud.css';
import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Users from './Users';
import Query from './Query';
import Method from './Method';
import User from './User';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result)
  }
  console.log(data.id, "data");
  return (
    <>
      <center>
        <br />
        <br />
        <h1>List of Users</h1>
        <ul>
          {
            data.map((item) => {
              return (<li key={item.id}>{item.name}</li>)
            })
          }
        </ul>

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
        <input type='text' id='input1' />
        <label htmlFor='input1'>User Age</label>
        <input type='text' id='input2' />
        <div role='dummy'>dummy text</div>
        <br />
        <Query />
        <Method />
        <h1>Test component Props</h1>
        <User name="Hensiiiiii" />
      </center>
    </>
  );
}

export default App;
