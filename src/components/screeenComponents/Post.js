import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Post = () => {
  const dataPost = [
    {
      title: "mr Aji",
      imagePerson: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      imagePost: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      likes: 72,
      isLiked: false,
    },
    {
      title: "Alan",
      imagePerson: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      imagePost: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      likes: 55,
      isLiked: false,
    },
    {
      title: "Okto",
      imagePerson: "https://images.unsplash.com/photo-1670272504471-61a632484750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      imagePost: "https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
      likes: 80,
      isLiked: false,
    },
  ];

  return (
    <View>
      {dataPost.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{
                    uri: data.imagePerson,
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                  }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{data.title}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: data.imagePost,
                }}
                style={{
                  width: "100%",
                  height: 400,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic name="ios-chatbubble-outline" style={{ fontSize: 20, paddingRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather
                name="bookmark"
                style={{
                  fontSize: 20,
                }}
              />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? "you and" : ""} {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                }}
              >
                Enjoy the Process!
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>View all comments</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: data.imagePerson,
                    }}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <TextInput placeholder="Add a comment" style={{ opacity: 0.5 }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="emoji-happy" style={{ fontSize: 15, color: "lightgreen", marginRight: 10 }} />
                  <Entypo name="emoji-neutral" style={{ fontSize: 15, color: "pink", marginRight: 10 }} />
                  <Entypo name="emoji-sad" style={{ fontSize: 15, color: "red" }} />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
