import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home"

function App() {
  return <div className="container">
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={home}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
