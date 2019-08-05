import React from "react";
import { Collection, CollectionItem } from "react-materialize";
const RestaurantList = ({ restaurantNames }) => {
  return (
    <Collection header="Restaurants">
      {restaurantNames.length === 0 ? (
        <CollectionItem key="no-restaurants">(None added yet)</CollectionItem>
      ) : (
        restaurantNames.map(restaurantName => (
          <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
        ))
      )}
    </Collection>
  );
};

export default RestaurantList;
