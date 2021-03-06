import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";

const EyeExerciseScreen = (props) => {
  return (
    <View>
      <ScrollView style={styles.screen}>
        <Header
          title="RELAX and REFRESH your eyes with 9 simple steps!"
          style={styles.header}
          headerTitle={styles.headerTitle}
        />
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text>1</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise1.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes for a few seconds</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>2</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise2.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>3</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise3.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>4</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise4.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Look up right, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>
                Look down left, hold 5 seconds, relax your eyes
              </Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text>5</Text>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise5.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Rotate your eyeballs for 10 rounds to the left
              </Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>6</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise6.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Rotate your eyeballs for 10 rounds to the right
              </Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text>7</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise7.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Cross your eyes by looking at the tip of your nose
              </Text>
              <Text style={styles.text}>
                Look up at your eyebrows and then back to the tip of your nose
              </Text>
              <Text style={styles.text}>Relax your eyes</Text>
              <Text style={styles.text}>Repeat 5 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text>8</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise8.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Close your eyes as tightly as possible
              </Text>
              <Text style={styles.text}>Hold for 5 seconds, then relax</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text>9</Text>
          </View>
          <View style={styles.imageTextContainer}>
            <Image
              style={styles.image}
              source={require("../assets/EyeExercise9.png")}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Open your eyes wide open</Text>
              <Text style={styles.text}>Hold for 5 seconds, then relax</Text>
              <Text style={styles.text}>Repeat 10 times</Text>
              <Text style={styles.text}>Blink your eyes</Text>
            </View>
          </View>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

EyeExerciseScreen.navigationOptions = {
  headerTitle: "Eye Exercises",
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
  header: {
    height: 80,
    backgroundColor: Colors.accent,
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    margin: 15,
  },
  mainContainer: {},
  container: {
    textAlign: "right",
  },
  imageTextContainer: {
    margin: 3,
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 200,
    marginBottom: 15,
  },
  textContainer: {
    backgroundColor: Colors.primary,
    width: "85%",
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
  },
});

export default EyeExerciseScreen;
