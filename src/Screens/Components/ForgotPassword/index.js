import React, {useState} from 'react';
import {View, Image} from 'react-native';
import TextInput from '../../Components/Common/TextInput';
import Button from '../../../Components/button';
import Container from '../../../Components/container';
import styles from './styles';
import {checkEmail} from '../../../Config/Helper/Validation';
import {SendResetPasswordEmail} from '../../../Store/Actions/AuthAction';
import Language from '../../../Config/Language';

const Login: () => React$Node = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
  });
  let [validation, setValidation] = useState({
    email: true,
  });

  const onChangeForm = (key, value) => {
    setFormValues({...formValues, [key]: value});
  };

  const onChangeValidation = (key, value) => {
    setValidation({...validation, [key]: value});
  };

  const requireData = () => {
    let {email} = formValues;
    let val = {
      email: email !== '',
    };
    setValidation(val);
    if (email === '') {
      alert('Please fill all required fields');
      return false;
    }
    return true;
  };

  const emailValidation = (value) => {
    setValidation({
      email: true,
    });
    if (!checkEmail(value)) {
      onChangeValidation('email', false);
      alert('Please enter correct email address');
      return false;
    }
    return true;
  };

  const onPressSendEmail = () => {
    if (!requireData() || !emailValidation(formValues.email)) {
      return;
    }
    SendResetPasswordEmail(formValues, global).then((res) => {
      props.navigation.goBack();
    });
  };

  return (
    <Container style={{flex: 1}}>
      <Image
        source={require('../../../Assets/images/SENSEN_Logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.form}>
        <TextInput
          autoCapitalize="none"
          inputStyles={[!validation.email && {borderColor: 'red'}]}
          label={Language.EMAIL_ADDRESS}
          value={formValues.email}
          onChangeText={(text) => onChangeForm('email', text)}
        />
        <Button size={'small'} text={`${Language.SUBMIT} ${Language.EMAIL}`} goto={onPressSendEmail} />
      </View>
    </Container>
  );
};

export default Login;
