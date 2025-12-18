import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
const logo = require("./assets/icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 1,
      }}
    >
      <Modal
        visible={isModalVisible}
        animationType="slide"
        style={{ backgroundColor: "lightblue", padding: 60 }}
        presentationStyle="pageSheet"
      >
        <View>
          <Text>Modal Content Here</Text>
          <Button
            onPress={() => setIsModalVisible(false)}
            title="Close Modal"
            color="midnightblue"
          />
        </View>
      </Modal>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {/* Custom Pressable Button */}
        <Pressable
          onLongPress={() => console.log("button press")}
          style={{
            marginTop: 30,
            backgroundColor: "midnightblue",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text
            onPress={() => setIsModalVisible(true)}
            style={{ color: "white", fontSize: 16 }}
          >
            Press Me
          </Text>
        </Pressable>

        {/* Pressable Text */}
        <Pressable onPress={() => console.log("text press")}>
          <Text
            style={{
              marginTop: 30,
              textAlign: "center",
              paddingHorizontal: 10,
              color: "black",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Pressable>

        {/* Another Image */}
        <Image
          source={logo}
          style={{
            width: "80%",
            height: 200,
            marginTop: 20,
            marginBottom: 100,
          }}
        />

        {/* More Text Content */}
        <Text
          style={{
            textAlign: "center",
            color: "black",
            marginBottom: 200,
            paddingHorizontal: 10,
          }}
        >
          More content goes here... Lorem Ipsum is a placeholder text often used
          in design mockups and prototypes. This text serves as a stand-in for
          actual content to give designers a feel for how the layout will look
          when real content is applied.
        </Text>
      </ScrollView>
    </View>
  );
}
