import React, { useRef, useState } from 'react';
import { View, Modal, TouchableWithoutFeedback, Text } from 'react-native';
import styles from './styles';
import Video from 'react-native-video';
import Icon from 'react-native-dynamic-vector-icons';
import { hp, wp } from '../../../../Config/Helper/ResponsiveScreen';
import ProgressBar from "react-native-progress/Bar";

const Index = ({
  visible = false,
  transparent = true,
  animationType = 'fade',
  mainContainerStyle = {},
  close = () => { },
  uri,
}, props) => {

  let [paused, setPaused] = useState(false);
  let [progress, setProgress] = useState(0);
  let [duration, setDuration] = useState(0);
  const player = useRef(null);

  const secondsToTime = (time) => {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
  }

  const handleMainButtonTouch = () => {
    if (progress >= 1) {
      player.current.seek(0);
    }
    setPaused(!paused)
  };

  const handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 250) * duration;
    const isPlaying = !paused;

    player.current.seek(progress);
  };

  const handleProgress = progress => {
    setProgress(progress.currentTime / duration)
  };

  const handleEnd = () => {
    setPaused(true);
  };

  const handleLoad = meta => {
    setDuration(meta.duration);
  };

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View style={{ ...styles.mainContainer, ...mainContainerStyle }}>
        {/*<Video*/}
        {/*  source={{uri: uri}} // Can be a URL or a local file.*/}
        {/*  style={styles.videoView}*/}
        {/*/>*/}
        <Video
          paused={paused}
          source={{ uri: uri }}
          style={styles.videoView}
          resizeMode="contain"
          onLoad={handleLoad}
          onProgress={handleProgress}
          onEnd={handleEnd}
          ref={player}
          volume={1}
        />
        <View style={styles.controls}>
          <TouchableWithoutFeedback onPress={handleMainButtonTouch}>
            <Icon name={!paused ? "pause" : "play"} type={'Ionicons'} size={wp(7)} color="#FFF" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleProgressPress}>
            <View>
              <ProgressBar
                progress={progress}
                color="#FFF"
                unfilledColor="rgba(255,255,255,.5)"
                borderColor="#FFF"
                width={wp(70)}
                height={hp(0.5)}
              />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.duration}>
            {secondsToTime(Math.floor(progress * duration))}
          </Text>
        </View>
        <Icon
          onPress={close}
          name="closecircle"
          type="AntDesign"
          size={wp(10)}
          color={'white'}
          style={{ marginTop: hp(80) }}
        />
      </View>
    </Modal>
  );
};

export default Index;
