// we need to store the data related to our actual collections on our shop page, we are going to build a class
import React from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";
// we can get match history location from app
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
// :categoryId we can access to this categoryId as a parameter on the match obj when we are inside of our category
export default connect(null, mapDispatchToProps)(ShopPage);
