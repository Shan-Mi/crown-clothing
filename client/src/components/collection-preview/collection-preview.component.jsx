import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";
// import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
