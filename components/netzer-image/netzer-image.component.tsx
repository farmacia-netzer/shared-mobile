import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, Pressable, StyleProp, StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useAnimation } from '##hooks/useAnimation';

interface Props {
  uri: string;
  onClick?(uri: string): void;
  style?: StyleProp<ImageStyle>;
  sharedElement?: boolean;
  sharedElementId?: string;
}

export const NetzerImage = ({
  uri,
  onClick,
  style = { width: 150, height: 150, margin: 5 },
  sharedElement,
  sharedElementId
}: Props) => {
  const { opacity, fadeIn } = useAnimation();

  const [isLoading, setIsLoading] = useState(false);

  const finishLoading = useCallback(() => {
    setIsLoading(isLoading);
    fadeIn();
  }, [fadeIn, isLoading]);

  const onItemClick = useCallback(() => {
    onClick?.(uri);
  }, [onClick, uri]);

  const onError = useCallback(() => {
    setIsLoading(false);
  }, []);

  const ImageComponent = (
    <Animated.Image
      style={{
        ...(style as any),
        opacity
      }}
      source={{ uri }}
      onError={onError}
      onLoad={finishLoading}
    />
  );

  const Content = sharedElement ? (
    <SharedElement id={sharedElementId!}>{ImageComponent}</SharedElement>
  ) : (
    ImageComponent
  );

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any)
      }}
    >
      {isLoading && <ActivityIndicator style={styles.loading} color="grey" size={30} />}

      <Pressable onPress={onItemClick} accessibilityRole="button">
        {Content}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    position: 'absolute'
  }
});
