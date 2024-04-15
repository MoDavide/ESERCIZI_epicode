import "./App.css";
import MyNavComponent from "./components/MyNavComponent";
import MyFooterComponent from "./components/MyFooterComponent";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Data from "./fantasy.json";



function App() {
  return (
    <>
      <MyNavComponent />
      <Welcome />
      <AllTheBooks immagini = {Data}/>
      <MyFooterComponent />
    </>
  );
}

export default App;
