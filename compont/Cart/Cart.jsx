import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useDispatch, useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../src/makeRequest';
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.products)
    const totalPrice = ()=>{
        let total = 0
        products.map((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_test_51OMO4sHPxmbA5WMda4h1FPjocobyTzpVEmEIkMb8Ri6h7upDE5EWGCjeZSVEy0n3z07FUDgekRVQPAsS0kX0Nl3900RB94tIak');
    const handlePayment = async () =>{
        try{
            const stripe = await stripePromise
            const resp = await makeRequest.post("/orders", {
                products,
            });
            console.log(resp);
            await stripe.redirectToCheckout({
                sessionId: resp.data.stripeSession.id
            })
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='cart'>
        <h1>Products in your Cart</h1>
        {products?.map( item =>(
            <div className="item" key={item.id}>
                <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL +item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p >{item.desc?.substring(0,100)}</p>
                    <div className="price">
                      {item.quantity} x ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart


/*
try data
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Graphic T-shirt",
            IsNew:true,
            oldPrice:19,
            price:12,
            desc:"T-shirt"
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            IsNew:true,
            oldPrice:19,
            price:12,
            desc:"Coat"
        },
    ]
*/