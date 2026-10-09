import { createRoot } from 'react-dom/client'
import './css/style.css';

import Logo from './images/img.png';



import CustomName from './components/Person/index';
import { Honda, Bmw } from './components/Vehicle/index';
import Test from './components/Vehicle/index';
let element1 = <h1>This is my first element </h1>
let element2 = <p>this is my paragraph</p>

let element3 = (
  <div>
    <h1>This is my title</h1>
    <p>This is my content</p>
  </div>
)

let Header = (
  <header>
    <h1>This is my header</h1>
  </header>
)
let Body = (
  <div>
    <p className="class1">content 1</p>
    <p style={{ color: 'red', backgroundColor: "gray", fontSize: "25px" }}>content 2</p>
  </div>
)

let Footer = (
  <footer>
    <p> &cpy; 2026 </p>
  </footer>
)

let app = (
  <section>
    {Header}
    {Body}
    {Footer}
  </section>
)

const sentence = "this is my sentence";
const a = 10;
const b = 20;
const obj = {
  fname: "Ali",
  lname: "Ibrahim"
};

const courses = ["html", "css", "js"];
const coursesLi = courses.map((n) => <li key={n}>{n}</li>)
const element4 = (
  <div>
    <p>The sentence is: {sentence}</p>
    <p>a+ b:  {a + b}</p>
    <p>Name in object {obj.fname} {obj.lname}</p>
    <ul>
      {coursesLi}
    </ul>

  </div>
)


const Images = (
  <div>
    <h1>Online image</h1>
    <img src='https://ua.edu.lb/contentfiles/41411Image.jpg?w=2000&h=2000&scale=down' alt='Image' width={500} />

    <h1>Public Image</h1>
    <img src='./img/img1.png' alt='image' />

    <h1>Image in source file</h1>
    <img src={Logo} alt='image' />

  </div>
)


const Car = () => {
  return (
    <div style={{ border: '1px solid red', marginBottom: '5px', padding: '5px' }}>
      <h1>I am car component</h1>
      <p>This is my description</p>
    </div>
  )
}

const element6 = (
  <div>
    <Car />
    <Car />
    <Car />
    <Car />

  </div>
)

const element7 = (
  <div>
    <CustomName />
    <Honda />
    <Bmw />
    <Test />
  </div>

)

createRoot(document.getElementById('root')).render(element7);
