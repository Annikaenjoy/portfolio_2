import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Frontpage from "./view/Frontpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Frontpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
