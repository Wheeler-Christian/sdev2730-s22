import { ScrollView, StyleSheet, Text, View } from "react-native";

const skillsArray = [
  "HTML",
  "CSS",
  "SQL",
  "JavaScript",
  "PHP",
  "React",
  "React Native",
  "Docker",
  "C#",
  "CompTIA A+",
];

function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My Skills</Text>
      <ScrollView>
        {skillsArray.map((skill, index) => (
          <Text key={index} style={styles.text}>
            {skill}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#260000",
    alignItems: "center",
  },
  h1: {
    margin: 26,
    color: "#eee",
    fontSize: 26,
    fontFamily: "ubuntu-bold",
  },
  text: {
    color: "#eee",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "ubuntu-regular",
  },
});
