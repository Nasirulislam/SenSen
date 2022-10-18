import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Container from '../../../Components/container';
import ProductInfoListComponent from '../Common/ProductInfoListComponent';
import Language from '../../../Config/Language';
import { Layout, Spinner } from '@ui-kitten/components';
import { SearchGuide, getFaq } from '../../../Store/Actions/guideActions';
import context from '../../../Store/Context';
import PDFViewer from '../Common/PDFViewer/PDFViewer';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';


const { width, height } = Dimensions.get('screen');

const index = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [selectedData, setselectedData] = React.useState([]);


  const global = useContext(context);
  const [Guide, setGuide] = useState([]);
  const [FAQ, setFAQ] = useState([]);
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
    type: 'faqInfo'
  });

  useEffect(() => getData(), []);
  useEffect(() => getFaqData(), []);
  const getFaqData = () => {
    setLoading(true);
    getFaq(global)
      .then(function (res) {
        setFAQ([...FAQ, ...res.data]);
        setLoading(false);
      })

  };
  const getData = () => {
    setLoading(true);
    SearchGuide(searchValues, global)
      .then(function (res) {
        setGuide([...Guide, ...res.data]);
        setLoading(false);
      })

  };

  const onPress = (index, item) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
      setselectedData([]);
    } else {
      setSelectedIndex(index);
      setselectedData(item.answer);
    }
  };

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
        <Text style={styles.menuTxt}>{Language.FREQUENTLY_ASKED_QUESTIONS}</Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          {FAQ.map((item, index) => {
            return (
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', padding: wp(1) }}
                onPress={() => {
                  onPress(index, item);
                }}>
                <View style={styles.subcontainer}>
                  <Text style={{ marginLeft: width * 0.02, fontWeight: '700' }}>{index+1}.{item.question}</Text>
                </View>

                {index === selectedIndex &&
                  < View style={styles.displaycontainer}>
                    <Text
                      style={{ marginLeft: width * 0.02, fontWeight: '700' }}>
                      {item.answer}
                    </Text>
                    {/* <Text
                      style={{
                        marginLeft: width * 0.02,
                        marginBottom: height * 0.01,
                      }}>
                      {item.answer}
                    </Text> */}
                  </View>
                }
              </TouchableOpacity>
            );
          })}
          <View
            style={{
              top: height * 0.04,
              paddingBottom:height * 0.05
            }}>
            <FlatList
              style={{ paddingHorizontal: 10 }}
              data={Guide}
              renderItem={({ item }) => {
                return (
                  <ProductInfoListComponent
                    item={item}
                    goto={() => setPdfViewerProps({
                      uri: item.pdfLink,
                      title: item.title,
                      visible: true,
                    })}
                  />
                );
              }}
              ItemSeparatorComponent={() => (
                <View style={{ height: height * 0.03 }} />
              )}
            />
          </View>
        </View>
      </View>
    </Container >
  );
};

export default index;
