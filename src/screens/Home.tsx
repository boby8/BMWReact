import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RotateImage from '../components/Animation';
interface TileProps {
  colors: string[];
  text: string;
  handlenavigation: any;
}

const Tile: React.FC<TileProps> = ({colors, text, handlenavigation}) => (
  <TouchableOpacity
    onPress={handlenavigation}
    style={{backgroundColor: '#1F2026'}}>
    <LinearGradient
      colors={colors}
      style={styles.tile}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 0}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          gap: 20,
        }}>
        <RotateImage />
        <Text style={styles.tileText}>{text}</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

interface Item {
  id: string;
  colors: string[];
  text: string;
}

type NavigationProps = {
  navigation: StackNavigationProp<any, 'Splash'>;
};

const Home: React.FC<NavigationProps> = ({navigation}) => {
  const colorSets = [
    ['#B832BF', '#E04182'],
    ['#98E6B9', '#57B8E7'],
    ['#E77B8D', '#EAAE5C'],
    ['#4748BE', '#6360C5'],
  ];

  const data: Item[] = Array.from({length: 12}, (_, index) => ({
    id: index.toString(),
    colors: colorSets[index % colorSets.length],
    text: `Chapter ${index + 1}`,
  }));

  const handlenavigation = () => {
    navigation.navigate('chapter1');
  };

  const renderItem: React.FC<{item: Item}> = ({item}) => (
    <Tile
      handlenavigation={handlenavigation}
      colors={item.colors}
      text={item.text}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 8,
  },
  tileText: {
    color: 'white',
    fontWeight: '900',
    fontFamily: 'cursive',
    fontSize: 20,
  },
});

export default Home;
