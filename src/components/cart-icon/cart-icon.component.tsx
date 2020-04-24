import React, { SyntheticEvent } from 'react';
import './cart-icno.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from '../../redux/cart/cart.actions';

interface IProps{
  toggleCartHidden: () => void;
}

const CartIcon = (props: IProps) => (
  <div className="cart-icon" onClick={props.toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatch = {
  toggleCartHidden
}

export default connect(null, mapDispatch)(CartIcon);