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
  useDisclose,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
const HolidayListScreen = () => {
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
                  justifyContent="center"
                  left={4}
                  flexWrap="wrap"
                >
                  <Image
                    source={require("../../assets/icons/list.gif")}
                    alt="Alternate Text"
                    w="12"
                    h="12"
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
                      Holiday List
                    </Text>
                  </HStack>
                  <Actionsheet.Content bg={Colors.text} pb={10}>
                    <Center>
                      <ScrollView>
                        <Box safeArea alignItems="center">
                          <Box w="80">
                            <Text
                              bold
                              fontSize="xl"
                              color={Colors.primary}
                              underline
                            >
                              Central Hoilday List :
                            </Text>
                            <Box
                              w="80"
                              bg={Colors.onPrimary}
                              p="4"
                              rounded={10}
                              mt="5"
                              borderColor="#ccc"
                              borderWidth="1"
                              style={styles.shadow}
                            >
                              <Text bold fontSize="md" color={Colors.secondary}>
                                Central
                              </Text>
                              <Box pt="5">
                                <Pressable
                                  onPress={() => navigation.navigate("Home")}
                                >
                                  {({ isHovered, isPressed }) => {
                                    return (
                                      <Box
                                        alignItems="center"
                                        bgColor={
                                          isPressed
                                            ? "#3E4095"
                                            : isHovered
                                            ? "#3E4095"
                                            : "#3E4095"
                                        }
                                        style={{
                                          transform: [
                                            {
                                              scale: isPressed ? 0.96 : 1,
                                            },
                                          ],
                                        }}
                                        bg={Colors.secondary}
                                        px="50"
                                        py="1"
                                        rounded="10"
                                        shadow={3}
                                        borderWidth="1"
                                        borderColor={Colors.secondary}
                                      >
                                        <Text
                                          color={Colors.onPrimary}
                                          fontWeight="medium"
                                          fontSize="sm"
                                        >
                                          Click Here To Download!
                                        </Text>
                                      </Box>
                                    );
                                  }}
                                </Pressable>
                              </Box>
                            </Box>
                          </Box>

                          <Box w="80" pt="10">
                            <Text
                              bold
                              fontSize="xl"
                              color={Colors.primary}
                              underline
                            >
                              State Hoilday List :
                            </Text>
                            <Box
                              w="80"
                              bg={Colors.onPrimary}
                              p="4"
                              rounded={10}
                              mt="5"
                              borderColor="#ccc"
                              borderWidth="1"
                              style={styles.shadow}
                            >
                              <Text bold fontSize="md" color={Colors.secondary}>
                                Andaman and Nicobar
                              </Text>
                              <Box pt="5">
                                <Pressable
                                  onPress={() => navigation.navigate("Home")}
                                >
                                  {({ isHovered, isPressed }) => {
                                    return (
                                      <Box
                                        alignItems="center"
                                        bgColor={
                                          isPressed
                                            ? "#3E4095"
                                            : isHovered
                                            ? "#3E4095"
                                            : "#3E4095"
                                        }
                                        style={{
                                          transform: [
                                            {
                                              scale: isPressed ? 0.96 : 1,
                                            },
                                          ],
                                        }}
                                        bg={Colors.secondary}
                                        px="50"
                                        py="1"
                                        rounded="10"
                                        shadow={3}
                                        borderWidth="1"
                                        borderColor={Colors.secondary}
                                      >
                                        <Text
                                          color={Colors.onPrimary}
                                          fontWeight="medium"
                                          fontSize="sm"
                                        >
                                          Click Here To Download!
                                        </Text>
                                      </Box>
                                    );
                                  }}
                                </Pressable>
                              </Box>
                            </Box>
                            <Box
                              w="80"
                              bg={Colors.onPrimary}
                              p="4"
                              rounded={10}
                              mt="8"
                              borderColor="#ccc"
                              borderWidth="1"
                              style={styles.shadow}
                            >
                              <Text bold fontSize="md" color={Colors.secondary}>
                                Andaman and Nicobar
                              </Text>
                              <Box pt="5">
                                <Pressable
                                  onPress={() => navigation.navigate("Home")}
                                >
                                  {({ isHovered, isPressed }) => {
                                    return (
                                      <Box
                                        alignItems="center"
                                        bgColor={
                                          isPressed
                                            ? "#3E4095"
                                            : isHovered
                                            ? "#3E4095"
                                            : "#3E4095"
                                        }
                                        style={{
                                          transform: [
                                            {
                                              scale: isPressed ? 0.96 : 1,
                                            },
                                          ],
                                        }}
                                        bg={Colors.secondary}
                                        px="50"
                                        py="1"
                                        rounded="10"
                                        shadow={3}
                                        borderWidth="1"
                                        borderColor={Colors.secondary}
                                      >
                                        <Text
                                          color={Colors.onPrimary}
                                          fontWeight="medium"
                                          fontSize="sm"
                                        >
                                          Click Here To Download!
                                        </Text>
                                      </Box>
                                    );
                                  }}
                                </Pressable>
                              </Box>
                            </Box>
                            <Box
                              w="80"
                              bg={Colors.onPrimary}
                              p="4"
                              rounded={10}
                              mt="8"
                              borderColor="#ccc"
                              borderWidth="1"
                              style={styles.shadow}
                            >
                              <Text bold fontSize="md" color={Colors.secondary}>
                                Andaman and Nicobar
                              </Text>
                              <Box pt="5">
                                <Pressable
                                  onPress={() => navigation.navigate("Home")}
                                >
                                  {({ isHovered, isPressed }) => {
                                    return (
                                      <Box
                                        alignItems="center"
                                        bgColor={
                                          isPressed
                                            ? "#3E4095"
                                            : isHovered
                                            ? "#3E4095"
                                            : "#3E4095"
                                        }
                                        style={{
                                          transform: [
                                            {
                                              scale: isPressed ? 0.96 : 1,
                                            },
                                          ],
                                        }}
                                        bg={Colors.secondary}
                                        px="50"
                                        py="1"
                                        rounded="10"
                                        shadow={3}
                                        borderWidth="1"
                                        borderColor={Colors.secondary}
                                      >
                                        <Text
                                          color={Colors.onPrimary}
                                          fontWeight="medium"
                                          fontSize="sm"
                                        >
                                          Click Here To Download!
                                        </Text>
                                      </Box>
                                    );
                                  }}
                                </Pressable>
                              </Box>
                            </Box>
                            <Box
                              w="80"
                              bg={Colors.onPrimary}
                              p="4"
                              rounded={10}
                              mt="8"
                              borderColor="#ccc"
                              borderWidth="1"
                              style={styles.shadow}
                            >
                              <Text bold fontSize="md" color={Colors.secondary}>
                                Andaman and Nicobar
                              </Text>
                              <Box pt="5">
                                <Pressable
                                  onPress={() => navigation.navigate("Home")}
                                >
                                  {({ isHovered, isPressed }) => {
                                    return (
                                      <Box
                                        alignItems="center"
                                        bgColor={
                                          isPressed
                                            ? "#3E4095"
                                            : isHovered
                                            ? "#3E4095"
                                            : "#3E4095"
                                        }
                                        style={{
                                          transform: [
                                            {
                                              scale: isPressed ? 0.96 : 1,
                                            },
                                          ],
                                        }}
                                        bg={Colors.secondary}
                                        px="50"
                                        py="1"
                                        rounded="10"
                                        shadow={3}
                                        borderWidth="1"
                                        borderColor={Colors.secondary}
                                      >
                                        <Text
                                          color={Colors.onPrimary}
                                          fontWeight="medium"
                                          fontSize="sm"
                                        >
                                          Click Here To Download!
                                        </Text>
                                      </Box>
                                    );
                                  }}
                                </Pressable>
                              </Box>
                            </Box>
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
      <Box>
        <Text
          style={styles.text2}
          color={Colors.onPrimary}
          textAlign="center"
          w={90}
        >
          Holiday List
        </Text>
      </Box>
    </VStack>
  );
};

export default HolidayListScreen;

const styles = StyleSheet.create({
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
    fontSize: 14,
    top: -25,
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
