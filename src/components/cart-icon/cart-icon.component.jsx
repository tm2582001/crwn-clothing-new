import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {ShopingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen,cartCount} =useContext(CartContext);

    const toogleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShopingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;