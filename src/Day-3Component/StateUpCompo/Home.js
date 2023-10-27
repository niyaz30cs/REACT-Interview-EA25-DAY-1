import React, { useState } from 'react'

function Home(props) {
    const [name, setName] = useState("")
    const handleSubmit = () => {
        props.getData(name)
    }
    return (
        <div>
            <h1>Child:{props.send}</h1>
            <label>Name:</label>
            <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home
