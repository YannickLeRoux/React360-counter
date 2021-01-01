import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

	state = {
		count: 0,
	};

	// This method increments our count, triggering a re-render
	incrementCount = () => {
		this.setState({count: this.state.count + 1});
	};

	// This method decrements our count, triggering a re-render
	decrementCount = () => {
		this.setState({count: this.state.count - 1});
	};
	render() {
    return (
      <View style={styles.panel}>
      <VrButton
        onClick={this.incrementCount}
        style={styles.button}
      >
        <Text style={styles.sign}>+</Text>
      </VrButton>
      <VrButton
        onClick={this.decrementCount}
        style={styles.button}
      >
       <Text style={styles.sign}>-</Text>
      </VrButton>
      <Text style={styles.counter}>
        {`Count: ${this.state.count}`}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    display: 'flex',
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    width: 100,
    height: 100,
    marginBottom: 20
  },
  sign: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    flex: 1
  },
  counter: {
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50
  }
})
AppRegistry.registerComponent('Hello360', () => Hello360);
