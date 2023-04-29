import Colors from "../../constants/Colors";
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
  Input,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Accordion from "../../components/Accordion";
import React, { useState, Component, useEffect } from "react";

const FAQScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  const [searchQuery, setSearchQuery] = useState("");
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
                      scale: isPressed ? 0.96 : 1,
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
                  left={2}
                  top={2}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/social-engagement.gif")}
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
                      FAQs
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={48}>
                    <Center>
                      <Box
                        safeArea
                        style={{
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Box alignItems="center">
                          <Input
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
                        <Box w="80">
                          <Accordion
                            title="The Building and Other Construction Workers' (Regulation of Employment and Conditions of Service) Act, 1996"
                            content="Who does the Act apply?
It applies to every establishment which employs or had employed on any day of the preceding twelve months, ten or more building workers in any building or other construction work.
Who is required to obtain Registration Certificate?
Every employer shall:
• In relation to an establishment to which this Act applies on its commencement, within a period of sixty days from such commencement: and
• In relation to any other establishment to which this Act may be applicable at any time after such commencement, within a period of sixty days from the date on which this Act becomes applicable to such establishment.

Provided that the registering officer may entertain any such application after the expiry of the periods aforesaid, if he is satisfied that the applicant was prevented by sufficient cause from making the application within such period."
                          />
                          <Accordion
                            title="The Building and Other Construction Workers' (Regulation of Employment and Conditions of Service) Act, 1996"
                            content="Who does the Act apply?
It applies to every establishment which employs or had employed on any day of the preceding twelve months, ten or more building workers in any building or other construction work.
Who is required to obtain Registration Certificate?
Every employer shall:
• In relation to an establishment to which this Act applies on its commencement, within a period of sixty days from such commencement: and
• In relation to any other establishment to which this Act may be applicable at any time after such commencement, within a period of sixty days from the date on which this Act becomes applicable to such establishment.

Provided that the registering officer may entertain any such application after the expiry of the periods aforesaid, if he is satisfied that the applicant was prevented by sufficient cause from making the application within such period."
                          />
                          <Accordion
                            title="The Building and Other Construction Workers' (Regulation of Employment and Conditions of Service) Act, 1996"
                            content="Who does the Act apply?
It applies to every establishment which employs or had employed on any day of the preceding twelve months, ten or more building workers in any building or other construction work.
Who is required to obtain Registration Certificate?
Every employer shall:
• In relation to an establishment to which this Act applies on its commencement, within a period of sixty days from such commencement: and
• In relation to any other establishment to which this Act may be applicable at any time after such commencement, within a period of sixty days from the date on which this Act becomes applicable to such establishment.

Provided that the registering officer may entertain any such application after the expiry of the periods aforesaid, if he is satisfied that the applicant was prevented by sufficient cause from making the application within such period."
                          />
                        </Box>
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
          FAQs
        </Text>
      </Box>
    </VStack>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 13,
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
