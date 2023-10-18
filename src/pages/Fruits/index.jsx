import axios from "axios"
import { useState, useEffect } from "react"

const Fruits = () => {

    const [fruits, setFruits] = useState([])


useEffect(() => {
        axios({
            method: "GET",
            url: "server/fruits",

        }).then((res) => {
            console.log(res.data);
            setFruits(res.data)
        })

    },[])
console.log(fruits);

return (
    <div>
      Show all fruits here:
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={JSON.stringify(fruit)}>
              <p>Name: {fruit.name}</p>
              <p>Color: {fruit.color}</p>
              <p>Ready to Eat: {fruit.readyToEat}</p>
              <p>Age: {fruit.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fruits