import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import OllTitle from "./components/OllTitle";
import OllBody from "./components/OllBody";

function App() {
  return (
      <Router>
        <div>
            <div>
                <h2>posts</h2>
                <Link to={"/posts"}><button>this is button</button></Link>

            </div>
            <div>
                <h2>comment</h2>
                <Link to={"/comment"}><button>this is button</button></Link>
            </div>
            <div>
                <Switch>
                    <Route path={"/posts"}>
                        <OllTitle/>
                    </Route>
                    <Route path={"/comment"}>
                        <OllBody/>
                    </Route>
                </Switch>
            </div>
        </div>
      </Router>

  );
}

export default App;
//}{OTT@Bb)CH_2741_08M!ROS!@V@
