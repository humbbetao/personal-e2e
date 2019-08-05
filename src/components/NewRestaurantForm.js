import React from 'react';
import { Button, TextInput } from 'react-materialize';

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
				<TextInput
					placeholder="First Name"
					data-test="newRestaurantName"
					value={this.state.inputText}
					onChange={this.handleOnChangeText}
				/>
				<Button data-test="saveNewRestaurantButton" onClick={this.handleOnSave}>
					Save
				</Button>
			</div>
		);
	}
}
