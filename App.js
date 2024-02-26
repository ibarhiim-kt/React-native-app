import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Components/Home';
import ClassProceedings from './Components/ClassProceedings';
import Marks from './Components/Marks';
import Timetable from './Components/Timetable';
import CoursePortal from './Components/CoursePortal';
import Result from './Components/Result';
import Register from './Components/Register';
import Login from './Components/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Bscreen=()=>{
  return(
  
  <Drawer.Navigator initialRouteName='bablo'>
    <Drawer.Screen name='CUOnline Course Portal' component={Home}
    options={{      
      headerStyle: {            
        backgroundColor: '#8A12A1',
        height: 75,
      },
      headerTintColor: '#fff',               
    }}
     />
    <Drawer.Screen name='ClassProceedings' component={ClassProceedings} 
    options={{      
      headerStyle: {            
        backgroundColor: '#8A12A1',
        height: 75,
      },
      headerTintColor: '#fff',               
    }}
    />
    <Drawer.Screen name='Marks' component={Marks}
    options={{      
      headerStyle: {            
        backgroundColor: '#8A12A1',
        height: 75,
      },
      headerTintColor: '#fff',               
    }}
     />
    <Drawer.Screen name='Timetable' component={Timetable} 
    options={{
      
      headerStyle: {            
        backgroundColor: '#8A12A1',
        height: 75,
      },
      headerTintColor: '#fff',
      headerTitleStyle: "fsd",
         
    }}
    />
    <Drawer.Screen name='CoursePortal' component={CoursePortal} />
    <Drawer.Screen name='Result' component={Result} />
  </Drawer.Navigator> 
  
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name='Login' component={Login}/>        
        <Stack.Screen name='Bscreen' component={Bscreen} options={{ headerShown: false }}/>
      </Stack.Navigator>     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
