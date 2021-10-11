import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Routing from "./routing"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App () {
  return (
    <>
      <Router>
        <Switch>
          <Routing />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
