import React, { useState } from "react";
import { data } from "../data/db.js";

const FoodMenu = () => {
  const [foods, setFood] = useState(data);

  // Filter Category burger..pizza..etc

  const FilterCategory = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter By price
  const FilterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Food Menu{" "}
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Categories */}
        <div>
          <p className="font-bold text-gray-700">Filter Categories</p>
          <div className="flex justify-between flex-wrap w-full max-w-[590px]">
            <button
              onClick={() => setFood(data)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => FilterCategory(`burger`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Burger
            </button>
            <button
              onClick={() => FilterCategory(`pizza`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => FilterCategory(`salad`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Salads
            </button>
            <button
              onClick={() => FilterCategory(`chicken`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Chiken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div className="font-bold text-gray-700">
          <p>Filter Price</p>
          <div className="flex justify-between flex-wrap w-full max-w-[390px]">
            <button
              onClick={() => FilterPrice(`$`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $
            </button>
            <button
              onClick={() => FilterPrice(`$$`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => FilterPrice(`$$$`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => FilterPrice(`$$$$`)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Images Data */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            key={index}
          >
            <img
              className="w-full h-[200px] rounded-t-lg object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-600 text-white rounded-full px-2 py-1">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
