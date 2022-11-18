import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import Task from './components/task'
import Imoje from './components/imoje'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])


  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Test Android App</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}></Task>
                </TouchableOpacity>
              );
              
            })
          }
          {/* <Task text={'text 1'} />
          <Task text={'text 2'} /> */}
        </View>   
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWeapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}></TextInput>

        <TouchableOpacity onPress={() =>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
          
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; BhathikaGimhanMaduragoda</Text>
      </View>
      <Imoje/>
    </View>
    
  );

 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  footerText: {
    fontSize: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    left: 20,
    opacity: 0.3,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWeapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    paddingLeft: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center', 
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: '#55BCF6',
    fontWeight: 'bold',
  },
});
