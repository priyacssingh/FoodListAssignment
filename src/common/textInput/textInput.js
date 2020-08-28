import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const TextInputComponent = (props) => {
  const { value, onChangeText } = props;
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={'Try searching fat, sauces names...'}
      underlineColorAndroid="transparent"
      />
  )
}

export default TextInputComponent;