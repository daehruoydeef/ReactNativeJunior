import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class IntroScreen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> IntroScreen3 </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Dashboard")}
          title="Explore the App"
          color="#841584"
          accessibilityLabel="This Button will Navigate you to the third"
        />
      </View>
    );
  }
}

export default IntroScreen3;