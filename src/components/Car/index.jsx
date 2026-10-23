import { use, useState } from "react";

const Car = (props) => {
    // const [brand, setBrand] = useState("Honda");
    const [brand, setBrand] = useState(props.brand);
    const [model, setModel] = useState(props.model);
    const [year, setYear] = useState(props.year);

    const [data, setData] = useState(
        {
            brand: props.brand,
            model: props.model,
            year: props.year
        }
    );

    const changeCarData = () => {
        // setData({ brand: "Kia" });
        setData(oldData => { return { ...oldData, brand: "Kia" } });
    }

    
    const changeCar = () => {
        setBrand("KIA");
        setModel("Picanto");
        if (year < 2005) {
            setYear(2020)
        } else {
            setYear(2026)
        }
    }
    function sayHello() {
        alert("Hello");
    }
    const sayHi = () => {
        alert("hi");
    }
    return (
        <div>
            <h1>Multiple States</h1>
            <h1>Car Component</h1>
            <p>The Brand is: {brand}</p>
            <p>The model is: {model}</p>
            <p>The year is: {year}</p>
            <button onClick={changeCar}>Change Data</button>
            {/* <button onClick={sayHello}>Say Hello</button>
            <button onClick={sayHi}>Say Hi</button>
            <button onClick={() => alert("Hello inline")}>Greeting</button> */}
            {/* <button onClick={alert("hii")}>Click me </button> */}
            {/* <button onClick={() => setBrand("BMW")}>Change Brand</button> */}

            <hr />

            <h1>Single State</h1>
            <h1>Car Component</h1>
            <p>The Brand is: {data.brand}</p>
            <p>The model is: {data.model}</p>
            <p>The year is: {data.year}</p>
            <button onClick={changeCarData}>Change Data</button>

        </div>
    )
}

export default Car;