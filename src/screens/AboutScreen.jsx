import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {Text} from 'react-native';

const AboutScreen = ({}) => {
  return (
    <MainLayout>
      <Text>Rebecca's Awesome To Do List App</Text>
      <Text>Written by: Rebecca Chan</Text>
      <Text>Date: March 13, 2024</Text>
    </MainLayout>
  );
};

export default AboutScreen;
