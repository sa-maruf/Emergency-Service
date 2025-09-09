import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [copy, setCopy] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // copy count function 
  const copyCount = () => {
    setCopy(copy + 1)
  }

  // heart function
  const handleHeartClick = (id) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
      setHeartCount(heartCount - 1);
    } else {
      setFavoriteIds([...favoriteIds, id]);
      setHeartCount(heartCount + 1);
    }
  };

  return (
    <>
      <Nav copy={copy} heartCount={heartCount} />
      <Hero />
      <Card copyClick={copyCount} handleHeartClick={handleHeartClick} favoriteIds={favoriteIds} />
    </>
  )
}

export default App;