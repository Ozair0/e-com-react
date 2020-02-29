import React from "react";
import "./collection-overview.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PrevCollection from "../prev-collection/prev";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...collection }) => (
      <PrevCollection key={id} {...collection} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
