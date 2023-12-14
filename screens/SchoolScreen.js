import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

function SchoolScreen({ navigation }) {
  function buttonHandler() {
    navigation.navigate("Course Listing");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Davis Technical College</Text>
      <Image
        source={require("../assets/images/dtc.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>550 East 300 South, Kaysville, UT 84037</Text>
      <Text style={styles.text}>801-593-2500</Text>
      <View style={styles.buttonContainer}>
        <Button title="Courses Taken" color="#740000" onPress={buttonHandler} />
      </View>
    </View>
  );
}

export default SchoolScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#260000",
  },
  h1: {
    color: "#eee",
    fontSize: 26,
    marginTop: 36,
    fontFamily: "ubuntu-bold",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    color: "#eee",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "ubuntu-regular",
  },
  buttonContainer: {
    margin: 20,
    borderRadius: 5,
  },
});
