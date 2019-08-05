import React from "react";
import { Button, TextInput, Row } from "react-materialize";

export default class NewRestaurantForm extends React.Component {
  state = { inputText: "" };
  handleOnChangeText = event => {
    this.setState({ inputText: event.target.value });
  };
  handleOnSave = () => {
    const { onSave } = this.props;
    onSave(this.state.inputText);
  };
  render() {
    return (
      <Row>
        <TextInput
          s={12}
          m={8}
          l={10}
          placeholder="First Name"
          data-test="newRestaurantName"
          value={this.state.inputText}
          onChange={this.handleOnChangeText}
        />
        <Button
          s={12}
          m={4}
          l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.handleOnSave}
        >
          Save
        </Button>
      </Row>
    );
  }
}
