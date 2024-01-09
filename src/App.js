import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import FoodCart from "./component/FoodCart";
import FoodMenu from "./component/FoodMenu";
import Category from "./component/Category";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <FoodCart />
      <FoodMenu />
      <Category />
    </div>
  );
}

export default App;
