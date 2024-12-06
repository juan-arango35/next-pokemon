import CartCounter from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shoping cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={25}/>
    </div>
  );
}
