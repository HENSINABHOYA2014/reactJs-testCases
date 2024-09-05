import React, { useEffect, useState } from 'react'

function Method() {
    const [data, setData] = useState(false);
    const [alldata,setAlldata]=useState("");
    const[name,setName]=useState("")

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 800);
    })
    return (
        <>
            <h1>Assertion Methods</h1>
            <input type='text' defaultValue={"H N"} name='username' className='test-style' id='user-name' data-test="test" />
            <button className='btn' id='btn-id'>Edit</button>
            <h1>TextMatch with String and Regex</h1>
            <div>My Self Hensi Nabhoya</div>
            <h1>findBy and findAllBy | test async elements</h1>
            {
                data ? <h2>Data Found</h2> : <h2>Data Not Found</h2>
            }
            <br />
               <h1>Click Event with User Event Library</h1>
               <button onClick={()=>setAlldata("Hello")}>Hello World</button>
               <h4>{alldata}</h4>
               <br />
               <h1>onChange Event Testing</h1>
               <input  type='text'placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
               <h4>{name}</h4>
        </>
    )
}

export default Method
