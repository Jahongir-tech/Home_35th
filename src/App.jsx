import "./App.css";
import Car from "./components/car/Car";
import Food from "./components/food/Food";
import Hero from "./components/hero/Hero";

function App() {
  const handleClick = (p) => {
    alert("function comp " + p);
  };
  return (
    <>
      {/* <Hero title={"class component"} /> */}
      {/* <h2>App</h2> */}
      {/* <Food /> */}
      <Car />
      {/* <button onClick={() => handleClick(5)}>Click</button> */}
    </>
  );
}

export default App;
