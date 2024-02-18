/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView>
      <ToDoList items={items} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
