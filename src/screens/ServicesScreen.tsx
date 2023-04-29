import Colors from "../../constants/Colors";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  Pressable,
  ScrollView,
  Image,
  Avatar,
  Icon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MinWageScreen from "./MinWageScreen";
import ComplianceScreens from "./ComplianceScreen";
import BareActScreen from "./BareActScreen";
import AbstractActScreen from "./AbstractActScreen";
import HolidayListScreen from "./HolidayListScreen";
import CaseLawScreen from "./CaseLawScreen";
import GovAddressScreen from "./GovAddressScreen";
import CaseStudyScreen from "./CaseStudyScreen";
import NewsLetterScreen from "./NewsLetterScreen";
import BlogScreen from "./BlogScreen";
import FAQScreen from "./FAQScreen";
import ComplianceNotScreen from "./ComplianceNotScreen";

const ServicesScreen = () => {
  return (
    <ScrollView bg={Colors.background}>
      <Box alignItems="center" mb="10" mt={5}>
        <VStack justifyContent="center">
          <HStack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            space={5}
            pb="7"
          >
            <ComplianceScreens />
            <MinWageScreen />
            <ComplianceNotScreen />
          </HStack>
          <HStack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            space={5}
            pb="7"
          >
            <BareActScreen />
            <AbstractActScreen />
            <HolidayListScreen />
          </HStack>
          <HStack
            space={5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            pb="7"
          >
            <CaseLawScreen />
            <NewsLetterScreen />
            <GovAddressScreen />
          </HStack>
          <HStack
            space={5}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <BlogScreen />
            <FAQScreen />
            <CaseStudyScreen />
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default ServicesScreen;
