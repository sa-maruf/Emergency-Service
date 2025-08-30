import Nav from './components/Nav'
import Hero from './components/Hero'
import Box from './components/Box'
import { useState } from 'react'

const App = () => {
    const [count,setCount]=useState(0);
    const [copy,setCopy]=useState(0);

    const heartCount=()=>{
        setCount(count+1);
    }
    const copyCount=()=>{
        setCopy(copy+1);
    }
    
    return (
        <>
            <Nav count={count} copy={copy} />
            <Hero />
            <Box heartCount={heartCount} copyCount={copyCount} />
        </>
    )
}

export default App;