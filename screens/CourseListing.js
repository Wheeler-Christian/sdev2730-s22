import { View, Text, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";

const courses = [
  {
    id: "SDEV1022",
    name: "HTML CSS Basics",
    description: "Uses HTML5 and CSS3 to create web sites",
  },
  {
    id: "SDEV1032",
    name: "Programming Basics",
    description:
      "Teaches basic programming algorithms of sequence, selection, and repetition",
  },
  {
    id: "SDEV1041",
    name: "SQL Basics",
    description: "Database fundamentals using MySQL and MariaDB",
  },
  {
    id: "SDEV1070",
    name: "Introduction to DevOps",
    description:
      "Learn the basics of the DevOps philosophy, and also learn the basics of Docker.",
  },
  {
    id: "SDEV1090",
    name: "Version Control",
    description: "Learn Git and GitHub to control versions of development",
  },
  {
    id: "SDEV2730",
    name: "Mobile Development",
    description: "Cross-platform development of mobile apps with React Native",
  },
];

function renderItem({ item }) {
  return (
    <View>
      <Card id={item.id} name={item.name} description={item.description} />
    </View>
  );
}

function courseSeparator() {
  return <View style={styles.separator} />;
}

function CourseListing() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Course Listing</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={courseSeparator}
      />
    </View>
  );
}

export default CourseListing;

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
  separator: {
    backgroundColor: "#777",
    height: 2,
    margin: 7,
  },
});
