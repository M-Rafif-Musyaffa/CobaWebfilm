import "./App.css";
import Navbars from "./components/Navbars";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Drama from "./components/Drama";
import "./style/Landingpage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <Navbars />
        <Intro />
      </div>
      {/* Intro End */}

      {/* Trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* Trending End */}

      {/* Drama */}
      <div className="drama">
        <Drama />
      </div>
      {/* Trending End */}
    </div>
  );
}

export default App;
