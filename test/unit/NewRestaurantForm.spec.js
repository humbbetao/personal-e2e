import React from 'react';
import NewRestaurantForm from '../../src/components/NewRestaurantForm';
import { mount } from 'enzyme';

describe('NewRestaurantForm', () => {
	describe('clicking the save button', () => {
		it('calls the onSave handler', () => {
			const saveHandler = jest.fn();
			const newRestaurantName = 'Sushi Place';
			const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);
			wrapper
				.find("[data-test='newRestaurantName']")
				.simulate('change', { target: { value: newRestaurantName } });
			wrapper.find('[data-test="saveNewRestaurantButton"]').simulate('click');
			expect(saveHandler).toHaveBeenCalledWith(newRestaurantName);
		});
	});
});
