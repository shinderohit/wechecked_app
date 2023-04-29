import type {
  CompositeNavigationProp,
  RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type HomeStackNavigatorParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  OnBoarding: undefined;
  Home: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
  Compliance: { sort: "latest" | "top" } | undefined;
  ComplianceNot: undefined;
  Services: undefined;
  Profile: undefined;
  MinWage: undefined;
  Min: undefined;
  Holiday: undefined;
  BareAct: undefined;
  Abstracts: undefined;
  CaseLaw: undefined;
  GovAddress: undefined;
  NewsLetter: undefined;
  CaseStudy: undefined;
  Admin: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  HomeStack: HomeStackNavigatorParamList;
  Notification: undefined;
  Menu: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, "Profile">,
  BottomTabNavigationProp<BottomTabNavigatorParamList, "Menu">
>;
