import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigatorParamList } from "./types";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import Colors from "../../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import WelcomeScreen from "../auth/WelcomeScreen";
import OnBoarding from "../auth/OnBoarding";
import LoginScreen from "../auth/LoginScreen";
import RegisterScreen from "../auth/RegisterScreen";
import ComplianceScreen from "../screens/ComplianceScreen";
import ComplianceNotScreen from "../screens/ComplianceNotScreen";
import ServicesScreen from "../screens/ServicesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MinWageScreen from "../screens/MinWageScreen";
import MinWage from "../screens/Backend";
import HolidayListScreen from "../screens/HolidayListScreen";
import BareActScreen from "../screens/BareActScreen";
import AbstractActScreen from "../screens/AbstractActScreen";
import CaseLawScreen from "../screens/CaseLawScreen";
import GovAddressScreen from "../screens/GovAddressScreen";
import NewsLetterScreen from "../screens/NewsLetterScreen";
import CaseStudyScreen from "../screens/CaseStudyScreen";
import AdminScreen from "../screens/AdminScreen";

import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Pressable,
  Avatar,
  Text,
  Actionsheet,
  useDisclose,
  Icon,
  Image,
} from "native-base";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <HomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerBackVisible: true,
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="OnBoarding"
        component={OnBoarding}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerTintColor: Colors.primary,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          title: "WeChecked",
          headerTitleStyle: {
            fontWeight: "300",
            fontSize: 22,
          },
          headerRight: () => (
            <Box>
              <Pressable onPress={onOpen}>
                <Avatar
                  bg={Colors.primary}
                  alignSelf="flex-end"
                  size="sm"
                  w="10"
                  h="10"
                  mr="3"
                  mt="4"
                  source={require("../../assets/profile.jpg")}
                >
                  RS
                </Avatar>
                <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
                  <Actionsheet.Content bg={Colors.text}>
                    <Box
                      bg={Colors.text}
                      w="100%"
                      h={120}
                      px={4}
                      justifyContent="center"
                    >
                      <Box
                        bg={Colors.text}
                        justifyContent="flex-start"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Avatar
                          bg={Colors.text}
                          size="xl"
                          mr="2"
                          source={require("../../assets/profile.jpg")}
                        >
                          RS
                        </Avatar>
                        <Box
                          justifyContent="flex-start"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Text bold fontSize="2xl" color={Colors.onPrimary}>
                            Hello !!
                          </Text>
                          <Text
                            pl="5"
                            bold
                            fontSize="xl"
                            color={Colors.onPrimary}
                          >
                            User Name
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Actionsheet.Item
                      bg={Colors.text}
                      startIcon={
                        <Icon
                          as={Ionicons}
                          size="6"
                          name="mail-open-outline"
                          color={Colors.onPrimary}
                        />
                      }
                    >
                      <Text color={Colors.onPrimary} fontSize="md">
                        enquiry@karmamgmt.com
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      bg={Colors.text}
                      startIcon={
                        <Icon
                          as={Ionicons}
                          name="call-outline"
                          size="6"
                          color={Colors.onPrimary}
                        />
                      }
                    >
                      <Text color={Colors.onPrimary} fontSize="md">
                        8080 8080
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      onPress={() => navigation.navigate("Profile")}
                      bg={Colors.text}
                      startIcon={
                        <Icon
                          as={Ionicons}
                          size="6"
                          name="pencil-outline"
                          color={Colors.onPrimary}
                        />
                      }
                    >
                      <Text color={Colors.onPrimary} fontSize="md">
                        Edit Porfile
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      bg={Colors.text}
                      startIcon={
                        <Icon
                          as={Ionicons}
                          size="6"
                          name="chatbox-ellipses-outline"
                          color={Colors.onPrimary}
                        />
                      }
                    >
                      <Text color={Colors.onPrimary} fontSize="md">
                        Feedback
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      bg={Colors.text}
                      startIcon={
                        <Icon
                          as={Ionicons}
                          size="6"
                          name="exit-outline"
                          color={Colors.onPrimary}
                        />
                      }
                    >
                      <Text color={Colors.onPrimary} fontSize="md">
                        Logout
                      </Text>
                    </Actionsheet.Item>
                  </Actionsheet.Content>
                </Actionsheet>
              </Pressable>
            </Box>
          ),
          headerLeft: () => (
            <Box pt={2}>
              <Image
                source={require("../../assets/icon.png")}
                size="sm"
                alt="Logo"
              />
            </Box>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{ title: "Compliance" }}
        name="Compliance"
        component={ComplianceScreen}
      />
      <HomeStack.Screen
        options={{ title: "Compliance" }}
        name="ComplianceNot"
        component={ComplianceNotScreen}
      />
      <HomeStack.Screen
        options={{ title: "Minimum Wages" }}
        name="MinWage"
        component={MinWageScreen}
      />
      <HomeStack.Screen
        options={{ title: "Minimum Wages" }}
        name="Min"
        component={MinWage}
      />
      <HomeStack.Screen
        options={{ title: "Holiday List" }}
        name="Holiday"
        component={HolidayListScreen}
      />
      <HomeStack.Screen
        options={{ title: "Bare Acts" }}
        name="BareAct"
        component={BareActScreen}
      />
      <HomeStack.Screen
        options={{ title: "Abstracts Acts" }}
        name="Abstracts"
        component={AbstractActScreen}
      />
      <HomeStack.Screen
        options={{ title: "Case Laws" }}
        name="CaseLaw"
        component={CaseLawScreen}
      />
      <HomeStack.Screen
        options={{ title: "Government Address" }}
        name="GovAddress"
        component={GovAddressScreen}
      />
      <HomeStack.Screen
        options={{ title: "News Letter" }}
        name="NewsLetter"
        component={NewsLetterScreen}
      />
      <HomeStack.Screen
        options={{ title: "Case Study" }}
        name="CaseStudy"
        component={CaseStudyScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.onPrimary,
          // headerShown: false,
        }}
        name="Services"
        component={ServicesScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.primary,
        }}
        name="Admin"
        component={AdminScreen}
      />
      <HomeStack.Screen
        options={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTintColor: Colors.onPrimary,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
