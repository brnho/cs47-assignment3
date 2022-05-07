import { StyleSheet, Text, Pressable, Image } from 'react-native';
import { Themes, Images } from '../assets/Themes';
import React from 'react';

const SpotifyAuthButton = ({ pressFn }) => {
  return (
    <Pressable style={styles.spotifyButton} onPress={pressFn} testID={'AuthButton'}>
      <Image source={Images.spotify} style={styles.spotifyLogo} />
      <Text style={styles.spotifyButtonText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  spotifyButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 10,
    borderRadius: 999999,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spotifyButtonText: {
    color: Themes.colors.white,
    fontWeight: '700',
  },
  spotifyLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
});

export default SpotifyAuthButton;
