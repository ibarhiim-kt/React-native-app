import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const Marks=()=>{
    return(
        <View style={styles.container3}>
        <Text style={styles.classHead}>Marks</Text>
          <TouchableOpacity style={styles.classTouch} >
        
          <View>
          <Text style={styles.classR1}>1. Mobile Application Development</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Muhammad Javed Raza</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 55</Text>
          <Text style={styles.classR3}>Present: 46</Text>
          <Text style={styles.classR3}>Absents: 9</Text>
          </View>
    
          </TouchableOpacity>
           <TouchableOpacity style={styles.classTouch}>
    
          <View>
          <Text style={styles.classR1}>2. Data Communication and Computer Networks</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Dr. Saad Mustafa</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 56</Text>
          <Text style={styles.classR3}>Present: 48</Text>
          <Text style={styles.classR3}>Absents: 8</Text>
          </View>
    
          </TouchableOpacity>
           <TouchableOpacity style={styles.classTouch}>
    
          <View>
          <Text style={styles.classR1}>3. Software Quality Engieering</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Rabia Saleem</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 28</Text>
          <Text style={styles.classR3}>Present: 24</Text>
          <Text style={styles.classR3}>Absents: 4</Text>
          </View>
    
          </TouchableOpacity>
           <TouchableOpacity style={styles.classTouch}>
    
          <View>
          <Text style={styles.classR1}>4. Differential Equations</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Dr. Syed Zulfiqar Ali Zaidi</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 26</Text>
          <Text style={styles.classR3}>Present: 22</Text>
          <Text style={styles.classR3}>Absents: 4</Text>
          </View>
    
          </TouchableOpacity>
           <TouchableOpacity style={styles.classTouch}>
    
          <View>
          <Text style={styles.classR1}>5. Software Requirement Engieering</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Neeli Khan</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 29</Text>
          <Text style={styles.classR3}>Present: 20</Text>
          <Text style={styles.classR3}>Absents: 9</Text>
          </View>
    
          </TouchableOpacity>
           <TouchableOpacity style={styles.classTouch}>
    
          <View>
          <Text style={styles.classR1}>6. Operating Systems</Text>
          </View>
          <View style={styles.classR2}>
          <Text style={styles.classR2}>BSE-5C</Text>
          <Text style={styles.classR2}>Syed Shahab Zarin</Text>
          </View>
          <View style={styles.classR3}>
          <Text style={styles.classR3}>Total Classes: 53</Text>
          <Text style={styles.classR3}>Present: 36</Text>
          <Text style={styles.classR3}>Absents: 17</Text>
          </View>
    
          </TouchableOpacity>
        </View>
      
      );
    }
    const styles = StyleSheet.create({
      container3:{    
          backgroundColor:"#286eee",
          height:"100%",
          alignItems:"center"
        },
        classHead:{
          color:"white",
          fontSize:18,
        //   fontWeight:700,
          margin:10
        },
        classTouch:{
          backgroundColor:"#fff",
          padding:3,
          marginBottom:2,
          width:"100%",
          borderWidth:1,
          borderColor:"#8A12A1",
          height:62,
          paddingBottom:4
        },
        classR1:{
        
        justifyContent:"space-around",
        color: '#1baffd',
        lineHeight: 16,
        fontSize: 12,
        // fontWeight: 600,
        paddingLeft:4
        },
        classR2:{
        flexDirection:"row",
        justifyContent:"space-between",
        color: '#abb1a0',
        lineHeight: 16,
        fontSize: 11,
        // fontWeight: 600,
        paddingLeft:4,
        paddingRight:25
        },
        
        classR3:{
        flexDirection:"row",
        justifyContent:"space-between",
        color: '#1baffd',
        lineHeight: 16,
        fontSize: 12,
        // fontWeight: 600,
        paddingLeft:4,
        paddingRight:25
        }
      });
export default Marks;