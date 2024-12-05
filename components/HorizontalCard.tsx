import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Componente funcional Card
const HorizontalCard = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <Image
        source={imageSource} // Usamos la URL de la imagen pasada como prop
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row", // Organiza los elementos horizontalmente
    alignItems: "center", // Centra los elementos verticalmente
    backgroundColor: "#eee", // Fondo blanco para la carta
    borderRadius: 10, // Bordes redondeados
    padding: 10, // Espaciado dentro de la carta
    margin: 10, // Espaciado exterior
    shadowColor: "#000", // Sombra para dar un efecto de elevación
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5, // Solo para Android
  },
  image: {
    width: 80, // Ancho de la imagen
    height: 80, // Alto de la imagen
    borderRadius: 40, // Hacer la imagen circular (opcional)
    marginRight: 10, // Espacio entre la imagen y el texto
  },
  textContainer: {
    flex: 1, // Asegura que el contenedor de texto ocupe el espacio restante
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "fff",
  },
  description: {
    fontSize: 14,
    color: "800000",
  },
});

export default HorizontalCard;
