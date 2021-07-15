import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import home from "../routeComponents/Home";
import student from "../routeComponents/StudentFeed";
import teacher from "../routeComponents/TeacherFeed";
import classRoom from "../routeComponents/ClassroomFeed";

function App() {
  return (
    <div style={{ backgroundColor: "#F6F5F5", minHeight: "1200px" }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/student" component={student}></Route>
          <Route exact path="/teacher" component={teacher}></Route>
          <Route exact path="/classroom" component={classRoom}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
