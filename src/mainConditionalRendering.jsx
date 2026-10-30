import { createRoot } from 'react-dom/client'
import Car from './components/Car/index';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import { useState } from 'react';
const cars = (
  <div>
    <Car brand="honda" model="CRV" year={2000} />
    <Car brand="BMW" model="C300" year={2010} />
  </div>
)


const Main1 = () => {
  const [auth, setAuth] = useState(false);
  const toggleAuth = () => setAuth(!auth);
  if (auth) {
    return (
      <div>
        <Portfolio fct={toggleAuth} />

      </div>
    )
  } else {
    return (
      <div>
        <Login fct={toggleAuth} />
      </div>
    )
  }

}

const Main = () => {
  const [auth, setAuth] = useState(false);
  const toggleAuth = () => setAuth(!auth);
  return (
    <div>
      {auth ? <Portfolio fct={toggleAuth} /> : <Login fct={toggleAuth} />}

      {/* {auth ? <p>You are authenticated</p> : null} */}

      {auth && (
        <p>You are authenticated</p>
      )}

    </div>
  )
}



const App = () => {
  const sayHello = () => alert("hi");
  const handle = (e) => {
    e.preventDefault();
    alert("ok form submitted");
  }
  return (
    <div>
      <h1>Click the below button</h1>
      <button onClick={sayHello}>Click me </button>
      <button onClick={() => alert("hi")}>inline execution</button>
      <hr></hr>
      <form onSubmit={handle}>
        <input type='text' />
        <button type='submit'>click me to submit</button>
      </form>
    </div>
  )
}


createRoot(document.getElementById('root')).render(<App />);
