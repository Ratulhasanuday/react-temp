import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStorageCart, removeFromeLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        // const storedCart=getStorageCart()
        // console.log(storedCart);
        if (bottles.length) {
            const storedCart = getStorageCart()
            console.log(storedCart, bottles);
            const savedCart = []
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log('saved Cart', savedCart);
            setCart(savedCart)
        }

    }, [bottles])

    const handleAddToCart = bottle => {
        // console.log('Bottle going to be added');
        console.log(bottle);

        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    const handleRemoveFromCart=id=>{
        //visual cart remove 
        const remainingCart=cart.filter(bottle=>bottle.id !==id)
        setCart(remainingCart)
        //remove from LS
        removeFromeLS(id)
    }
    return (
        <div>
            <h1>Bottles Available: {bottles.length}</h1>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)

                }
            </div>
        </div>

    );
};

export default Bottles;