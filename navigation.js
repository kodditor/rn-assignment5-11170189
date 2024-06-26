import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import HomePage from './pages/home.page';
import SettingsPage from './pages/settings.page';
import { useContext } from 'react';
import { ThemeContext } from './theme-provider';
import { faCog, faHouse, faPieChart, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native';

export default function NavigationProvider(){
    
  const Tabs = createBottomTabNavigator();

  const { themeContext } = useContext(ThemeContext)
 
    return (
      <NavigationContainer>
        <Tabs.Navigator 
            screenOptions= { ( { route }) => ({
              tabBarActiveTintColor: 'blue',
              headerShown: false,
              tabBarInactiveTintColor: 'grey',
              tabBarActiveBackgroundColor: themeContext.secondaryColor,
              tabBarStyle: {
                backgroundColor: themeContext.secondaryColor,
                paddingTop: 5,
                paddingBottom: 5,
              }
            })
        }>
          <Tabs.Screen name='Home' component={HomePage} options={{ tabBarIcon: ({ color }) => ( <FontAwesomeIcon icon={faHouse} size={15} color={color} />) }} />
          <Tabs.Screen name='My Cards' component={Text} options={{ tabBarIcon: ({ color }) => ( <FontAwesomeIcon icon={faWallet} size={15} color={color} />) }} />
          <Tabs.Screen name='Statistics' component={Text} options={{ tabBarIcon: ({ color }) => ( <FontAwesomeIcon icon={faPieChart} size={15} color={color} />) }} />
          <Tabs.Screen name='Settings' component={SettingsPage} options={{ tabBarIcon: ({ color }) => ( <FontAwesomeIcon icon={faCog} size={15} color={color} />) }} />
        </Tabs.Navigator>
      </NavigationContainer>
    )
}