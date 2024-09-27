import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Button, TouchableOpacity, Text } from "react-native";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import NovaAula from "./pages/novaAula";
import TelaPrincipal from "./pages/TelaPrincipal";
import Exemplo from "./pages/Exemplo";
import ListaAula from "./pages/ListaAula";
import Disponibilidade from "./pages/Disponibilidade";
import RelatorioAula from "./pages/RelatorioAula";
import { AulaProvider } from "./components/AulaContext";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AulaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#3A4D6A",
              height: 100,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
            headerRight: () => (
              <Ionicons name="person" size={24} color="white" />
            ),
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tela Principal" component={TelaPrincipal} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Nova Aula" component={NovaAula} />
          <Stack.Screen name="Exemplo" component={Exemplo} />
          <Stack.Screen name="Lista das Aulas" component={ListaAula} />
          <Stack.Screen name="Configurar Disponibilidade" component={Disponibilidade} />
          <Stack.Screen name="Relatorio de Aulas" component={RelatorioAula} />
        </Stack.Navigator>
      </NavigationContainer>
    </AulaProvider>
  );
}
