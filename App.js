import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,Text} from 'react-native';

const Feed = () => {
  return (
    <View>
      <Text>Feeds</Text>
    </View>
  );
}
const Article = () => {
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
 <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
   
  );
}
export default App;