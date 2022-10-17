import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import TextInput from '../../Components/Common/TextInput';
import Language from '../../../Config/Language';
import Button from '../../../Components/button';
import Container from '../../../Components/container';
import {CheckBox} from '@ui-kitten/components';
import styles from './styles';
import {SignUpUser} from '../../../Store/Actions/AuthAction';
import {ALERT_MESSAGE} from '../../../Config/Helper/GlobalHelper';
import {checkEmail} from '../../../Config/Helper/Validation';
import {CommonActions} from '@react-navigation/native';
import context from '../../../Store/Context';

const Index: () => React$Node = (props) => {
  const global = useContext(context);
  const [checked, setChecked] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    language: 'en',
  });
  let [validation, setValidation] = React.useState({
    email: true,
    password: true,
    firstName: true,
    lastName: true,
  });

  const onChangeForm = (key, value) => {
    setFormValues({...formValues, [key]: value});
  };

  const requireData = () => {
    let {email, password, firstName, lastName} = formValues;
    let val = {
      email: email !== '',
      password: password !== '',
      firstName: firstName !== '',
      lastName: lastName !== '',
    };
    setValidation(val);
    if (
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
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

  const onPressSignUp = () => {
    if (!requireData() || !emailValidation(formValues.email)) {
      return;
    }
    let finalData = {...formValues, notification: checked};
    SignUpUser(finalData, global).then((res) => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'FindPart'}],
        }),
      );
    });
  };

  return (
    <>
      <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={styles.sloganview}>
          <Text style={styles.logotxt}>{`${Language.LETS_GET_STARTED}. . .`}</Text>
          <Image
            source={require('../../../Assets/images/Car.png')}
            resizeMode="contain"
            style={styles.carlogo}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            inputStyles={[!validation.firstName && {borderColor: 'red'}]}
            label={Language.FIRST_NAME}
            value={formValues.firstName}
            onChangeText={(text) => onChangeForm('firstName', text)}
          />
          <TextInput
            inputStyles={[!validation.lastName && {borderColor: 'red'}]}
            label={Language.LAST_NAME}
            value={formValues.lastName}
            onChangeText={(text) => onChangeForm('lastName', text)}
          />
          <TextInput
            inputStyles={[!validation.email && {borderColor: 'red'}]}
            label={Language.EMAIL_ADDRESS}
            value={formValues.email}
            onChangeText={(text) => onChangeForm('email', text.toLowerCase())}
          />
          <TextInput
            autoCapitalize="none"
            isPassword={true}
            inputStyles={[!validation.password && {borderColor: 'red'}]}
            label={Language.PASSWORD}
            value={formValues.password}
            onChangeText={(text) => onChangeForm('password', text)}
          />

          <Text style={styles.langHeading}>{Language.LANGUAGE}</Text>
          <View style={styles.checkboxMain}>
            <View style={styles.checkboxview}>
              <View
                style={{borderColor: 'green', borderWidth: 3, borderRadius: 3}}>
                <CheckBox
                  checked={formValues.language === 'en'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'en');
                    Language.setLanguage('en');
                  }}
                />
              </View>
              <Text style={styles.lang}> ENGLISH</Text>
            </View>

            <View style={styles.checkboxview}>
              <View
                style={{borderColor: 'green', borderWidth: 3, borderRadius: 3}}>
                <CheckBox
                  checked={formValues.language === 'fr'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'fr');
                    Language.setLanguage('fr');
                  }}
                />
              </View>
              <Text style={styles.lang}> FRENCH</Text>
            </View>

            <View style={styles.checkboxview}>
              <View
                style={{borderColor: 'green', borderWidth: 3, borderRadius: 3}}>
                <CheckBox
                  checked={formValues.language === 'sp'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'sp');
                    Language.setLanguage('sp');
                  }}
                />
              </View>
              <Text style={styles.lang}> SPANISH</Text>
            </View>
          </View>

          <Text style={styles.langHeading}>{Language.NOTIFICATIONS}</Text>
          <View style={styles.checkboxMain}>
            <View style={styles.checkboxview}>
              <View
                style={{borderColor: 'green', borderWidth: 3, borderRadius: 3}}>
                <CheckBox
                  checked={checked}
                  style={styles.chexbox}
                  onChange={(nextChecked) => setChecked(nextChecked)}
                />
              </View>
              <Text style={styles.lang}> ENGLISH</Text>
            </View>
          </View>

          <Button size={'small'} text={Language.SIGN_UP} goto={onPressSignUp} />
        </View>
        </View>
      </Container>
      {/* <Loading/> */}
    </>
  );
};

export default Index;
