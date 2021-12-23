import "./App.css";
import Home from "./Components/Home";
import ImageApp from "./Components/image";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compressor from "./Components/compressor";

// import Compressor from "./Components/compressor";
// import Upload from "./Components/timepass";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/image">
            <ImageApp />
          </Route>
          <Route exact path="/compressor">
            <Compressor />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
