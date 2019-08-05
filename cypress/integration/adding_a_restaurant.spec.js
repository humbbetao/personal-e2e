describe('adding a restaurant', () => {
	it('displays the restaurant in the list', () => {
		const restauranteName = 'Sushi Place';
		cy.visit('http://localhost:3000');
		cy.get('[data-test="addRestaurantButton"]').click();
		cy.get('[data-test="newRestaurantName"').type(restauranteName);
		cy.get('[data-test="saveNewRestaurantButton"').click();
		cy.contains(restauranteName);
	});
});
