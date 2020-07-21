import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
// withSpinner is waiting for property 'isLoading'

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
// is equal to connect(mapStateToProps)(WithSpinner(CollectionsOverview))
// and we use compose to pass CollectionsOverview from right to left so that code is more readable

export default CollectionsOverviewContainer;
