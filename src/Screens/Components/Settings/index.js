import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import TextInput from '../../Components/Common/TextInput';
import { clearAsync } from '../../../Config/Helper/GlobalHelper';
import { CommonActions } from '@react-navigation/native';
import Button from '../../../Components/button';
import { CheckBox } from '@ui-kitten/components';
import Language from '../../../Config/Language';
import { checkEmail } from '../../../Config/Helper/Validation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import { UpdateUserInfo } from '../../../Store/Actions/AuthAction';
import { ALERT_MESSAGE, getAsyncItem } from '../../../Config/Helper/GlobalHelper';
import Loading from '../../../Components/loading';
import context from '../../../Store/Context';
import { SET_APP_LANGUAGE } from '../../../Store/Constans';
import BottomBar from '../Common/BottomBar/BottomBar';


const { width } = Dimensions.get('screen');

const index = (props) => {
  const global = useContext(context);
  const {data} = global;
  
  React.useEffect(() => {
    setTimeout(() => {
      getAsyncItem('appUserData').then((res) => {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: res ? '' : 'SystemLogin'}],
          }),
        );
      });
    }, 500);
  }, []);
    
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [profileData] = useState([
    {
      id: 0,
      title: 'ACCOUNT',
    },
    {
      id: 1,
      title: 'LANGUAGE',
    },
    {
      id: 2,
      title: 'NOTIFICATIONS',
    },
  ]);
  const [formValues, setFormValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    language: global.data.appLanguage,
    userId: '',
  });
  let [validation, setValidation] = useState({
    email: true,
    firstName: true,
    lastName: true,
  });
  let [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getAsyncItem('appUserData').then(async (temp_r) => {
      let r = JSON.parse(temp_r)
      let temp_obj = {
        email: r.email,
        firstName: r.firstName,
        language: r.language,
        lastName: r.lastName,
        userId: r.id,
      }
      setChecked(r.notification)
      await setFormValues(temp_obj)
    })
  }, []);

  const onPress = (index, item) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const onChangeForm = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const requireData = () => {
    let { email, firstName, lastName } = formValues;
    let val = {
      email: email !== '',
      firstName: firstName !== '',
      lastName: lastName !== '',
    };
    setValidation(val);
    if (email === '' || firstName === '' || lastName === '') {
      ALERT_MESSAGE({
        message: 'Please fill all required fields',
        buttons: [{ text: 'Okay' }],
      });
      return false;
    }
    return true;
  };


  const emailValidation = (value) => {
    if (!checkEmail(value)) {
      setValidation({
        ...validation,
        email: false,
      });
      ALERT_MESSAGE({
        message: 'Please enter correct email address',
        buttons: [{ text: 'Okay' }],
      });
      return false;
    }
    return true;
  };

  const onPressSubmit = () => {
    if (!requireData() || !emailValidation(formValues.email)) {
      return;
    }
    let finalData = { ...formValues, notification: checked };
    setLoader(true);
    UpdateUserInfo(finalData, global)
      .then((res) => {
        setLoader(false);
        ALERT_MESSAGE({
          message: 'User info updated successfully',
          buttons: [{ text: 'Okay' }],
        });
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  const renderInnerView = (item, index) => {
    let component = <View />;
    switch (index) {
      case 0:
        component = (
          <View>
            <TextInput
              inputStyles={[
                !validation.firstName && { borderColor: 'red' },
                { width: wp(65) },
              ]}
              label={Language.FIRST_NAME}
              value={formValues.firstName}
              onChangeText={(text) => onChangeForm('firstName', text)}
            />
            <TextInput
              inputStyles={[
                !validation.lastName && { borderColor: 'red' },
                { width: wp(65) },
              ]}
              label={Language.LAST_NAME}
              value={formValues.lastName}
              onChangeText={(text) => onChangeForm('lastName', text)}
            />
            <TextInput
              inputStyles={[
                !validation.email && { borderColor: 'red' },
                { width: wp(65) },
              ]}
              label={Language.EMAIL_ADDRESS}
              value={formValues.email}
              onChangeText={(text) => onChangeForm('email', text.toLowerCase())}
            />
          </View>
        );
        break;
      case 1:
        component = (
          <View style={styles.checkboxMain}>
            <View style={styles.checkboxview}>
              <View
                style={{ borderColor: 'green', borderWidth: 3, borderRadius: 3 }}>
                <CheckBox
                  checked={formValues.language === 'en'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'en');
                    global.dispatch(SET_APP_LANGUAGE, 'en');
                    Language.setLanguage('en');
                  }}
                />
              </View>
              <Text style={styles.lang}> ENGLISH</Text>
            </View>

            <View style={styles.checkboxview}>
              <View
                style={{ borderColor: 'green', borderWidth: 3, borderRadius: 3 }}>
                <CheckBox
                  checked={formValues.language === 'fr'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'fr');
                    global.dispatch(SET_APP_LANGUAGE, 'fr');
                    Language.setLanguage('fr');
                  }}
                />
              </View>
              <Text style={styles.lang}> FRENCH</Text>
            </View>

            <View style={styles.checkboxview}>
              <View
                style={{ borderColor: 'green', borderWidth: 3, borderRadius: 3 }}>
                <CheckBox
                  checked={formValues.language === 'sp'}
                  style={styles.chexbox}
                  onChange={(nextChecked) => {
                    onChangeForm('language', 'sp');
                    global.dispatch(SET_APP_LANGUAGE, 'sp');
                    Language.setLanguage('sp');
                  }}
                />
              </View>
              <Text style={styles.lang}> SPANISH</Text>
            </View>
          </View>
        );
        break;
      case 2:
        component = (
          <View style={[styles.checkboxMain, { height: hp(10) }]}>
            <View style={styles.checkboxview}>
              <View
                style={{ borderColor: 'green', borderWidth: 3, borderRadius: 3 }}>
                <CheckBox
                  checked={checked}
                  style={styles.chexbox}
                  onChange={(nextChecked) => setChecked(nextChecked)}
                />
              </View>
              <Text style={styles.lang}> Notification</Text>
            </View>
          </View>
        );
        break;
    }
    return component;
  };

  return (
    <Container {...props}>
      <View style={styles.container}>
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.SETTINGS}</Text>
      
      </View>
      {profileData.map((item, index) => {
        return (
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              onPress(index, item);
            }}>
            <View style={styles.subcontainer}>
              {(index === selectedIndex && (
                <Icon
                  name="keyboard-arrow-down"
                  size={35}
                  color="grey"
                  style={{ marginLeft: width * 0.02 }}
                />
              )) || (
                  <Icon
                    name="arrow-forward-ios"
                    size={20}
                    color="grey"
                    style={{ marginLeft: width * 0.02 }}
                  />
                )}
              <Text style={{ marginLeft: width * 0.02 }}>{Language[item.title]}</Text>
            </View>
            {index === selectedIndex && (
              <View style={styles.displaycontainer}>
                {renderInnerView(item, index)}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
     
      <Button size={'small'} goto={onPressSubmit} />
      <Button
              viewStyle={{ top: hp(-5) }}
              size={'small'}
              text= {'LOGOUT'}
              goto={() => {
                clearAsync().then((res) => {
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'SystemLogin' }],
                    }),
                  );
                });
              }}
            />
      <Loading isVisible={loader} />
      
    </Container>
  );
};

export default index;
