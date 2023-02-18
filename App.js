import { Text, SafeAreaView } from "react-native";
import { NativeBaseProvider, Box, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView>
          <Text>ChatApp</Text>
          <Button>Click</Button>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
