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
const Drawer = createDrawerNavigator();

const Dscreen = () =>{

    return(
        
    <Drawer.Navigator>
        <Drawer.Screen name="CUOnline Course Portal"
         component={Home}
         options={{      
          headerStyle: {            
            backgroundColor: '#8A12A1',
            height: 75,
          },
          headerTintColor: '#fff',               
        }}
          />
        <Drawer.Screen name="ClassProceedings"
         component={ClassProceedings}
         options={{      
          headerStyle: {            
            backgroundColor: '#8A12A1',
            height: 75,
          },
          headerTintColor: '#fff',               
        }}
         />
        <Drawer.Screen name="Marks"
         component={Marks}
         options={{      
          headerStyle: {            
            backgroundColor: '#8A12A1',
            height: 75,
          },
          headerTintColor: '#fff',               
        }}
         />
        <Drawer.Screen name="Timetable"
         component={Timetable}
         options={{
      
          headerStyle: {            
            backgroundColor: '#8A12A1',
            height: 75,
          },
          headerTintColor: '#fff',
          headerTitleStyle: "fsd",
             
        }}
         />
        <Drawer.Screen name="CoursePortal" component={CoursePortal}/>
        <Drawer.Screen name="Result" component={Result}/>
      </Drawer.Navigator> 
            
   
    )
}
export default Dscreen;