/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AvatarData } from '../../types/AvatarData'; // Adjust the path as needed

interface AvatarSwipeOptionProps {
  data: AvatarData;
  onPress: () => void;
  isSelected: boolean;
}

function AvatarSwipeOption(props: AvatarSwipeOptionProps): JSX.Element {
    return (
      <TouchableOpacity
        style={[
          styles.iconContainer,
          props.isSelected && { backgroundColor: props.data.color },
        ]}
        onPress={props.onPress}
      >
        <Icon name={props.data.iconName} style={styles.icon} />
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    iconContainer: {
      borderRadius: 10,
      padding: 10,
    },
    icon: {
      color: 'white',
      fontSize: 64,
    },
  });
  
  export default AvatarSwipeOption;