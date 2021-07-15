import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home"

function App() {
  return <div style={{ backgroundColor: "#54436B" }}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={home}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
