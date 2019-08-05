import React from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';
export default class RestaurantListPage extends React.Component {
	state = { restaurantNames: [], showRestaurantForm: false };
	handleAddRestaurant = newRestaurantName => {
		this.setState(state => ({
			restaurantNames: [...state.restaurantNames, newRestaurantName],
			showRestaurantForm: false,
		}));
	};
	handleShowNewRestaurantForm = () => {
		this.setState({ showRestaurantForm: true });
	};
	render() {
		const { restaurantNames } = this.state;
		return (
			<div>
				<button data-test="addRestaurantButton" onClick={this.handleShowNewRestaurantForm}>
					Add Restaurant
				</button>
				{this.state.showRestaurantForm ? <NewRestaurantForm onSave={this.handleAddRestaurant} /> : null}
				<RestaurantList restaurantNames={restaurantNames} />
			</div>
		);
	}
}
