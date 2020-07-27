import React, { useContext } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import CollectionsContext from "../../context/collections/collections.context";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

// two ways to use context:
// 1. use it as a component (complicated way)
/* 
const CollectionPage = ({ match }) => {
  return (
    <CollectionsContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;
        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </CollectionsContext.Consumer>
  );
}; 
*/

// 2. useContext : allows us to get the value that inside of context and store it as a const inside of our component
