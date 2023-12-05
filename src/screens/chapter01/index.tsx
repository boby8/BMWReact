import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Chapter1 = () => {
  const [isCollapsedArray, setIsCollapsedArray] = useState<boolean[]>(
    Array(7).fill(true),
  );

  const [fadeAnimArray] = useState(
    Array(7)
      .fill(0)
      .map(() => new Animated.Value(0)),
  );

  const fadeIn = (index: number) => {
    Animated.timing(fadeAnimArray[index], {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const toggleCollapsible = (index: number) => {
    const newCollapsedArray = [...isCollapsedArray];

    newCollapsedArray[index] = !newCollapsedArray[index];

    fadeIn(index);

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

  const Answers: Question[] = [
    'Emmet is a toolkit for web developers that simplifies and accelerates HTML and CSS coding. It provides a set of abbreviations and shortcuts, allowing developers to write code snippets using a concise syntax and then expand them into full HTML or CSS structures. Emmet is integrated into various code editors, including Visual Studio Code, making it a valuable tool for improving workflow efficiency in web development.',
    'A library is a compilation of pre-written code snippets and functions that developers can use for specific tasks, giving them explicit control over when and how to incorporate these components into their applications. On the other hand, a framework provides a more extensive and integrated set of tools, dictating the overall structure and flow of an entire application. With frameworks, developers work within a predefined structure, and there is often an inversion of control, where the framework manages certain aspects of the application flow. In summary, while libraries offer specific functionalities for developers to choose from, frameworks provide a comprehensive framework for building applications, influencing the overall development process.',
    'A CDN, or Content Delivery Network, is a network of distributed servers strategically positioned to deliver web content efficiently to users. It improves performance by reducing latency, enhances scalability, saves bandwidth, and provides global reach. CDNs cache and distribute content, ensuring faster loading times, improved reliability, and better security, making them essential for optimizing web performance in a global context.',
    'React is named for its core concept of "reactivity" — the framework efficiently updates the user interface in response to changes in data. The name highlights its declarative syntax, component-based structure, and one-way data binding, making it a powerful and widely adopted library for building dynamic and responsive user interfaces.',
    'The crossorigin attribute in a script tag is used to specify how the browser should handle loading scripts from different origins (domains). It is typically used when loading scripts from a different domain to control whether the browser should request the script with credentials (cookies and HTTP authentication). Setting crossorigin="anonymous" indicates that the script should be fetched without sending credentials, while crossorigin="use-credentials" includes credentials in the request. This attribute helps prevent certain security risks associated with cross-origin requests.',
    'React-Handles core functionality related to components, virtual DOM, and application logic.Includes methods for creating and managing components (React.Component), handling state and props, and managing the component lifecycle....ReactDOM:Specifically deals with the integration of React with the DOM.Provides methods for rendering React components into the actual DOM, updating the DOM based on changes in the virtual DOM, and interacting with the browser environment.',
    'The async and defer attributes in the HTML <script> tag serve to control the loading and execution of scripts on web pages. When the async attribute is used, the script is fetched asynchronously, allowing HTML parsing to proceed without waiting for the script to complete loading. This is beneficial for non-blocking scenarios. On the other hand, the defer attribute defers script execution until after HTML parsing is finished but before the DOMContentLoaded event. Scripts with defer maintain their order of execution, making it useful for ensuring dependencies are met. These attributes provide developers with control over how scripts are loaded and executed, catering to different requirements in terms of timing and script dependencies.'

  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {questions.map((question, index) => (
            <View key={index} style={{margin: 5, padding: 10}}>
              <LinearGradient
                colors={['#98E6B9', '#57B8E7']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <TouchableOpacity
                  style={styles.tiles}
                  onPress={() => {
                    toggleCollapsible(index);
                  }}>
                  <Text style={styles.tileQuestion}>{question} ?</Text>
                </TouchableOpacity>
              </LinearGradient>

              <Collapsible collapsed={isCollapsedArray[index]}>
                <Animated.View
                  style={[
                    styles.detailsContainer,
                    {opacity: fadeAnimArray[index]},
                  ]}>
                    {Answers.map((ans:any, index:number) =>
                     <Text key={index}>
                    {ans}
                   </Text>)}
                 
                </Animated.View>
              </Collapsible>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chapter1;
