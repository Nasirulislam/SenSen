import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, Dimensions, FlatList, Linking } from 'react-native';
import styles from './styles';
import Container from '../../../Components/container';
import SearchBox from '../Common/SearchBox';
import SensenVideoHubComponent from '../Common/SensenVideoHubComponent';
import { Select, SelectItem } from '@ui-kitten/components';
import { SHW } from '../../../Config/Helper/styles';
import { SearchVideo } from '../../../Store/Actions/VideoHub';
import context from '../../../Store/Context';
const { width, height } = Dimensions.get('screen');
import VideoViewer from '../Common/VideoViewer';
import Language from '../../../Config/Language';

const baseUrl = "https://www.youtube.com/watch?v="
const index = props => {
  const global = useContext(context);
  const [Guide, setGuide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValues, setSearchValues] = useState({
    title: ''
  });

  useEffect(() => getData(), []);

  const getData = () => {
    setLoading(true);
    SearchVideo(searchValues, global)
      .then(function (res) {
        setGuide(res.data);
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
  const [videoViewerProps, setVideoViewerProps] = useState({
    close: () => setVideoViewerProps({ ...videoViewerProps, visible: false }),
    visible: false,
    uri: '',
  });

  return (
    <Container {...props}>
      <View style={styles.container}>
        <VideoViewer
          {...videoViewerProps}
          close={() =>
            setVideoViewerProps({ ...videoViewerProps, visible: false })
          }
        />
        <Image
          source={require('../../../Assets/images/SENSEN_Logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.menuTxt}>{Language.SENSEN_VIDEO_HUB}</Text>
        <View style={{ alignItems: 'center' }}>
          <SearchBox
            onPressMag={(val) => { onTextChange(val) }}
            onEmptyMag={(val) => { onEmptyMag(val) }}
            placeholder={Language.SEARCH}
            style={{ width: width * 0.7 }}
            containerStyle={{ top: height * 0.01 }}
            magStyle={{ ...SHW(12) }}
          />
          <View
            style={{
              top: height * 0.04,
              left: 10,
              right: 10,
            }}>
            <FlatList
              style={{ paddingHorizontal: 10 }}
              data={Guide}
              renderItem={({ item }) => {
                return (
                  <SensenVideoHubComponent
                    item={item}
                    onPress={() => Linking.openURL(baseUrl + item.id1.videoId)
                    }
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
    </Container>
  );
};

export default index;
