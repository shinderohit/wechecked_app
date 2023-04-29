import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../src/navigation/types";
import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  Center,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  Pressable,
  Actionsheet,
  Avatar,
  Icon,
  Input,
  Image,
  VStack,
  HStack,
  useDisclose,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import EHSCentral from "./EHSCentral";
import React, { useState, Component, useEffect } from "react";

const EHSCase = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [name, setName] = useState([]);
  const [descrip, setDescrip] = useState([]);

  useEffect(() => {
    getName();
    getDescrip();
  }, []);

  async function getName() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/ehs_case.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setName(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  async function getDescrip() {
    try {
      const response_var = await fetch(
        "https://karmamgmt.com/wecheckbetav0.1/app_new_php/ehs_case_descrip.php",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (response) => response.json())
        .then(async (data) => setDescrip(data))
        .catch((error) => {
          alert("Error in responce. " + error);
        });
    } catch (error) {
      alert("Error in try. " + error);
    }
  }

  return (
    <VStack>
      <Box flex={1} alignItems="center">
        <Pressable onPress={onOpen} position="relative">
          {({ isHovered, isPressed }) => {
            return (
              <Box
                alignItems="center"
                bgColor={
                  isPressed ? "#3E4095" : isHovered ? "#3E4095" : "#3E4095"
                }
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                  shadowColor: "black",
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.39,
                  shadowRadius: 8.3,
                  elevation: 13,
                }}
                bg={Colors.text}
                w="72"
                h="8"
                rounded="10"
                shadow={3}
                borderWidth="1"
                borderColor={Colors.text}
              >
                <Text color={Colors.onPrimary} style={styles.text1} pt="1">
                  Click Here
                </Text>
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
                      EHS Case Laws
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={7}>
                    <Center>
                      <Box alignItems="center">
                        <Input
                          mt={5}
                          mb={2}
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
                      <ScrollView>
                        <Box safeArea alignItems="center">
                          <Box w="80" mb="3">
                            {name &&
                              name.length > 0 &&
                              name.map((name, index) => (
                                <Box
                                  w="80"
                                  h="auto"
                                  bg={Colors.onPrimary}
                                  p="4"
                                  rounded={10}
                                  borderColor="#ccc"
                                  borderWidth="1"
                                  position="relative"
                                  style={styles.shadow}
                                  mb="5"
                                >
                                  <Text
                                    key={index}
                                    style={{ textTransform: "capitalize" }}
                                    bold
                                    fontSize="md"
                                    color={Colors.secondary}
                                  >
                                    {name}
                                  </Text>
                                  {descrip &&
                                    descrip.length > 0 &&
                                    descrip.map((descrip, index) => (
                                      <Box>
                                        <Text
                                          key={index}
                                          pb={2}
                                          fontSize="sm"
                                          color={Colors.gray}
                                        >
                                          {descrip}
                                        </Text>
                                      </Box>
                                    ))}
                                  <EHSCentral />
                                </Box>
                              ))}
                          </Box>
                        </Box>
                      </ScrollView>
                    </Center>
                  </Actionsheet.Content>
                </Actionsheet>
              </Box>
            );
          }}
        </Pressable>
      </Box>
      {/* <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Bare Acts
        </Text>
      </Box> */}
    </VStack>
  );
};

export default EHSCase;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
    bottom: -10,
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
