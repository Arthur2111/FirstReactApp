import Navbar from './Navbar';
import Home from './Home';

function App() {
  
  // react will auto convert out other types of data to strings OTHER THAN OBJECTS AND BOOLEANS
  // const title = 'Welcome to my new blog'
  // const person = {name: 'yoshi', age: 50}

  // state refers to a data at this point in time (array, obj, boolean etc)
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <h1>
          <Home></Home>
        </h1>
      </div>
    </div>
  );
}

export default App;
