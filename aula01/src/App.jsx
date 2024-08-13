import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function clearCount() {
    setCount(0);
  }

  return (
    <>
      <button onClick={addCount}>Click</button>
      <button onClick={clearCount}>Clear</button>
      <p>{count}</p>

      <h4>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eius
        voluptatem, eveniet doloribus repellat corrupti aspernatur perspiciatis
        nobis quod accusamus sed quis maiores repudiandae quo ab at itaque et
        pariatur!
      </h4>
    </>
  );
}

export default App;
