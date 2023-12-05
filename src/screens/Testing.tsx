import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';

const Testing = () => {
  // Initialize an array to track the collapsed state for each question
  const [isCollapsedArray, setIsCollapsedArray] = useState<boolean[]>(
    Array(7).fill(true),
  );

  // Function to toggle the collapsed state for a specific question
  const toggleCollapsible = (index: number) => {
    // Create a copy of the current state array
    const newCollapsedArray = [...isCollapsedArray];

    // Toggle the collapsed state for the selected question
    newCollapsedArray[index] = !newCollapsedArray[index];

    // Update the state with the new array
    setIsCollapsedArray(newCollapsedArray);
  };

  type Question = string;

  const questions: Question[] = [
    'What is Emmet',
    'Difference between a Library and Framework',
    'What is CDN? Why do we use it',
    'Why is React known as React',
    'What is crossorigin in script tag',
    'What is difference between React and ReactDOM',
    'What is async and defer',
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#1F2026'}}>
      {questions.map((question, index) => (
        <View key={index} style={{margin: 5, padding: 10}}>
          <LinearGradient
            colors={['#FF5733', '#FFC300']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <TouchableOpacity onPress={() => toggleCollapsible(index)}>
              <Text>{question} ?</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Collapsible collapsed={isCollapsedArray[index]}>
            <View style={{padding: 10, backgroundColor: '#1F2026'}}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                minima vero consequuntur, explicabo recusandae sit illum totam
                quae error enim dolores laudantium eligendi, esse qui fugit quos
                adipisci cupiditate temporibus!
              </Text>
            </View>
          </Collapsible>
        </View>
      ))}
    </View>
  );
};

export default Testing;
