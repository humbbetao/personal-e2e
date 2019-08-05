import React from 'react';
export default class NewRestaurantForm extends React.Component {
	state = { inputText: '' };
	handleOnChangeText = event => {
		this.setState({ inputText: event.target.value });
	};
	handleOnSave = () => {
		const { onSave } = this.props;
		onSave(this.state.inputText);
	};
	render() {
		return (
			<div>
				<input
					type="test"
					data-test="newRestaurantName"
					value={this.state.inputText}
					onChange={this.handleOnChangeText}
				/>
				<button data-test="saveNewRestaurantButton" onClick={this.handleOnSave}>
					Save
				</button>
			</div>
		);
	}
}
