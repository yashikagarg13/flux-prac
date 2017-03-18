import React from "react";
import AppActions from "../../action/app-actions";
import CartButton from "./app-cart-button";

class CartItem extends React.Component {
  render () {
    return (
      <tr>
        <td>
          <CartButton
            txt="x"
            handler={AppActions.removeItem.bind(null, this.props.item )} />
        </td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.qty}</td>
        <td>
          <div className="btn-group">
            <CartButton
              txt="-"
              handler={AppActions.decreaseItem.bind(null, this.props.item )} />
            <CartButton
              txt="+"
              handler={AppActions.increaseItem.bind(null, this.props.item )} />
          </div>
        </td>
        <td>${this.props.subtotal}</td>
      </tr>
    );
  }
}

export default CartItem;