import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const Timetable=()=>{
    return(
        
        <Tab.Navigator 
        tabBarOptions={{
          activeTintColor:"white",
          inactiveTintColor:"white",
          style:{
            backgroundColor:"#286eee",        
          },
          labelStyle:{
            fontSize:12,
            fontWeight:400,
         },
          indicatorStyle:{
            height:9,
            backgroundColor:"#8A12A1"
          },
          tabStyle:{
            padding:10
                  }
        }}
        >
          <Tab.Screen name="MON" component={Mon}/>
          <Tab.Screen name="TUES" component={Tue}/>
          <Tab.Screen name="WED" component={Wed}/>
          <Tab.Screen name="THU" component={Thu}/>
          <Tab.Screen name="FRI" component={Fri}/>
        </Tab.Navigator>  
    
      );
    }
    function Mon() {
      return (
        <View style={styles.container2}>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Software Requirement Engieering(CSE305)</Text>
          <Text style={styles.boxR1}>08:00 to 9:30</Text>
          <Text style={styles.boxR3}>Neeli Khan</Text>
          <Text style={styles.boxR4}>Z108(M)-BSE-5B</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Operating Systems(CSC322)</Text>
          <Text style={styles.boxR1}>9:40 to 11:10</Text>
          <Text style={styles.boxR3}>Syed Shahab Zarin</Text>
          <Text style={styles.boxR4}>Z204(M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Mobile Application Development(CSC303)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Muhammad Javed Raza</Text>
          <Text style={styles.boxR4}>K105(M)-BSE-5C</Text>
          </View>
        </View>
        
      );
    }
    function Tue() {
      return (
        <View style={styles.container2}>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Software Requirement Engieering(CSE305)</Text>
          <Text style={styles.boxR1}>08:00 to 9:30</Text>
          <Text style={styles.boxR3}>Neeli Khan</Text>
          <Text style={styles.boxR4}>Z109(M)-BSE-5B</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Operating Systems(CSC322)</Text>
          <Text style={styles.boxR1}>9:40 to 11:10</Text>
          <Text style={styles.boxR3}>Syed Shahab Zarin</Text>
          <Text style={styles.boxR4}>A216(60M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Data Communication and Computer Networks(CSC339)</Text>
          <Text style={styles.boxR1}>13:40 to 15:10</Text>
          <Text style={styles.boxR3}>Dr. Saad Mustafa</Text>
          <Text style={styles.boxR4}>Z109(M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Mobile Application Development(CSC303)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Muhammad Javed Raza</Text>
          <Text style={styles.boxR4}>Z219(M)-BSE-5C</Text>
          </View>
        </View>
      );
    }
    function Wed() {
      return (
        <View style={styles.container2}>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Data Communication and Computer Networks(CSC339)</Text>
          <Text style={styles.boxR1}>13:40 to 15:10</Text>
          <Text style={styles.boxR3}>Dr. Saad Mustafa</Text>
          <Text style={styles.boxR4}>Z210(M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Mobile Application Development(CSC303)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Muhammad Javed Raza</Text>
          <Text style={styles.boxR4}>Computer LAB 8-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Mobile Application Development(CSC303)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Muhammad Javed Raza</Text>
          <Text style={styles.boxR4}>Computer LAB 8-BSE-5C</Text>
          </View>
        </View>
      );
    }
    function Thu() {
      return (
        <View style={styles.container2}>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Software Quality Engieering(CSE302)</Text>
          <Text style={styles.boxR1}>09:40 to 11:10</Text>
          <Text style={styles.boxR3}>Rabia Saleem</Text>
          <Text style={styles.boxR4}>Z214(M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Data Communication and Computer Networks(CSC339)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Dr. Saad Mustafa</Text>
          <Text style={styles.boxR4}>Cisco Lab-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Data Communication and Computer Networks(CSC339)</Text>
          <Text style={styles.boxR1}>13:40 to 15:10</Text>
          <Text style={styles.boxR3}>Dr. Saad Mustafa</Text>
          <Text style={styles.boxR4}>Cisco Lab-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Differential Equations(MTH242)</Text>
          <Text style={styles.boxR1}>17:00 to 18:30</Text>
          <Text style={styles.boxR3}>Dr. Syed Zulfiqa Ali Zaidi</Text>
          <Text style={styles.boxR4}>Z210(M)-BSE-5C</Text>
          </View>
        </View>
      );
    }
    function Fri() {
      return (
        <View style={styles.container2}>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Operating Systems(CSC322)</Text>
          <Text style={styles.boxR1}>8:00 to 9:43</Text>
          <Text style={styles.boxR3}>Syed Shahab Zarin</Text>
          <Text style={styles.boxR4}>Computer LAB 10-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Operating Systems(CSC322)</Text>
          <Text style={styles.boxR1}>9:40 to 11:10</Text>
          <Text style={styles.boxR3}>Syed Shahab Zarin</Text>
          <Text style={styles.boxR4}>Computer LAB 10-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Differential Equations(MTH242)</Text>
          <Text style={styles.boxR1}>11:20 to 12:50</Text>
          <Text style={styles.boxR3}>Dr. Syed Zulfiqa Ali Zaidi</Text>
          <Text style={styles.boxR4}>Z107(M)-BSE-5C</Text>
          </View>
          <View style={styles.timetableBoxes}>
          <Text style={styles.boxR1}>Software Quality Engieering(CSE302)</Text>
          <Text style={styles.boxR1}>13:40 to 15:10</Text>
          <Text style={styles.boxR3}>Rabia Saleem</Text>
          <Text style={styles.boxR4}>Z219(M)-BSE-5C</Text>
          </View>
        </View>
      );
    }
    const styles = StyleSheet.create({
      container2:{
        flex: 1,
        backgroundColor: '#286eee',
        alignItems:"center",
        paddingTop:11,          
      },
      timetableBoxes:{
        backgroundColor:"#fff",
        width:"85%",
        alignItems:"center",
        marginTop:3,    
        paddingTop:5,
        paddingBottom:5,
        borderWidth:1,
        borderColor:"#8A12A1"
      },
      boxR1:{
        color: '#1baffd',
        lineHeight: 18,
        fontSize: 13,
        // fontWeight: 600,    
      },
      boxR3:{
        color:"#8A12A1",
        lineHeight: 18,
        fontSize: 12,
        // fontWeight: 600,  
      },
      boxR4:{
        color:"#abb1a0",
        lineHeight: 18,
        fontSize: 12,
        // fontWeight: 600,
      }
    })


export default Timetable;