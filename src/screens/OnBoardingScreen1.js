import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const OnBoardingScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} />
      {/* 5% screen height with skip button */}
      <View style={styles.skipContainer}>
        <TouchableOpacity>
          <Text style={styles.skipContainerText}>Skip</Text>
        </TouchableOpacity>
      </View>
      {/* 50% screen height with image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/onBoarding1.png')}
          style={styles.image}
        />
      </View>
      {/* 5% screen height with Title */}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Trust us</Text>
      </View>
      {/* 15% screen height with Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Our app prioritizes your data security, implementing robust encryption
          and stringent access controls. Trust us to safeguard your information
          with utmost confidentiality and integrity.
        </Text>
      </View>
      {/* 5% screen height with Dots */}
      <View style={styles.DotsMajorContainer}>
        <View style={styles.DotsSideSpace} />
        <View style={styles.DotsContainer}>
          <View style={styles.selectedDot} />
          <View style={styles.nonSelectedDotsContainer} />
          <View style={styles.nonSelectedDotsContainer} />
        </View>
        <View style={styles.DotsSideSpace} />
      </View>
    </View>
  );
};

export default OnBoardingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipContainer: {
    height: '5%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  skipContainerText: {
    color: '#e1e1e1',
    fontSize: 20,
    left: Dimensions.get('screen').width - 60,
  },
  imageContainer: {
    backgroundColor: 'red',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    height: '5%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#7e1d6c',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  descriptionContainer: {
    height: '15%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#ABABAB',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  DotsMajorContainer: {
    height: '5%',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  DotsSideSpace: {
    width: '40%',
    backgroundColor: 'gray',
    height: '100%',
  },
  DotsContainer: {
    backgroundColor: 'yellow',
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedDot: {
    height: 10,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#7e1d6c',
  },
  nonSelectedDotsContainer: {
    height: 6,
    width: 14,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
  },
});
