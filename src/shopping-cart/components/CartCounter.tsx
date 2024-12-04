"use client";
import { useState } from "react";

interface ValueProps{
    value?:number;
}

const CartCounter = ({value=35}: ValueProps) => {
  const [count, setCount] = useState(value);
  function incrementar() {
    setCount(count + 1);
  }

  function decrementar() {
    setCount(count - 1);
  }
  return (
    <>
      <span className="text-9xl"> {count}</span>
      <div className="flex">
        <button
          onClick={incrementar}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={decrementar}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
