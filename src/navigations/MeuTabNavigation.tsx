import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';
import PublicacaoScreen from '../screens/Publicacoes';


const Tab = createBottomTabNavigator();

export function MeuTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Publicacao"
        component={PublicacaoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="airplane" size={size} color={color} />
          ),
          tabBarLabel: "Publicação",
        }}
      />
     
    </Tab.Navigator>
  );
}
