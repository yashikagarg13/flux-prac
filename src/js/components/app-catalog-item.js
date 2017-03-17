import React from "react";
import AppActions from "../action/app-actions";
import CartButton from "./app-cart-button";

class CatalogItem extends React.Component {
  render () {
    return (
      <div className="col-xs-6 col-sm-4 col-md-3">
        <h4>{ this.props.item.title }</h4>
        <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
        <p>{ this.props.item.summary }</p>
        <p>${ this.props.item.cost }</p>
        <CartButton
          handler={
            AppActions.addItem.bind(null, this.props.item)
          }
          txt="Add To Cart"
        />
      </div>
    );
  }
}

export default CatalogItem;