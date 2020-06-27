// we need to store the data related to our actual collections on our shop page, we are going to build a class
import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// we can get match history location from app
const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
// :categoryId we can access to this categoryId as a parameter on the match obj when we are inside of our category
export default ShopPage;
