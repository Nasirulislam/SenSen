import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import SearchBox from '../Common/SearchBox';
import ProductInfoListComponent from '../Common/ProductInfoListComponent';
// import SenSenVideoHub from '../../Components/SenSenVideoHub';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import { colors, SHW } from '../../../Config/Helper/styles';
import Language from '../../../Config/Language';
import { Layout, Spinner } from '@ui-kitten/components';
import { SearchGuide } from '../../../Store/Actions/guideActions';
import PDFViewer from '../Common/PDFViewer/PDFViewer';

import context from '../../../Store/Context';
const { width, height } = Dimensions.get('screen');

const index = props => {

  const global = useContext(context);
  const [Guide, setGuide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfViewerProps, setPdfViewerProps] = useState({
    visible: false,
    transparent: true,
    animationType: 'fade',
    mainContainerStyle: {},
    close: () => { },
    uri: '',
  });

  const [searchValues, setSearchValues] = useState({
    title: '',
    type: 'troubleshootInfo'
  });

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);
    SearchGuide(searchValues, global)
      .then(function (res) {
        setGuide(res.data);
        // setGuide([...Guide, ...res.data]);
        setLoading(false);
        console.log('res.data')
        console.log(res.data)
      })

  };
  const onTextChange = (val) => {
    setSearchValues({ ...searchValues, ['title']: val })
    getData();
  }
  const onEmptyMag = (val) => {
    if (val == '')
      onTextChange(val);
  }
  return (
    <Container {...props}>
      <View style={styles.container}>
        <PDFViewer
          {...pdfViewerProps}
          close={() => setPdfViewerProps({ ...pdfViewerProps, visible: false })}
        />
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.TROUBLE_SHOOTING_GUIDE}</Text>
        <View style={{ alignItems: 'center' }}>
          <SearchBox
            onPressMag={(val) => { onTextChange(val) }}
            onEmptyMag={(val) => { onEmptyMag(val) }}
            placeholder={Language.SEARCH}
            style={{ width: width * 0.7 }}
            containerStyle={{ top: height * 0.03 }}
            magStyle={{ ...SHW(12) }}
          />
          <View
            style={{
              marginTop: hp(5),
              padding: wp(1.5),
              backgroundColor: colors.SYSTEM_GREEN,
              width: wp(85),
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
              }}>
              {Language.WHAT_CAN_HELP_WITH_YOU}
            </Text>
          </View>
          <View style={{ top: hp(2) }}>
            <FlatList
              style={{ paddingHorizontal: 10 }}
              data={Guide}
              renderItem={({ item }) => (
                <ProductInfoListComponent
                  item={item}
                  goto={() => setPdfViewerProps({
                    uri: item.pdfLink,
                    title: item.title,
                    visible: true,
                  })}
                />
              )}
              ItemSeparatorComponent={() => (
                <View style={{ height: height * 0.03 }} />
              )}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default index;
