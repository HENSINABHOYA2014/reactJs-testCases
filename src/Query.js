import React from 'react'

function Query() {
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
                <input type='text' placeholder='Enter Your Name'/>
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
            </center>
        </>
    )
}

export default Query
