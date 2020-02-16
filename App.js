import "react-native-gesture-handler";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Make Payments" component={MakePaymentsScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Requests" component={RequestsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen(x) {
  console.log(x);
  navigation = x.navigation;
  return (
    <View>
      <View style={header_styles.container}>
        <Text style={{ fontSize: 40 }}> Hello, Eric. </Text>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the
            button below!
          </Text>
        </View>
      </ScrollView>

      <View style={footer_styles.container}>
        <TouchableOpacity
          style={footer_styles.button}
          onPress={() => navigation.navigate("Make Payments", { a: "home" })}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={footer_styles.button}
          onPress={() => navigation.navigate("Make Payments", { a: "new" })}
        >
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footer_styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function MakePaymentsScreen({ route, navigation }) {
  console.log(route.params);
  return (
    <View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{route.params.a}</Text>
      </View>
      <View style={footer_styles.container}>
        <TouchableOpacity
          style={footer_styles.button}
          onPress={() => navigation.navigate("Requests")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footer_styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footer_styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RequestsScreen({ navigation }) {
  return (
    <View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Requests Screen</Text>
      </View>
      <View style={footer_styles.container}>
        <TouchableOpacity
          style={footer_styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footer_styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={footer_styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const header_styles = StyleSheet.create({
  container: {
    height: "20%"
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  body: {
    height: "70%"
  },
  instructions: {
    color: "#888",
    fontSize: 80,
    marginHorizontal: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});

const footer_styles = StyleSheet.create({
  container: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    justifyContent: "center",
    width: "30%",
    backgroundColor: "skyblue",
    padding: 10
  }
});
