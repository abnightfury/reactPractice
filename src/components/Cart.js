import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems= useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart=()=>{
        console.log("clicked")
        dispatch(clearCart())
    }
    return(
        <div data-testid="cartitems" className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="rounded-lg p-2 m-2 bg-black text-white" onClick={()=>handleClearCart()}>Clear Cart</button>
                {cartItems.length===0 && <h2>Cart is empty, Add Items to the cart</h2>}
                <RestaurantItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;