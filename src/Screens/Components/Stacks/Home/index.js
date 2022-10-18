import React from 'react';
import {Text} from 'react-native';
import Container from '../../../../Components/container';
import Icon from 'react-native-dynamic-vector-icons';

const index = props => {
  return (
    <Container {...props}>
      <Text>Home</Text>
      <Icon
        name="home"
        type="AntDesign"
        size={30}
        color="black"
        onPress={() => {}}
      />
    </Container>
  );
};

export default index;
