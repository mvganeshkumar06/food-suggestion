import React, { useState } from "react";
import './App.css';

const App = () => {

  const [breakfastOptions, setBreakfastOptions] = useState("");
  const [lunchOptions, setLunchOptions] = useState("");
  const [dinnerOptions, setDinnerOptions] = useState("");
  const [fruitsOptions, setFruitsOptions] = useState("");
  const [vegetablesOptions, setVegetablesOptions] = useState("");
  const [snacksOptions, setSnacksOptions] = useState("");

  const updateFood = (optionType, foodOption) => {
    const result = foodOption.map((item, index) => {
      return <p className="foodItem" key={index}>{item}</p>;
    })

    if (optionType === "breakfast") {
      setBreakfastOptions(result);
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    }
    else if (optionType === "lunch") {
      setBreakfastOptions("");
      setLunchOptions(result);
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    }
    else if (optionType === "dinner") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions(result);
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions("");
    }
    else if (optionType === "fruits") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions(result);
      setVegetablesOptions("");
      setSnacksOptions("");
    }
    else if (optionType === "vegetables") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions(result);
      setSnacksOptions("");
    }
    else if (optionType === "snacks") {
      setBreakfastOptions("");
      setLunchOptions("");
      setDinnerOptions("");
      setFruitsOptions("");
      setVegetablesOptions("");
      setSnacksOptions(result);
    }
  }

  const breakfast = [
    "🍞 Bread",
    "🧈 Butter",
    "🥚 Egg",
    "🥪 Sandwich",
    "🥣 Soup",
    "🥗 Green Salad",
    "🥛 Glass of Milk"
  ]

  const lunch = [
    "🍙 Rice Ball",
    "🍚 Cooked Rice",
    "🍛 Curry Rice",
    "🍝 Spaghetti",
    "🥫 Canned Food",
  ]

  const dinner = [
    "🥪 Sandwich",
    "🌮 Taco",
    "🌯 Burrito",
    "🍙 Rice Ball",
    "🍱 Bento Box",
    "🥧 Pie",
    "🍛 Curry Rice",
  ]

  const fruits = [
    "🍌 Banana",
    "🍍 Pineapple",
    "🥭 Mango",
    "🍎 Red Apple",
    "🍓 Strawberry",
    "🍏 Green Apple",
    "🍐 Pear",
    "🍑 Peach",
    "🍇 Grapes",
    "🍈 Melon",
    "🍉 Watermelon"
  ]

  const vegetables = [
    "🥒 Cucumber",
    "🥬 Leafy Green",
    "🥦 Broccoli",
    "🧅 Onion",
    "🍄 Mushroom",
    "🥔 Potato",
    "🥕 Carrot"
  ]

  const snacks = [
    "🍨 Ice Cream",
    "🍩 Doughnut",
    "🍪 Cookie",
    "🍰 Cake",
    "🥧 Pie",
    "🍫 Chocolate Bar",
    "🍬 Candy",
    "🍔 Hamburger",
    "🍟 French Fries",
    "🍕 Pizza",
  ]

  return (
    <>
      <div id="container">
        <p id="mainHead"> 🥪 Food Suggestion</p>
        <p className="info"> Select the category to get food suggestions</p>
        <div id="btnContainer">
          <button onClick={() => updateFood("breakfast", breakfast)}>Breakfast</button>
          <button onClick={() => updateFood("lunch", lunch)}>Lunch</button>
          <button onClick={() => updateFood("dinner", dinner)}>Dinner</button>
          <button onClick={() => updateFood("fruits", fruits)}>Fruits</button>
          <button onClick={() => updateFood("vegetables", vegetables)}>Vegetables</button>
          <button onClick={() => updateFood("snacks", snacks)}>Snacks</button>
        </div>
        <div id="outputContainer">

          {breakfastOptions ? breakfastOptions : null}
          {lunchOptions ? lunchOptions : null}
          {dinnerOptions ? dinnerOptions : null}
          {fruitsOptions ? fruitsOptions : null}
          {vegetablesOptions ? vegetablesOptions : null}
          {snacksOptions ? snacksOptions : null}

        </div>
        <footer>
          <div id="socialFooter">
            <h4>
              Made with
          <img
                id="heartIcon"
                src="https://img.icons8.com/fluent/48/000000/like.png"
                alt="heart"
              />
          by Ganesh Kumar
        </h4>
            <a
              href="https://mvganeshkumar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/windows/64/000000/domain.png"
                alt="website"
              />
            </a>
            <a
              href="https://github.com/Ganesh-Kumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/github.png"
                alt="github"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ganesh-kumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://dev.to/ganeshkumar6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="dev"
              />
            </a>
          </div>
          <a id="iconAttribution" href="https://icons8.com">Icons by Icons8</a>
        </footer>
      </div>
    </>
  );
}

export default App;
