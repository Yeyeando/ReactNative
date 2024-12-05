import { Image, StyleSheet, Platform } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HorizontalCard from "@/components/HorizontalCard";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#000", dark: "#000" }}
      headerImage={
        <Image
          source={require("@/assets/images/cutlery.png")}
          style={styles.cutleryLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        {/* Aplicamos el color negro al texto */}
        <ThemedText type="title" style={styles.titleText}>
          Cooking time!
        </ThemedText>
      </ThemedView>

      <HorizontalCard
        imageSource={require("@/assets/images/react-logo.png")}
        title={"Take a sit"}
        description={
          "If you need an intuitive app for your waiters and cooks, this is what you need."
        }
      />

      <HorizontalCard
        imageSource={require("@/assets/images/react-logo.png")}
        title={"Why use Fast Service?"}
        description={
          "Is a very simple and intuitive app, which will help you to provide a fast and efficient service."
        }
      />

      <HorizontalCard
        imageSource={require("@/assets/images/no-paper.png")}
        title={"Help the environment"}
        description={
          "Forget about wasting paper with orders and do yourself and the environment a favor by using our app. Take advantage of it."
        }
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
  },
  titleText: {
    color: "#000", // Color del texto negro
    fontSize: 24, // Tamaño de la fuente
    fontWeight: "bold", // Negrita para mayor énfasis
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  cutleryLogo: {
    height: 300,
    width: 300,
    top: 0,
    left: 0,
    position: "absolute",
  },
});
