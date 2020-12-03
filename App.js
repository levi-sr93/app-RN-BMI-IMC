import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [diagnostic, setDiagnostic] = useState("Not Provided");
  const [color, setColor] = useState("#ccc");

  //imc -> weight / height 2
  function calculateBmi() {
    //se fosse no padrão brasileiro poderia usar por exemplo weight.replace(',', '.')
    const result = weight / Math.pow(height, 2);
    result.toPrecision(3);
    setBmi(result.toPrecision(3));

    if (result < 18.5) {
      setDiagnostic("UnderWeigh");
      setColor("#EA2027");
    } else if (result >= 18.5 && result < 25) {
      setDiagnostic("Normal");
      setColor("#009432");
    } else if (result >= 25 && result < 30) {
      setDiagnostic("Overweight");
      setColor("#F79F1F");
    } else if (result >= 30 && result <= 40) {
      setDiagnostic("Obese");
      setColor("#EA2027");
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Your BMI</Text>
      <View style={[styles.resultBox, { backgroundColor: color }]}> 
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.diagnostic}>{diagnostic}</Text>
      </View>
      <View style={styles.weightSection}>
        <FontAwesome5
          name="weight"
          size={24}
          color="black"
          style={styles.icons}
        />
        <TextInput
          style={styles.myInputWeight}
          placeholder="Weight"
          onChangeText={(text) => setWeight(text)}
        />
      </View>
      <View style={styles.heightSection}>
        <MaterialCommunityIcons
          name="human-male-height"
          size={30}
          color="black"
          style={styles.heightIcon}
        />
        <TextInput
          style={styles.myInputHeight}
          placeholder="Height"
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => calculateBmi()}
      ><Text style={styles.buttonText}>Calculate</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#eee",
    padding: 20,
    height: "100%",
  },
  title: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 20,
    fontWeight: "700",
  },
  resultBox: {
    // backgroundColor: "#ccc",
    alignSelf: "center",
    padding: 2,
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  result: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
  },
  diagnostic: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  icons: {
    marginTop: 40,
    marginRight: 10,
  },
  heightIcon: {
    marginRight: 5,
  },
  weightSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heightSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  myInputWeight: {
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 50,
    height: 60,
    borderRadius: 15,
    width: 300,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
  },
  myInputHeight: {
    borderWidth: 2,
    borderColor: "gray",
    marginTop: 3,
    marginBottom: 10,
    height: 60,
    borderRadius: 15,
    width: 300,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
  },
  customButton: {
    backgroundColor: '#009432',
    height: 35,
    width: 350,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 15,
    padding: 10,
    textAlign: 'center',
    paddingBottom: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
  }
});
