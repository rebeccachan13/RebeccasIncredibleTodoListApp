import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet} from 'react-native';

function ToDoList({items}) {
  return (
    <>
      <ScrollView>
        {items.map((value, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{value}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
