import React from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";
import { Button, Modal } from "react-materialize";

export default class RestaurantListPage extends React.Component {
  state = { restaurantNames: [], showRestaurantForm: false };
  handleAddRestaurant = newRestaurantName => {
    this.setState(state => ({
      restaurantNames: [...state.restaurantNames, newRestaurantName]
    }));
  };

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Modal
          header="New restaurant"
          trigger={
            <Button data-test="addRestaurantButton">Add Restaurant</Button>
          }
        >
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        </Modal>
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}
