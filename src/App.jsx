import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [copy, setCopy] = useState(0);

  // copy count function 
  const copyCount = () => {
    setCopy(copy + 1)
  }
  return (
    <>
      <Nav copy={copy} />
      <Hero />
      <Card copyClick={copyCount} />
    </>
  )
}

export default App;