import React from "react";
import Link from "react-router/lib/Link";
import AppActions from "../../action/app-actions";
import CartButton from "../cart/app-cart-button";

const CatalogItem = (props) => {
  let itemStyle = {
    borderBottom: '1px solid #ccc',
    paddingBottom: 15
  }

  return (
    <div className="col-xs-6 col-sm-4 col-md-3" style={!props.params ? itemStyle : null}>
      <h4>{ props.item.title }</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
      <p>{ props.item.summary }</p>
      <p>${ props.item.cost }
        <span className="text-success">{props.item.qty && `(${props.item.qty} in cart)`}</span>
      </p>
      <div className="btn-group">
        {props.params && props.params.id
          ? <Link to="/" className="btn btn-default btn-sm">
              Continue Shopping
            </Link>
          : <Link to={`/catlog-item/${props.item.id}`} className="btn btn-default btn-sm">
              Learn More
            </Link>
        }
      </div>
      <CartButton
        handler={
          AppActions.addItem.bind(null, props.item)
        }
        txt="Add To Cart"
      />
    </div>
  );
}

export default CatalogItem;