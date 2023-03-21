import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { decrement, increment, setUser } from './actions';
import './App.css';

import Home from "./pages/Home"
import About from "./pages/About";
import { Link } from 'react-router-dom';


function App() {

  const counter = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user);


  const dispatch = useDispatch();



  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <h1>React Redux</h1>

      <h1>Counter {counter} </h1>

      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

      <button onClick={() => dispatch(setUser({ name: "Wow" }))}>
        {" "}
        SET USER
      </button>

      {user && <p>{user.name}</p>}
    </div>
  );
}

export default App;
