import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../navigation/types";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import DonutChat from "../../components/DonutChart";
import Animated, {
  FadeInUp,
  FadeOutDown,
  Layout,
} from "react-native-reanimated";
import {
  Box,
  Text,
  FormControl,
  Select,
  HStack,
  VStack,
  Center,
  useDisclose,
  Input,
  Pressable,
  ScrollView,
  Button,
  Image,
  Icon,
  Avatar,
  CheckIcon,
  Divider,
  Actionsheet,
  View,
  ZStack,
  Flex,
} from "native-base";
import CarouselImages from "../../components/CarouselImages";
import Testimonial from "../../components/Testimonial";
import MinWageScreen from "./MinWageScreen";
import ComplianceScreens from "./ComplianceScreen";
import BareActScreen from "./BareActScreen";
import AbstractActScreen from "./AbstractActScreen";
import HolidayListScreen from "./HolidayListScreen";
import ComplianceNotScreen from "./ComplianceNotScreen";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <Box flex="1" maxWidth="100%" bg={Colors.background}>
      <Center mb={16}>
        <ScrollView>
          <Box safeArea>
            <Box pl="5" mt="-7" alignItems="flex-start" flexDirection="column">
              <Text style={styles.text1} fontSize="xl" color={Colors.primary}>
                Welcome,
              </Text>
              <Text style={styles.text} fontSize="4xl" color={Colors.onPrimary}>
                User Name
              </Text>
            </Box>
            <Box pb={5} style={styles.shadow} mt="3">
              <Box style={styles.shadow}>
                <CarouselImages />
              </Box>
            </Box>
          </Box>
          <Box alignItems="center">
            <HStack space={48} pt={1}>
              <Text style={styles.text3} fontSize="2xl">
                Services
              </Text>
              <Text
                style={styles.text}
                fontSize="sm"
                pt={1}
                onPress={() => navigation.navigate("Services")}
              >
                View All
              </Text>
            </HStack>
            {/* <Divider
              mt={1}
              my="1"
              w="80"
              h="0.2"
              _light={{ bg: Colors.onPrimary }}
              _dark={{ bg: Colors.text }}
            /> */}
            <VStack pt="5">
              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                space={3}
                pb="3"
              >
                <ComplianceScreens />
                <MinWageScreen />
                <ComplianceNotScreen />
              </HStack>
              <HStack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                space={3}
                pb="5"
              >
                <BareActScreen />
                <AbstractActScreen />
                <HolidayListScreen />
              </HStack>
            </VStack>
          </Box>
          <Box alignItems="center" bg={Colors.background}>
            <Divider
              my="1"
              w="80"
              h="0.3"
              _light={{ bg: Colors.onPrimary }}
              _dark={{ bg: "muted.50" }}
            />
          </Box>
          <Box
            alignItems="center"
            style={{
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              elevation: 13,
            }}
            pb="5"
            bg={Colors.text}
            m={5}
            rounded={10}
          >
            <HStack space={48} pt={5} pb={5}>
              <Text style={styles.text3} fontSize="xl">
                Number of Audits Done
              </Text>
            </HStack>
            <DonutChat />
          </Box>
          {/* <Testimonial /> */}
        </ScrollView>
      </Center>
    </Box>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  text: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.9,
  },
  text1: {
    fontWeight: "300",
    color: "#ffffff",
    letterSpacing: 0.8,
  },
  text2: {
    fontWeight: "300",
    color: Colors.onPrimary,
    letterSpacing: 0.8,
    fontSize: 13,
    bottom: -10,
  },
  text3: {
    fontWeight: "300",
    color: Colors.primary,
    letterSpacing: 0.8,
    textAlign: "left",
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
