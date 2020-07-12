import React, {useRef, useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

const RippleFadedView = (props: any) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const finalValueFade = props.offline ? 0.7 : 1;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: finalValueFade,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [props.offline]);

  const finalValueScale = props.refreshing && !props.offline ? 1.05 : 1;
  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: finalValueScale,
      useNativeDriver: true,
    }).start();
  }, [props.refreshing]);

  return (
    <>
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          transform: [{scale: scaleValue}],
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    </>
  );
};

export default RippleFadedView;
