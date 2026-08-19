import { setAudioModeAsync } from "expo-audio";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { VideoView, useVideoPlayer } from "expo-video";
import { useCallback, useEffect, useRef } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const SPLASH_TIMEOUT = 6000;

export default function SplashScreenRoute() {
  const hasFinished = useRef(false);

  const finishSplash = useCallback(() => {
    if (hasFinished.current) return;

    hasFinished.current = true;
    router.replace("/(auth)/login");
  }, []);

  const player = useVideoPlayer(
    require("../../assets/video/camiguinnew-optimized.mp4"),
    (videoPlayer) => {
      videoPlayer.loop = false;
      videoPlayer.muted = true;
      videoPlayer.play();
    },
  );

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch((error) => {
      console.warn("Unable to configure splash video audio:", error);
    });
  }, []);

  useEffect(() => {
    const subscription = player.addListener("playToEnd", finishSplash);
    const timeout = setTimeout(finishSplash, SPLASH_TIMEOUT);

    return () => {
      subscription.remove();
      clearTimeout(timeout);
    };
  }, [finishSplash, player]);

  return (
    <View
      onLayout={() => {
        SplashScreen.hideAsync();
      }}
      style={styles.container}
    >
      <StatusBar hidden />
      <VideoView
        allowsFullscreen={false}
        allowsPictureInPicture={false}
        contentFit="cover"
        nativeControls={false}
        player={player}
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
