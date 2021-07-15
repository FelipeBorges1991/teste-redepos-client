import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home"

function App() {
  return <div style={{ backgroundColor: "#F6F5F5" }}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}></Route>
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
