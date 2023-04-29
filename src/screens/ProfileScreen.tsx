import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import React from "react";
import {
  Box,
  Text,
  Stack,
  HStack,
  VStack,
  Center,
  Pressable,
  Input,
  ScrollView,
  Image,
  Avatar,
  Icon,
} from "native-base";
import Colors from "../../constants/Colors";

const ProfileScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [hidePasswordConf, setHidePasswordConf] = React.useState(true);

  return (
    <ScrollView bg={Colors.background}>
      <Box alignItems="center" mb="10" mt={5}>
        <VStack justifyContent="center">
          <Center>
            <Avatar
              bg={Colors.text}
              size="2xl"
              mr="2"
              source={require("../../assets/profile.jpg")}
            >
              RS
            </Avatar>

            <HStack justifyContent="space-between" mt="5">
              <Box alignSelf="center" justifyContent="space-between">
                <Box w="100%">
                  <Stack space={4} w="100%" alignItems="center">
                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={name}
                      onChangeText={setName}
                      variant="underlined"
                      borderColor={Colors.primary}
                      color={Colors.onPrimary}
                      borderRadius="10"
                      textContentType="username"
                      blurOnSubmit
                      autoCapitalize="words"
                      autoComplete="username"
                      keyboardType="default"
                      placeholder="Name"
                      style={styles.text}
                      aria-required="true"
                      focusOutlineColor={Colors.onPrimary}
                    />
                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={email}
                      onChangeText={setEmail}
                      variant="underlined"
                      borderColor={Colors.primary}
                      color={Colors.onPrimary}
                      borderRadius="10"
                      cursorColor={Colors.primary}
                      autoCapitalize="none"
                      textContentType="emailAddress"
                      blurOnSubmit
                      autoComplete="email"
                      keyboardType="email-address"
                      placeholder="Email"
                      style={styles.text}
                      focusOutlineColor={Colors.onPrimary}
                    />

                    <Input
                      fontSize="sm"
                      px="3"
                      w={{ base: "100%", md: "100%" }}
                      value={mobile}
                      color={Colors.onPrimary}
                      focusOutlineColor={Colors.onPrimary}
                      onChangeText={(text) => setMobile(text)}
                      // InputLeftElement={
                      //   <Icon as={<Ionicons name="person" />} size={5} ml="2" color="muted.400" />
                      // }
                      variant="underlined"
                      borderColor={Colors.primary}
                      borderRadius="10"
                      maxLength={10}
                      autoComplete="username"
                      keyboardType="number-pad"
                      placeholder="Contact No."
                      style={styles.text}
                    />
                  </Stack>
                </Box>
                <Box alignItems="center" mt="5">
                  <Pressable mt="5">
                    {({ isHovered, isPressed }) => {
                      return (
                        <Box
                          alignItems="center"
                          w="300"
                          bgColor={
                            isPressed
                              ? "#e2e9fe"
                              : isHovered
                              ? "#e2e9f"
                              : "#e2e9f"
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
                          px="50"
                          py="1"
                          rounded="50"
                          borderWidth="1"
                          borderColor={Colors.text}
                        >
                          <Text
                            style={styles.text}
                            color={Colors.onPrimary}
                            fontWeight="medium"
                            fontSize="xl"
                          >
                            Edit Profile
                          </Text>
                        </Box>
                      );
                    }}
                  </Pressable>
                </Box>
              </Box>
            </HStack>
          </Center>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    letterSpacing: 0.8,
  },
});
