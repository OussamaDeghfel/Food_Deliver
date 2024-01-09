import React from "react";

const FoodCart = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* OverLay */}
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white">
          <p className="font-bold text-3xl px-4 pt-4">Delicious Humburger</p>
          <p className="px-4 pt-4 text-xl">Disponible 7/24</p>
          <button className="border-white bg-white text-black  mx-4 absolute bottom-4 font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        {/* OverLay */}
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white">
          <p className="font-bold text-3xl px-4 pt-4">Fresh Botato, FastFood</p>
          <p className="px-4 pt-4 text-xl">Disponible 7/24</p>
          <button className="border-white bg-white text-black  mx-4 absolute bottom-4 font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Botato"
        />
      </div>
      <div className="rounded-xl relative">
        {/* OverLay */}
        <div className="absolute w-full h-full bg-black/60 rounded-xl text-white">
          <p className="font-bold text-3xl px-4 pt-4">Pizza Italy, Eat&Smile</p>
          <p className="px-4 pt-4 text-xl">Disponible 7/24</p>
          <button className="border-white bg-white text-black  mx-4 absolute bottom-4 font-bold">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Pizza food"
        />
      </div>
    </div>
  );
};

export default FoodCart;
