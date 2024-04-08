import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {Text} from 'react-native';

const AboutScreen = ({}) => {
  const [message, setMessage] = React.useState('');

  const apiCall = React.useCallback(async () => {
    const response = await fetch(
      'https://corporatebs-generator.sameerkumar.website/',
      {
        method: 'GET',
      },
    );
    const json = await response.json();

    //const phrase = json.phrase;
    const {phrase} = json;

    setMessage(phrase);
  });

  React.useEffect(() => {
    apiCall().then(() => {
      /*Called when the api call finishes*/
    });
  }, []);

  return (
    <MainLayout>
      <Text>Rebecca's Awesome To Do List App</Text>
      <Text>Written by: Rebecca Chan</Text>
      <Text>Date: April 8, 2024</Text>
      <Text>{message}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
