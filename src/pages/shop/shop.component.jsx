import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

// import {createStructuredSelector} from 'reselect';
//redux thunk imports
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
// import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container.jsx';
import CollectionPageContainer from '../collection/collection.container';

// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

// import {updateCollections} from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// creating a class component since we are storing data and states
const ShopPage = ({fetchCollectionsStart, match}) => {
  useEffect(() => {
      fetchCollectionsStart();
  }, [fetchCollectionsStart]);
    // async fetching using redux


    // old code without redux
    // const {updateCollections} = this.props;
    // const collectionRef = firestore.collection('collections');

    // fetch('https://firestore.googleapis.com/v1/projects/king-db/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));


    // getting data through API calls
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading: false});
    // });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading: false});
    // })

    return(
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }

// const mapStateToProps = createStructuredSelector({
//   isFetchingCollections: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
