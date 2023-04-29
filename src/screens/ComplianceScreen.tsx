import Colors from "../../constants/Colors";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
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
  Image,
  VStack,
  HStack,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CalendarTab from "../../components/CalendarTab";
const ComplianceScreens = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
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
                  // shadowColor: "#000",
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 5,
                  // },
                  // shadowOpacity: 0.34,
                  // shadowRadius: 6.27,
                  // elevation: 10,
                }}
              >
                <VStack
                  alignItems="center"
                  justifyContent="center"
                  left={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/2023.gif")}
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
                      Compliance Calendar
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
                    <Center>
                      <CalendarTab />
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
          Compliance Calendar
        </Text>
      </Box>
    </VStack>
  );
};

export default ComplianceScreens;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -20,
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
