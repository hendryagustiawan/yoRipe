import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: "Your Story",
      imageUrl: "https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      name: "Tom_32",
      imageUrl: "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      name: "naruto99",
      imageUrl: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      name: "Luffy_io",
      imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      name: "sasukeew",
      imageUrl: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      name: "jerry99",
      imageUrl: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGFuaW1hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingVertical: 20 }}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push("Status", {
                name: data.name,
                image: data.imageUrl,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <View style={{ position: "absolute", bottom: 15, right: 10, zIndex: 1 }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: "#405de6",
                      backgroundColor: "white",
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View style={{ width: 68, height: 68, backgroundColor: "white", borderWidth: 1.8, borderRadius: 100, justifyContent: "center", alignItems: "center", borderColor: "#c13584" }}>
                <Image
                  source={{
                    uri: data.imageUrl,
                  }}
                  style={{
                    resizeMode: "cover",
                    width: "92%",
                    height: "92%",
                    borderRadius: 100,
                    backgroundColor: "orange",
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  textAlign: "center",
                  opacity: data.id ? 1 : 0.5,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
