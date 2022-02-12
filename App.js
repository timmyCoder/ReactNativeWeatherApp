import { StatusBar } from 'expo-status-bar';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';


import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default function App() {

  const location = 'San Fransisco';

  handleChangeText = (newLocation) => {
    this.props.location = newLocation;
    };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={getImageForWeather('Clear')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>
            {location}
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

          <SearchInput placeholder="Search any city" />

          <StatusBar style="auto" />

        </View>
      </ImageBackground>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      },
      android: {
        fontFamily: 'Roboto',
      }
    }),
    color: 'white'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 30,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    },
});
