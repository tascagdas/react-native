import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const Splash = ({navigation}) => {
  useEffect(() => {
    handleToken();
  }, []);
  const handleToken = async () => {
    let token = await AsyncStorage.getItem('access_Token');
    // let decodedToken = jwtDecode(token);
    let decodedToken = {
      id: 15,
      username: 'tascagdas',
      iat: 1710667845,
      exp: 1710671445,
    };
    const date = new Date();
    let timeSecond = date.getTime() / 1000;
    if (decodedToken.exp > timeSecond) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1500);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Splash</Text>
      <Image
        style={styles.image}
        source={{uri: 'https://avatars.githubusercontent.com/u/143749465?v=4'}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    objectFit: 'contain',
  },
});
