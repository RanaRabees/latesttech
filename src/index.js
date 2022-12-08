import React from 'react';
// import { useState } from 'react';
// import Todos from "./Todos";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Photo from './Image';
import Timer from './Settimer';
import Timer2 from './Settimer';
// import { useState, useEffect } from "react";
// import Adeema from './Home';
// import Adeemaamir from './Home';
import Ranarabees from './Home';





// <!-- // ******************tree***************** -->

const tree = ReactDOM.createRoot(document.getElementById('tree'));
tree.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// <!-- // ******************root***************** -->


// ******************function19*****************


// ******************function18*****************

// ******************function17*****************

// ******************function16*****************

// ******************function15*****************

// ******************function14*****************

// ******************function13*****************

// ******************function12*****************

// ******************function11*****************

// ******************function10*****************

// ******************function9*****************

// ******************function8*****************

// ******************function7*****************


// ******************function6*****************
// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);


// ******************function5*****************
// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />)

// ******************function4*****************
// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// ******************function3*****************

// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     var sole = console.log (`The name you entered was: ${name}`);

//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm  sole  /> );


// const One = rain


// ******************function2*****************


// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
     
//         <h1>
//         You have {cars} cars in your garage.
//         </h1>       
//       }
//     </>
//   );
// }

// const cars = ['Ford', 'BMW', 'Audi'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);


// ******************function1*****************


// function MyForm() {
//   const [name, setName] = useState("bro");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(r) => setName(r.target.value)
//           }
//         />
//       </label>
//     </form>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// ******************RANA1*****************




// function Car(props) {
//   return <h2>I am a { props.brand.name } my model is {props.brand.model} and my latest colour is {props.brand.colour}!</h2>;
// }

// function Garage() {
//   const carInfo = { name: "Adeema", model: "Kalo" , colour:"Blacki Ha Ha Ha" };
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand={ carInfo } />
//     </>
//   );
// }
// const rana1 = ReactDOM.createRoot(document.getElementById('rana1'));
// rana1.render(<Garage />);

// ******************function2*****************


// function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car brand={car} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// ******************RANA2*****************
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
const rana2 = ReactDOM.createRoot(document.getElementById('rana2'));
rana2.render(<Football />);

// ******************RANA3*****************
// function Car(props) {
//   return <li>I am a { props.brand } and my colour is { props.colour } </li>;
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford',colour:'red' },
//     {id: 2, brand: 'BMW' ,colour:'blue' },
//     {id: 3, brand: 'Audi',colour:'green' }
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ol>
//         {cars.map((e) => <Car key={e.id} brand={e.brand} colour={e.colour}/>)}
//       </ol>
//     </>
//   );
// }

// const rana3 = ReactDOM.createRoot(document.getElementById('rana3'));
// rana3.render(<Garage />);

// ******************RANA4*****************
function Subha ()  {
  const jago = () => {
    // alert("this is me rana amir hussain!");
    document.getElementById('rana4').style.backgroundColor = "green"
  }

  return (
    <button onClick={jago}>jago bhai jago!</button>
  );
}
const rana4 = ReactDOM.createRoot(document.getElementById('rana4'));
rana4.render(<Subha />);


// ******************RANA5*****************
function MissedGoal() {
  return <h1 style={{backgroundColor: "red"}}>MISSED!</h1>;
}

function MadeGoal() {
  return <h1 style={{backgroundColor: "green"}}>Goal!</h1>;
}
function Goal(props) {
  const papa = props.papa;
  if (papa) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const rana5 = ReactDOM.createRoot(document.getElementById('rana5'));
rana5.render(<Goal papa={false} />);



// ******************RANA6*****************




// ******************RANA7*****************
const rana7 = ReactDOM.createRoot(document.getElementById('rana7'));
rana7.render(
  <React.StrictMode>
    <Photo />
  </React.StrictMode>
);


// ******************RANA8*****************
const rana8 = ReactDOM.createRoot(document.getElementById('rana8'));
rana8.render(<Timer />);


// ******************RANA9*****************
const rana9 = ReactDOM.createRoot(document.getElementById('rana9'));
rana9.render(<Timer2 />);


// ******************RANA10*****************
// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const rana10 = ReactDOM.createRoot(document.getElementById('rana10'));
// rana10.render(<Home />);


// ******************RANA11*****************
// const rana11 = ReactDOM.createRoot(document.getElementById('rana11'));
// rana11.render(<Adeema />);


// const rana11 = ReactDOM.createRoot(document.getElementById('rana11'));
// rana11.render(<Adeemaamir name="Adeema Amir I Am A Good Girl And I Am So Pretty"/>);


const rana11 = ReactDOM.createRoot(document.getElementById('rana11'));
rana11.render(<Ranarabees name="Rana Muhammad Rabees Hussain"/>);


