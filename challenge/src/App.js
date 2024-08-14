import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

//
function App() {
  const [color, setColor] = useState("");
  const [isDarkText, setIsDarkTest] = useState(true);
  return (
    <div className="App">
      <Square color={color} isDarkText={isDarkText} />
      <Input
        color={color}
        setColor={setColor}
        isDarkText={isDarkText}
        setIsDarkTest={setIsDarkTest}
      />
    </div>
  );
}

export default App;
