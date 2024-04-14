import PropTypes from 'prop-types';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className="cart-container">
            <h2>Cart: {cart.length}</h2>
            <div>
                {
                cart.map(bottle=><div key={bottle.id }>
                    <img  src={bottle.img}></img>
                    <br />
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)
                }
            </div>
        </div>
    );
};
Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}
export default Cart;