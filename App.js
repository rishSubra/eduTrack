
import GridImageView from 'react-native-grid-image-viewer';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as ImagePicker from 'expo-image-picker';

import { Image, Platform } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Modal, TextInput, Switch } from 'react-native';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function CalenderScreen({ navigation }) {
  return (
    EventCalendar()
   
  );
}

function AttendanceScreen({ navigation }) {
  return (
    AttendancePage()
   
  );
}

function HomeScreen({ navigation }) {
  return (
    ProfilePage()
  
  );
}

function PhotoScreen({ navigation }) {
  const [assets, setAssets] = useState([
  ]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAssets([...assets, result.uri]);
    }
  }

  return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.background}>
          <Text style={styles.headline_text}>Grid View Images</Text>
          <Text style={styles.explore_text}>
            Click on an image to view in full screen mode
          </Text>

          {/* Display the grid of images */}
          <GridImageView data={assets} />

          {/* Add a button to allow the user to add new photos */}
          <View>
            <Button
                title="Add Photos"
                onPress={pickImage}
            />
          </View>
        </View>
      </View>
  );
};



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Settings" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}



const PhotoStack = createNativeStackNavigator();

function PhotoStackScreen() {
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen name="Photos" component={PhotoScreen} />
      
    </PhotoStack.Navigator>
  );
}
const CalenderStack = createNativeStackNavigator();
function CalenderStackScreen() {
  return (
    <CalenderStack.Navigator>
      <CalenderStack.Screen name="Calender" component={CalenderScreen} />
      
    </CalenderStack.Navigator>
  );
}

const AttendanceStack = createNativeStackNavigator();
function AttendanceStackScreen() {
  return (
    <AttendanceStack.Navigator>
      <AttendanceStack.Screen name="Attendance" component={AttendanceScreen} />
    </AttendanceStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();



export default function ImagePickerExample() {


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Calender" component={CalenderStackScreen} />
        
        <Tab.Screen name="Attendance" component={AttendanceStackScreen} />
        <Tab.Screen name="Photos" component={PhotoStackScreen} />
        <Tab.Screen name="Settings" component={HomeStackScreen} />
        
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -50,
    marginLeft: 120,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  subtitle: {
    fontSize: 16,
    color: 'pink',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
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
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginVertical: 20,
    backgroundColor: 'white',
    },
    profileImage: {
    width: '100%',
    height: '100%',
    },
    input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    },
    notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    },
    notificationText: {
    fontWeight: 'bold',
    fontSize: 16,
    },
    header: {fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    label: {
    fontSize: 16,
    marginTop: 10,
    },
    // input: {
    // borderWidth: 1,
    // borderColor: 'black',
    // padding: 10,
    // fontSize: 16,
    // marginBottom: 10,
    // },
    reportContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    marginVertical: 10,
    },
    inputContainer: {
      marginHorizontal: 10,
      
    },
    subTitle: {
      fontSize: 15,
    },
     


});

////////////////////////////////////

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleAddEvent = (day) => {
    setSelectedDate(day);
    setModalVisible(true);
    const event = events[day] || {};
    setStartTime(event.startTime || '');
    setEndTime(event.endTime || '');
    setEventDescription(event.eventDescription || '');
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
        {[null, ...Array(27)].map((day, index) => {
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



const AttendancePage = () => {
  const [studentName, setStudentName] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [absenceReason, setAbsenceReason] = useState('');
  const [absences, setAbsences] = useState([]);

 

  const handleCheckOut = () => {
    setCheckOutTime(new Date().toLocaleTimeString());
  };

  const handleNotifyAbsence = () => {
    setAbsences([...absences, { studentName, checkOutTime, absenceReason }]);
    setStudentName('');
   
    setCheckOutTime('');
    setAbsenceReason('');
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Student Name:</Text>
      <TextInput style={styles.input} value={studentName} onChangeText={setStudentName} />

      <Text style={styles.label}>Check Out Time:</Text>
      <TextInput style={styles.input} value={checkOutTime} />
      <Button title="Check Out" onPress={handleCheckOut} />
      <Text style={styles.label}>Absence Reason:</Text>
      <TextInput style={styles.input} value={absenceReason} onChangeText={setAbsenceReason} />
      <Button title="Notify Absence" onPress={handleNotifyAbsence} />
      <ReportScreen absences={absences} />
    </View>
  );
};

// Attendance Screen

const ReportScreen = ({ absences }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Absence Report:</Text>
    {absences.map((absence, index) => (
      <View key={index} style={styles.reportContainer}>
        <Text style={styles.label}>Student Name: {absence.studentName}</Text>
        
        <Text style={styles.label}>Check Out Time: {absence.checkOutTime}</Text>
        <Text style={styles.label}>Absence Reason: {absence.absenceReason}</Text>
      </View>
    ))}
  </View>
);

// Profile Component

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{uri: profileImage}} style={styles.profileImage} />
          ) : (
            <TouchableOpacity style = {styles.profileImageContainer} onPress={pickImage}>
              <Text>{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}Add</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setFirstName(text)}
          value={firstName}
        />
        <Text>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text>Bio</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setBio(text)}
          value={bio}
        />
      </View>

      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Camera Access</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={value => setNotificationsEnabled(value)}
        />
      </View>
    </View>
  );
};
