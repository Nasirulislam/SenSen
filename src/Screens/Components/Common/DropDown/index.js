import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import WhiteTextShadowBox from '../../Common/WhiteTextShadowBox';
import {hp} from '../../../../Config/Helper/ResponsiveScreen';
const index = props => {
  let {
    label = '',
    containerStyle = {},
    leftComponent = null,
    rightComponent = null,
    onPressDropDown = null,
    selectionBoxStyle = {},
    optionArray = [],
    optionVisible = false,
    onPressOption = null,
    value = {},
  } = props;

  const SELECTION_BOX = () => {
    let component = <View />;
    if (props.type === 'WhiteTextBoxList') {
      component = (
        <View style={[styles.displayContainer, selectionBoxStyle]}>
          {optionArray.map((i, index) => (
            <WhiteTextShadowBox
              text={i.title}
              onPress={() => onPressOption(i)}
              boxStyle={[index !== 0 && {marginTop: hp(1)}]}
            />
          ))}
        </View>
      );
    }
    return component;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPressDropDown}
        style={[
          styles.container,
          containerStyle,
          leftComponent !== null &&
            rightComponent !== null && {justifyItems: 'space-between'},
        ]}>
        {leftComponent}
        <Text style={styles.label}>{value === null ? label : value.title}</Text>
        {rightComponent}
      </TouchableOpacity>
      {optionVisible && <SELECTION_BOX />}
    </View>
  );
};

export default index;
