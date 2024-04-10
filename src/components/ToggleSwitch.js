import React from 'react';
import { Switch, View } from 'react-native';

const ToggleSwitch = ({ isEnabled, toggleSwitch }) => (
  <View>
    <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
);

export default ToggleSwitch;
