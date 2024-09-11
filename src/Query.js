import React, { useEffect, useState } from 'react'

function Query() {
    let login = true;


    return (
        <>
            <center>

                <h1>RTL Query : getAllbyRole</h1>
                <button>Click Me </button>
                <button>Click Me </button>
                <button>Click Me </button>
                <button>Click Me </button>
                <button>Click Me </button>
                <button>Click Me </button>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br />
                <br />
                <br />
                <h1>RTL Query : getbyLabelTest</h1>
                <label htmlFor='user-name'>UserName</label>
                <input type='text' id='user-name' />
                <label htmlFor='skills'>Skills</label>
                <input type='checkbox' id='skills' defaultChecked={true} />
                <br />
                <br />
                <br />
                <h1>RTL Query : getAllbyLabelTest</h1>
                <label htmlFor='user-name1'>UserAge</label>
                <input type='text' id='user-name1' defaultValue={"hensi"} />

                <label htmlFor='user-age'>UserAge</label>
                <input type='text' id='user-age' defaultValue={"hensi"} />

                <label htmlFor='user-number'>UserAge</label>
                <input type='text' id='user-number' defaultValue={"hensi"} />
                <br />
                <br />
                <br />
                <h1>RTL Query : getPlaceholderText</h1>
                <input type='text' placeholder='Enter Your Name' />
                <br />
                <br />
                <br />
                <h1>RTL Query : getByText</h1>
                <button>Login</button>
                <p className='ptag' id='id1'>P Tag Testing</p>
                <h1>h1 Tag Testing</h1>
                <br />
                <br />
                <br />
                <h1>RTL Query :getByTestId and getAllByTestId</h1>
                <div data-testid="div-test-id">Testing with test id</div>
                <div data-testid="div-test-id">Testing with test id</div>
                <h2 data-testid="h2-test-id">h2 tag testing</h2>
                <h2 data-testid="h2-test-id">Th2 tag testing</h2>
                <br />
                <br />
                <br />
                <h1>Overriding data-testid</h1>
                <div id='test-element' data-testid="test-div">Hello World</div>
                <br />
                <br />
                <br />
                <h1>RTL Query :getByDisplayValue and getAllByDisplayValue</h1>
                <textarea defaultValue={"My Mom is my life"} />
                 <div>
                <input type="text" defaultValue="Henuuu" />
            </div>
                <br />
                <input type='radio' defaultValue={"mail"} />
                <br />
                <br />
                <br />
                <h1>RTL Query :getByTitle and getAllByTitle</h1>
                <button title='Click Please Me'>Click Please Me</button>
                <button title='Click Please Me'>Click Please Me</button>
                <button title='Click Please Me'>Click Please Me</button>
                <button title='Click Please Me'>Click Please Me</button>
                <button title='Click Please Me'>Click Please Me</button>
                <br />
                <br />
                <br />
                <h1>RTL Query :getByAltText and getAllByAltText</h1>
                <img alt="flower image" src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" width={"30%"} />
                <img alt="flower image" src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" width={"30%"} />
                <img alt="flower image" src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" width={"30%"} />
                <h1>TextMatch with String and Regex</h1>
                <div>Hellooooo World</div>
                <h5>Har Har mahadev</h5>
                <br />
                <h1>QueryBy and QueryAllBy | Test hidden elements</h1>
                {
                    login ? <button>Logout</button> : <button>Login</button>
                }
                <br />
                <br />
                <h1 id='testing-id' className='test-class'>Test Elements with JavaScript Query | Custom Query</h1>
                <br />
                <h2>Ganpati Bappa Moriya!</h2>
                <input/>
            </center>
        </>
    )
}

export default Query
