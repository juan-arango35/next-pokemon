"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, sustractOne, initCounterState } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface ValueProps {
  value?: number;
}

const CartCounter = ({ value = 35 }: ValueProps) => {
  /*   const [count, setCount] = useState(value); */ //eliminamos el contador anterior basico para agregar tolkit;

    function incrementar() {
      dispatch(addOne())
  }

  function decrementar() {
    dispatch(sustractOne())
  } 

  const count = useAppSelector((state) => state.counter.value); // value es el valor incial que colocamos en el counterSlider
  const dispatch = useAppDispatch();

  useEffect(() => { //agregamos esto para que al recargar la pagina se mantenga el valor
  dispatch( initCounterState(value))
  }, [dispatch, value])

  return (
    <>
      <span className="text-9xl"> {count}</span>{" "}
      {/* aqui ya esta el counter renderizandose */}
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
