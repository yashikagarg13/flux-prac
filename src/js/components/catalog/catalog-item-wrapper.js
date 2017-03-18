import React from "react";
import AppStore from "../../stores/store";
import CatalogItem from "./app-catalog-item";

const CatalogItemWrapper = (props) => {
  console.log(props)
  let item = AppStore.getCatalogItem(props.params.id);

  return (
    <div className="row">
      <CatalogItem key={item.id} item={item} params={props.params} />
    </div>
  );
}

export default CatalogItemWrapper;