import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import TextInput from '../../Components/Common/TextInput';
import Button from '../../../Components/button';
import Container from '../../../Components/container';
import styles from './styles';
import {checkEmail} from '../../../Config/Helper/Validation';
import {hp} from '../../../Config/Helper/ResponsiveScreen';
import {colors} from '../../../Config/Helper/styles';
import {LogInUser} from '../../../Store/Actions/AuthAction';
import {ALERT_MESSAGE} from '../../../Config/Helper/GlobalHelper';
import context from '../../../Store/Context';
import {CommonActions} from '@react-navigation/native';
import Language from '../../../Config/Language';
// import BottomBar from '../Common/BottomBar/BottomBar';

const Login: () => React$Node = (props) => {
  const global = useContext(context);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  let [validation, setValidation] = useState({
    email: true,
    password: true,
  });

  const onChangeForm = (key, value) => {
    setFormValues({...formValues, [key]: value});
  };

  const onChangeValidation = (key, value) => {
    setValidation({...validation, [key]: value});
  };

  const requireData = () => {
    let {email, password} = formValues;
    let val = {
      email: email !== '',
      password: password !== '',
    };
    setValidation(val);
    if (email === '' || password === '') {
      ALERT_MESSAGE({
        message: 'Please fill all required fields',
        buttons: [{text: 'Okay'}],
      });
      return false;
    }
    return true;
  };

  const emailValidation = (value) => {
    if (!checkEmail(value)) {
      setValidation({
        email: false,
        password: true,
      });
      ALERT_MESSAGE({
        message: 'Please enter correct email address',
        buttons: [{text: 'Okay'}],
      });
      return false;
    }
    return true;
  };

  const onPressLogin = () => {
    if (!requireData() || !emailValidation(formValues.email)) {
      return;
    }
    console.log(formValues)
    LogInUser(formValues, global).then((res) => {
      console.log(res)
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'FindPart'}],
        }),
      );
    });
  };

  return (
   
    <Container {...props} style={{flex: 1}}>
      <View style={styles.container}>
      <Image
        source={require('../../../Assets/images/SENSEN_Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.form}>
        <TextInput
          inputStyles={[!validation.email && {borderColor: 'red'}]}
          label={Language.EMAIL_ADDRESS}
          value={formValues.email}
          autoCapitalize="none"
          onChangeText={(text) => onChangeForm('email', text.toLowerCase())}
        />

        <TextInput
          autoCapitalize="none"
          inputStyles={[!validation.password && {borderColor: 'red'}]}
          label={Language.PASSWORD}
          value={formValues.password}
          isPassword={true}
          onChangeText={(text) => onChangeForm('password', text)}
        />

        <TouchableOpacity
          onPress={() => props.navigation.navigate('ForgotPassword')}>
          <Text
            style={{
              top: hp(2),
              color: colors.SYSTEM_GREEN,
              textDecorationLine: 'underline',
            }}>
            {Language.FORGOT_PASSWORD}
          </Text>
        </TouchableOpacity>

        <Button size={'small'} text={Language.LOGIN} goto={onPressLogin} />
        <Button
          viewStyle={{top: hp(-5)}}
          size={'small'}
          text={Language.SIGN_UP}
          goto={() => props.navigation.push('SignUp')}
        />
         
      </View>
    </View>
    </Container>
  
  );
};

export default Login;
