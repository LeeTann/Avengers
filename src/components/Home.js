import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Avengers Datatbase</h1>
            <h4>Heros to the rescue!!!</h4>
            <Link to="/avengers">Enter</Link>
        </div>
    )
}

export default Home;