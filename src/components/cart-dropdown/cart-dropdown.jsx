import React from "react";
import {connect} from 'react-redux';
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import './cart-dropdown.scss';
import {selectCartItems} from "../../redux/cart/cart.selector";

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>Go To CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);