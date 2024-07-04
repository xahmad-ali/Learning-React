import React, { useState } from "react";

//BASIC JAVASCRIPT: onClick{} DOES NOT TAKES VALE WHICH I RETUNRED FROM A FUNCTION
// BUT onClick{} REQUIRES A FUNCTION TO GIVE CONTROLL TO
// onClick{coloring()}  IS WRONG AS IT TAKES THE RETURNED VALUE
// onClick{()=>coloring()} IS CORRECT AS ()=> SENDS CONTROLL TO THE FUNCION NOT ACTUALLY TAKING THE RETURN VALUE


function Screen2() {
  const [colr, setColr] = useState(["red-700", "red-900"]);

  const coloring = (color1, color2) => {
    setColr([color1, color2]);
  };
  return (
    <div
      className={`bg-${colr[0]} w-[1350px] h-[450px] flex justify-center items-end`}
    >
      <div
        className={`bg-${colr[1]} w-[200px] h-[50px] rounded mb-5  justify-items-center space-x-2`}
      >
        <button
          className="bg-blue-800 w-[60px] h-[50px] rounded-2xl"
          onClick={() => coloring("blue-700", "blue-900")}
        >
          Blue
        </button>
        <button
          className="bg-green-700 w-[60px] h-[50px] rounded-2xl"
          onClick={() => coloring("green-700", "green-800")}
        >
          Green
        </button>
        <button
          className="bg-yellow-600 w-[60px] h-[50px] rounded-2xl"
          onClick={() => coloring("yellow-600", "yellow-800")}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default Screen2;
