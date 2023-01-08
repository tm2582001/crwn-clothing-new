import { useContext } from 'react';

import {ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen,cartCount} =useContext(CartContext);

    const toogleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;