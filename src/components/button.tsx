import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, FontSize, ScreenWidth } from '../styles/base';

const CustomButton = ({
  width = ScreenWidth,
  title,
  onPress,
  bgColor,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { width, paddingHorizontal: 24, paddingVertical: 6 },
        customStyles,
      ]}
    >
      <View style={styles.posicao}>
        <View style={[styles.container, { backgroundColor: bgColor }]}>
          <Text style={styles.texto}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.actionRed,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontFamily: 'OpenSans-Regular',
    fontSize: FontSize.Medium,
    color: Colors.white,
  },
});

export default CustomButton;
