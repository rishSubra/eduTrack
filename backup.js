// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import GridImageView from 'react-native-grid-image-viewer';
// import { Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as ImagePicker from 'expo-image-picker';
// import { useState, useEffect } from 'react';
// import { Image, Platform } from 'react-native';

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function PhotoScreen({ navigation }){
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//      <View style={styles.background}>
//       <Text style={styles.headline_text}>Grid View Images</Text>
//       <Text style={styles.explore_text}>
//         Click on an image to view in full screen mode
//       </Text>

//       {/* Basic Usage */}
//       <GridImageView data={['/Users/rishabsubramaniyan/Desktop/Screenshot 2023-01-28 at 2.41.49 PM.png', '/Users/rishabsubramaniyan/Desktop/Screenshot 2023-01-28 at 2.41.49 PM.png', '/Users/rishabsubramaniyan/Desktop/Screenshot 2023-01-28 at 2.41.49 PM.png', '/Users/rishabsubramaniyan/Desktop/Screenshot 2023-01-28 at 2.41.49 PM.png']} />
//      </View>
//     </View>
//   );
// };

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

// const PhotoStack = createNativeStackNavigator();

// function PhotoStackScreen() {
//   return (
//     <PhotoStack.Navigator>
//       <PhotoStack.Screen name="Photos" component={PhotoScreen} />
      
//     </PhotoStack.Navigator>
//   );
// }
// const CalenderStack = createNativeStackNavigator();
// function CalenderStackScreen() {
//   return (
//     <CalenderStack.Navigator>
//       <HomeStack.Screen name="Calender" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </CalenderStack.Navigator>
//   );
// }

// const AttendanceStack = createNativeStackNavigator();
// function AttendanceStackScreen() {
//   return (
//     <AttendanceStack.Navigator>
//       <HomeStack.Screen name="Attendance" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </AttendanceStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();



// export default function ImagePickerExample() {


//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Attendence" component={AttendanceStackScreen} />
//         <Tab.Screen name="Photos" component={PhotoStackScreen} />
//         <Tab.Screen name="Calender" component={CalenderStackScreen} />
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
        
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   headline_text: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: -50,
//     marginLeft: 120,
//   },
//   explore_text: {
//     marginTop: 5,
//     marginBottom: 10,
//     color: 'white',
//     marginLeft: 20,
//     fontSize: 12,
//     fontWeight: '600',
//   },
// });


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal, TextInput, Picker } from 'react-native';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('10:00');
  const [eventDescription, setEventDescription] = useState('');

  const handleAddEvent = (day) => {
    setSelectedDate(day);
    setModalVisible(true);
  };

  const handleSaveEvent = () => {
    setEvents({
      ...events,
      [selectedDate]: {
        startTime,
        endTime,
        eventDescription,
      },
    });
    setModalVisible(false);
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text>{'<'}</Text>
        </TouchableOpacity>
        <Text>February 2023</Text>
        <TouchableOpacity>
          <Text>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDays = () => {
    return (
      <View style={styles.daysContainer}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <View key={day} style={styles.dayHeaderContainer}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}
        {[null, ...Array(30)].map((day, index) => {
          const eventDate = index + 1;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayContainer,
                day === null ? styles.emptyDay : null,
              ]}
              onPress={() => handleAddEvent(index + 1)}
            >
              <Text>{index + 1}</Text>
              {events[eventDate] && (
                <View style={styles.eventIndicator} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDays()}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.textInput}
            value={startTime}
            onChangeText={setStartTime}
            placeholder="Start Time"
          />
          <TextInput
            style={styles.textInput}
            value={endTime}
            onChangeText={setEndTime}
            placeholder="End Time"
          />
                    <TextInput
            style={styles.textInput}
            value={eventDescription}
            onChangeText={setEventDescription}
            placeholder="Event Description"
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveEvent}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#ccc',
  },
  daysContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
  },
  dayHeaderContainer: {
    width: '14%',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ccc',
  },
  dayHeaderText: {
    fontWeight: 'bold',
  },
  dayContainer: {
    width: '14%',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  emptyDay: {
    backgroundColor: 'transparent',
  },
  eventIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default EventCalendar;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#ccc',
//   },
//   daysContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   dayHeaderContainer: {
//     width: '14%',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#ccc',
//   },
//   dayHeaderText: {
//     fontWeight: 'bold',
//   },
//   dayContainer: {
//     width: '14%',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   emptyDay: {
//     backgroundColor: 'transparent',
//   },
//   eventIndicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'blue',
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginVertical: 10,
//     paddingHorizontal: 10,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });

// export default EventCalendar;
