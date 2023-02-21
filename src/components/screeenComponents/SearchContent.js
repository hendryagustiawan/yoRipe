import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        "https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676763134382-6572869ba6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676807882713-181049174265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
      ],
    },
    {
      id: 1,
      images: [
        "https://plus.unsplash.com/premium_photo-1661880731139-306ace6e30a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676471769503-37135c9b1cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676727496090-e93776b2a2da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676658685862-1ea1eb559060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      ],
    },
    {
      id: 2,
      images: [
        "https://images.unsplash.com/photo-1676763134010-5aefbe59285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        "https://images.unsplash.com/photo-1676907843113-0553388a80a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
      ],
    },
  ];
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity onPressIn={() => props.data(imageData)} onPressOut={() => props.data(null)} key={imgIndex} style={{ paddingBottom: 2 }}>
                      <Image
                        source={{
                          uri: imageData,
                        }}
                        style={{
                          width: 129,
                          height: 150,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id == 1 ? (
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 261,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity onPressIn={() => props.data(imageData)} onPressOut={() => props.data(null)} key={imgIndex} style={{ paddingBottom: 2 }}>
                        <Image
                          source={{
                            uri: imageData,
                          }}
                          style={{
                            width: 129,
                            height: 150,
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity onPressIn={() => props.data(data.images[2])} onPressOut={() => props.data(null)} style={{ marginLeft: 2 }}>
                  <Image
                    source={{
                      uri: data.images[2],
                    }}
                    style={{ width: 129, height: 300 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id == 2 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPressIn={() => props.data(data.images[1])} onPressOut={() => props.data(null)} style={{ paddingRight: 2 }}>
                  <Image
                    source={{
                      uri: data.images[1],
                    }}
                    style={{
                      width: 260,
                      height: 300,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 130,
                    justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity onPressIn={() => props.data(imageData)} onPressOut={() => props.data(null)} key={imgIndex} style={{ paddingBottom: 2 }}>
                        <Image
                          source={{
                            uri: imageData,
                          }}
                          style={{
                            width: 129,
                            height: 150,
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
