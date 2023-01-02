import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetail";

function App() {
  // react will auto convert out other types of data to strings OTHER THAN OBJECTS AND BOOLEANS
  // const title = 'Welcome to my new blog'
  // const person = {name: 'yoshi', age: 50}

  // state refers to a data at this point in time (array, obj, boolean etc)
  return (
    // wrap router around your app
    <Router>
      <div className="App">
        {/* with routing Navbar is always present */}
        <Navbar></Navbar>
        <div className="content">
          {/* all our fe is shown here inside the switch component ensures that 1 route is shown only at 1 time */}
          <Switch>
            {/* we will show the home component when route has /home */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* we add the exact prop to let React know that the route needs to be similar in the URL to render wanted component by default it renders routes that are similar as well */}
            <Route exact path="/create">
              <Create></Create>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
