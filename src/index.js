import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, Text, TextInput } from 'react-native';
import FoodList from './components/foodListComponent/foodList/foodList';

class App extends PureComponent {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(242,241,241)' }}>
        <StatusBar barStyle="light-content" backgroundColor={'rgb(242,241,241)'}/>
        <FoodList />
        </SafeAreaView>
    )
  }
}

export default App;

Text.defaultProps = {}
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {}
TextInput.defaultProps.allowFontScaling = false;