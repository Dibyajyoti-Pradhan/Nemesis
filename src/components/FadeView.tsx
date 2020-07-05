import React, { useRef, useEffect } from 'react';
import {Animated} from "react-native";

const FadeView = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(1)).current 
        const finalValue = props.offline? 0.7 : 1;
        useEffect(() => {
          Animated.timing(
            fadeAnim,
            {
              toValue: finalValue,
              duration: 3000,
              useNativeDriver: true
            }
          ).start();
        }, [props.offline])
      
        return (
          <Animated.View                 // Special animatable View
            style={{
              ...props.style,
              opacity: fadeAnim,         // Bind opacity to animated value
            }}
          >
            {props.children}
          </Animated.View>
        );
      }
  
export default FadeView;