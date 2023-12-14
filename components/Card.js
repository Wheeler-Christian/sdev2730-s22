import { Text, View, StyleSheet } from "react-native";

function Card({ id, name, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.h2}>
        {id}: {name}
      </Text>
      <Text style={styles.paragraph}>{description}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#431e1e",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  h2: {
    color: "white",
    fontFamily: "ubuntu-bold",
    fontSize: 20,    
  },
  paragraph: {
    color: "white",
    fontFamily: "ubuntu-regular",
    fontSize: 18,
  },
});
