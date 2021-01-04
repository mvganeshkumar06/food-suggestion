import React, { useState } from "react";
import './App.css';

const App = () => {

  const [foodOptions, setFoodOptions] = useState("");

  const updateFood = (foodType) => {
    const result = food[foodType].map((item, index) => {
      return <p className="foodItem" key={index}>{item}</p>;
    })
    setFoodOptions(result);
  }

  const food = {
    "breakfast": ["🍞 Bread", "🧈 Butter", "🥚 Egg", "🥪 Sandwich", "🥣 Soup", "🥗 Green Salad", "🥛 Glass of Milk"],
    "lunch": ["🍙 Rice Ball", "🍚 Cooked Rice", "🍛 Curry Rice", "🍝 Spaghetti", "🥫 Canned Food"],
    "dinner": ["🥪 Sandwich", "🌮 Taco", "🌯 Burrito", "🍙 Rice Ball", "🍱 Bento Box", "🥧 Pie", "🍛 Curry Rice"],
    "fruits": ["🍌 Banana", "🍍 Pineapple", "🥭 Mango", "🍎 Red Apple", "🍓 Strawberry", "🍏 Green Apple", "🍐 Pear", "🍑 Peach", "🍇 Grapes", "🍈 Melon", "🍉 Watermelon"],
    "vegetables": ["🥒 Cucumber", "🥬 Leafy Green", "🥦 Broccoli", "🧅 Onion", "🍄 Mushroom", "🥔 Potato", "🥕 Carrot"],
    "snacks": ["🍨 Ice Cream", "🍩 Doughnut", "🍪 Cookie", "🍰 Cake", "🥧 Pie", "🍫 Chocolate Bar", "🍬 Candy", "🍔 Hamburger", "🍟 French Fries", "🍕 Pizza"]
  }

  return (
    <>
      <div id="container">
        <p id="mainHead"> 🥪 Food Suggestion</p>
        <p className="info"> Select the category to get food suggestions</p>
        <div id="btnContainer">
          <button onClick={() => updateFood("breakfast")}>Breakfast</button>
          <button onClick={() => updateFood("lunch")}>Lunch</button>
          <button onClick={() => updateFood("dinner")}>Dinner</button>
          <button onClick={() => updateFood("fruits")}>Fruits</button>
          <button onClick={() => updateFood("vegetables")}>Vegetables</button>
          <button onClick={() => updateFood("snacks")}>Snacks</button>
        </div>
        <div id="outputContainer">
          {foodOptions ? foodOptions : null}
        </div>
        <footer>
          <div id="socialFooter">
            <h4> Made with <img id="heartIcon" src="https://img.icons8.com/fluent/48/000000/like.png" alt="heart" /> by Ganesh Kumar</h4>
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
              href="https://github.com/mvganeshkumar06"
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
              href="https://www.linkedin.com/in/mvganeshkumar06"
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
              href="https://twitter.com/mvganeshkumar06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icons"
                src="https://img.icons8.com/fluent/48/000000/twitter.png"
                alt="twitter"
              />
            </a>
            <a
              href="https://dev.to/mvganeshkumar06"
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
