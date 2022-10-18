import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import SearchBox from '../Common/SearchBox';
import ProductInfoListComponent from '../Common/ProductInfoListComponent';
import { SHW } from '../../../Config/Helper/styles';
import { Layout, Spinner } from '@ui-kitten/components';
import { SearchGuide } from '../../../Store/Actions/guideActions';
import context from '../../../Store/Context';
import Pdf from 'react-native-pdf';
import { hp, wp } from '../../../Config/Helper/ResponsiveScreen';
import Language from '../../../Config/Language';
import PDFViewer from '../Common/PDFViewer/PDFViewer';
import Button from '../../../Components/button';

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
    type: 'productInfo'
  });

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);
    SearchGuide(searchValues, global)
      .then(function (res) {
        // if (searchValues.title != '')
        setGuide(res.data);
        // else
        //   setGuide([...Guide, ...res.data]);
        setLoading(false);


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
        <Text style={styles.menuTxt}>{Language.PRODUCT_INFO_GUIDES}</Text>
        <View style={{ alignItems: 'center' }}>
          <SearchBox
            onPressMag={(val) => { onTextChange(val) }}
            onEmptyMag={(val) => { onEmptyMag(val) }}
            placeholder={Language.SEARCH}
            style={{ width: width * 0.7 }}
            containerStyle={{ top: height * 0.03 }}
            magStyle={{ ...SHW(12) }}
          />
          <View style={{ top: height * 0.05 }}>
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
