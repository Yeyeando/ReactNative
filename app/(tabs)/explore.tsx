import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/Card";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#000", dark: "#000" }}
      headerImage={
        <Image
          source={require("@/assets/images/instruccions.png")}
          style={styles.instrucctionLogo}
        />
      }
    >
      {/* Contenedor con fondo #eee */}
      <ThemedView style={[styles.titleContainer, styles.background]}>
        <ThemedText type="title">How does it work?</ThemedText>
      </ThemedView>

      <Card
        imageSource={require("@/assets/images/waiter-menu.png")}
        title="Take the order"
        description="First select the table to be noted. Then select the dishes you are going to take, in this part, you can add or remove the necessary ingredients. Then, send the order to the chef"
      />
      <Card
        imageSource={require("@/assets/images/chef-menu.png")}
        title="Prepares the food"
        description="The cook has all the orders in order of arrival, along with a timer to keep track of the waiting time for each table and the ingredients in each dish."
      />
      <Card
        imageSource={require("@/assets/images/waiter-pick-up.png")}
        title="Call the waiter"
        description="Once a dish is cooked, we proceed to press the serve button for the waiter to take the dish to the customer. That's all you need to know, it's as simple as that."
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  background: {
    backgroundColor: "#fff", // Fondo gris claro
    padding: 10, // Espaciado interno
    borderRadius: 8, // Esquinas redondeadas opcionales
  },
  title: {
    color: "#000",
  },
  instrucctionLogo: {
    width: 200,
    height: 200,
  },
});
