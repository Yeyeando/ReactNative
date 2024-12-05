import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ imageSource, title, description }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Imagen grande arriba */}
      <Image source={imageSource} style={styles.cardImage} />

      {/* Texto debajo de la imagen */}
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff", // Fondo blanco para la tarjeta
    borderRadius: 10, // Bordes redondeados
    overflow: "hidden", // Para que los bordes de la imagen estén redondeados
    shadowColor: "#000", // Sombra para la tarjeta
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 6, // Radio de la sombra
    elevation: 5, // Elevación para Android
    margin: 10, // Margen alrededor de la tarjeta
  },
  cardImage: {
    width: "100%", // La imagen ocupa todo el ancho de la tarjeta
    height: 250, // Altura ajustable para la imagen
    resizeMode: "contain", // Asegura que la imagen se ajuste completamente sin recortarse
  },
  cardTextContainer: {
    padding: 15, // Espaciado alrededor del texto
  },
  cardTitle: {
    fontSize: 18, // Tamaño del título
    fontWeight: "bold", // Negrita para el título
    color: "#333", // Color del título
    marginBottom: 10, // Espacio debajo del título
  },
  cardDescription: {
    fontSize: 14, // Tamaño del texto descriptivo
    color: "#777", // Color del texto descriptivo
  },
});

export default Card;
