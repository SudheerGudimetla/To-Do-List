
import React, {useState} from "react";
import List from "./List";
function MyComponent() {

const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta", "Sushi"]);
function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(F => [...F, newFood]);
}
function handleRemoveFood(index) {
    const updatedFoods = foods.filter((_,i) => i !== index);
    setFoods(updatedFoods);
}
    return (
        <div>
            <h2>List Of Foods</h2>
            <ul> {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}</ul>
            <input type="text" id="foodInput" placeholder="enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}
export default MyComponent;