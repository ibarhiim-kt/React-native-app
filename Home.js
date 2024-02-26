import { StyleSheet, Text, View ,Image,FlatList } from 'react-native';
const data = [
    {
      id: 1,
      fNameHead: 'Father Name',
      fName: 'Sanaullah Khan',
      courseHead: 'Total Regtd. Courses',
      courseNo: '27',
      sectionHead: 'Current Section',
      section: 'C',
      advisorHead: 'Current Advisor',
      advisor: 'Syed Shahab Zarin',
    },
  ];

const Home=()=>{
    return(
        
<View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.onlyText}>
            <Text style={styles.headerText}>   Welcome</Text>
            <Text style={styles.headerText}>Ibrahim Khan</Text>
          </View>
          <Image
            style={styles.headerImage}
            source="./assets/mypic.jpg"
            contentFit="cover"
          />
        </View>
  
        <View style={styles.tableContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <View style={styles.row1}>
                  <Text style={styles.fonts}>{item.fNameHead}</Text>
                  <Text style={styles.fonts1}>{item.fName}</Text>
                </View>
                <View style={styles.row2}>
                  <Text style={styles.fonts}>{item.courseHead}</Text>
                  <Text style={styles.fonts1}>{item.courseNo}</Text>
                </View>
                <View style={styles.row3}>
                  <Text style={styles.fonts}>{item.sectionHead}</Text>
                  <Text style={styles.fonts1}>{item.section}</Text>
                </View>
                <View style={styles.row4}>
                  <Text style={styles.fonts}>{item.advisorHead}</Text>
                  <Text style={styles.fonts1}>{item.advisor}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <Text style={styles.attendanceContent}>
            Attendance Percentage Course Wise
          </Text>
          <Image
            source="attendance chart.jpeg"
            style={styles.attendanceChart}
            contentFit="cover"
          />
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      // backgroundColor: "yellow",
      marginTop: 90,
      height: 75,
    },
    onlyText: {
      marginTop: 25,
    },
    headerText: {
      color: '#1baffd',
      lineHeight: 14,
      fontSize: 15,
      // fontWeight: 500,
    },
    headerImage: {
      height: '100%',
      width: 80,
    //   borderRadius: '50%',
    },
    tableContainer: {
      backgroundColor: 'pink',
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#f1f0f0',
      padding: 2,
    },
    row2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 2,
    },
    row3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#f1f0f0',
      padding: 2,
    },
    row4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 2,
    },
    fonts: {
      color: '#171696',
      lineHeight: 16,
      fontSize: 12,
    //   fontWeight: 600,
      paddingLeft: 8,
      paddingRight: 70,
    },
    fonts1: {
      color: '#717b8e',
      lineHeight: 16,
      fontSize: 12,
      paddingLeft: 8,
      paddingRight: 70,
    },
    attendanceContent: {
      marginTop: 20,
      color: '#1baffd',
      lineHeight: 14,
      fontSize: 15,
    //   fontWeight: 500,
      textAlign: 'center',
    },
    attendanceChart: {
      height: '100%',
      width: '100%',
      alignItems:"center",
      
    }
});
export default Home;