import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setUser } from './actions';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user);


  const dispatch = useDispatch();



  return (
    <div className="App">
      <h1>React Redux</h1>

      <h1>Counter {counter} </h1>

      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

      <button onClick={() => dispatch(setUser({ name: "Wow"}))}> SET USER</button>

      { user && <p>{ user.name }</p>}


    </div>
  );
}

export default App;
