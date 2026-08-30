import "./App.css";
import IdCard from "./IdCard";
import pic1 from "./assets/images/maxence.png"
import pic2 from "./assets/images/maxence-glasses.png"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard picture={pic1} firstName="John" lastName="Doe" gender="Male" height="180cm" birth="1990-01-01"/>
      <IdCard picture={pic2} firstName="obrien" lastName="Delores" gender="Female" height="165cm" birth="1992-05-15"/>

    </div>
  );
}

export default App;

