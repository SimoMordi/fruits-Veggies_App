import axios from "axios"
import { useState, useEffect } from "react"

const Veggies= () => {

    const [veggies, setVeggies] = useState([])


useEffect(() => {
        axios({
            method: "GET",
            url: "server/veggies",

        }).then((res) => {
            console.log(res.data);
            setVeggies(res.data)
        })

    },[])
console.log(veggies);

return (
    <div>
      Show all veggies here:
      <ul>
        {veggies.map((veggie) => {
          return (
            <li key={veggie._id}>
              <p>Name: {veggie.name}</p>
              <p>Color: {veggie.color}</p>
              <p>Age: {veggie.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Veggies