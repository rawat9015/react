import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_IMG } from '../utiles/contstants';
import { clearItem, removeItem } from "../utiles/cartSlice";


const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearItem());
    }
    

    const handleRemoveItem = () =>{
        dispatch(removeItem());
    }

    const subTotal = cartItem.reduce((acc, item) =>{
        const price = item.card.info.price === undefined ? item.card.info.defaultPrice : item.card.info.price;
        return acc + price;

    }, 0 ) / 100;

    const deliveryFee  = 40; 
    const total = subTotal + deliveryFee;

   return (
    
    <div className="bg-gray-100 min-h-screen p-6">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">🛒 Your Cart</h1>

    {
    cartItem.length === 0 ? <div>
        <h1 className="font-bold">Cart is empty</h1>
    </div> :

    cartItem.map((items) => (

  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden mb-4" key={items.card.info.id}>
    <img src={MENU_ITEM_IMG + items.card.info.imageId} alt="Paneer Butter Masala" className="w-20 h-20 object-cover"/>
    <div className="flex justify-between w-full px-4 py-2">
        <div>
        <h2 className="text-lg font-semibold text-gray-800">{items.card.info.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{items.card.info.description}</p>
        </div>
        <div className="text-right">
        <p className="text-green-600 font-medium">₹{items.card.info.price === undefined ? items.card.info.defaultPrice / 100 : items.card.info.price / 100}</p>
        <button onClick={handleRemoveItem} className="text-red-500 text-sm hover:underline mt-1">Remove</button>
        </div>
    </div>
    </div>
       
    ))
     }


    {/* Price Summary */}
    <div className="bg-white p-4 mt-6 rounded-lg shadow-sm">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-800 font-medium">₹{subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-600">Delivery Fee</span>
        <span className="text-gray-800 font-medium">₹40</span>
      </div>
      <div className="flex justify-between font-bold text-lg border-t pt-2">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-between mt-6">
      <button onClick={handleClearCart} className="cursor-pointer px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm">
        🗑️ Clear Cart
      </button>
      <button className="cursor-pointer px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">
        ✅ Checkout
      </button>
    </div>
  </div>
</div>


  );
};

export default Cart;
