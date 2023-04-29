import Colors from "../../constants/Colors";
// import { useNavigation } from "@react-navigation/native";
// import { HomeScreenNavigationProp } from "../navigation/types";
import { StyleSheet, AppRegistry } from "react-native";
import {
  Box,
  Text,
  Center,
  Pressable,
  Actionsheet,
  Input,
  Icon,
  Image,
  VStack,
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
// import RNFS, { ReadDirItem } from "react-native-fs";

const CaseStudyScreen = () => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  // const [directories, setDirectories] = useState<ReadDirItem[]>([]);

  // useEffect(() => {
  //   const fetchDirectories = async () => {
  //     const dirs = await RNFS.readDir(RNFS.DocumentDirectoryPath + "/case_pdf");
  //     setDirectories(dirs);
  //   };

  //   fetchDirectories();
  // }, []);

  return (
    <VStack>
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                w={100}
                h="24"
                // bg={
                //   isPressed
                //     ? Colors.text
                //     : isHovered
                //     ? "coolGray.200"
                //     : Colors.text
                // }
                p="2"
                style={{
                  transform: [
                    {
                      scale: isPressed || isHovered ? 0.96 : 1,
                    },
                  ],
                  // borderBottomRightRadius: 70,
                  // borderBottomLeftRadius: 10,
                  // borderTopLeftRadius: 10,
                  // borderTopRightRadius: 10,
                  // borderRadius: 50,
                  // shadowColor: "black",
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 6,
                  // },
                  // shadowOpacity: 0.39,
                  // shadowRadius: 8.3,
                  // elevation: 13,
                }}
              >
                <VStack
                  alignItems="center"
                  position="absolute"
                  justifyContent="center"
                  left={4}
                  top={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/search.gif")}
                    alt="Alternate Text"
                    w="16"
                    h="16"
                  />
                </VStack>
                <Actionsheet
                  isOpen={isOpen}
                  onClose={onClose}
                  size="full"
                  bg={Colors.background}
                >
                  <HStack m={5}>
                    <Text
                      color={Colors.onPrimary}
                      fontSize="3xl"
                      style={{ fontWeight: "300" }}
                      pt={5}
                    >
                      Case Study
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
                    <Center>
                      <Box safeArea alignItems="center">
                        <Box alignItems="center" mb={5}>
                          <Input
                            bg={Colors.text}
                            color={Colors.onPrimary}
                            placeholder="Search Here"
                            w="80"
                            fontSize="md"
                            height="10"
                            borderRadius="20"
                            py="1"
                            px="2"
                            borderColor={Colors.onPrimary}
                            isHovered={false}
                            isFocused={false}
                            isDisabled={true}
                            InputLeftElement={
                              <Icon
                                ml="4"
                                size="5"
                                color={Colors.onPrimary}
                                as={<Ionicons name="ios-search" />}
                              />
                            }
                          />
                        </Box>
                        {/* <Box>
                          {directories.map((directory) => (
                            <Box key={directory.name} style={{ margin: 10 }}>
                              <Box
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "gray",
                                    marginRight: 10,
                                  }}
                                ></Box>
                                <Box style={{ flex: 1 }}>
                                  <Text
                                    numberOfLines={1}
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {directory.name.replace(".pdf", "")}
                                  </Text>
                                  <Pressable
                                    style={{
                                      backgroundColor: "red",
                                      padding: 10,
                                      borderRadius: 5,
                                      marginTop: 5,
                                    }}
                                    onPress={() =>
                                      RNFS.downloadFile({
                                        fromUrl: `https://karmamgmt.com/wecheckbetav0.1/case_pdf/${encodeURIComponent(
                                          directory.name
                                        )}`,
                                        toFile: `${RNFS.DocumentDirectoryPath}/${directory.name}`,
                                      })
                                        .promise.then(() => {
                                          console.log(
                                            "File downloaded successfully!"
                                          );
                                        })
                                        .catch((error) => {
                                          console.log(
                                            "File download error:",
                                            error
                                          );
                                        })
                                    }
                                  >
                                    <Text style={{ color: "white" }}>
                                      Click Here To Download!
                                    </Text>
                                  </Pressable>
                                </Box>
                              </Box>
                            </Box>
                          ))}
                        </Box> */}
                      </Box>
                    </Center>
                  </Actionsheet.Content>
                </Actionsheet>
              </Box>
            );
          }}
        </Pressable>
      </Box>
      <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Case Study
        </Text>
      </Box>
    </VStack>
  );
};

export default CaseStudyScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
    top: -20,
  },
  text1: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
