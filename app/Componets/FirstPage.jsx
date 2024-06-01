import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { styles } from "./styles";
import * as Font from 'expo-font';
import logo from '../../assets/images/FirstImage/justice.png';
import AppLoading from 'expo-app-loading';
import up from '../../assets/images/FirstImage/up.png';
import left from '../../assets/images/FirstImage/left.png';

const fetchFonts = () => {
    return Font.loadAsync({
      'BPG-Nino-Mtavruli-Normal': require('../../assets/fonts/bpg_nino_mtavruli_normal.otf'),
    });
};


const CustomButton = ({ onPress, title }) => {
    return (
        <View style={styles.btnOuter}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const CustomTitle = () => {
    return (
        <Text style={styles.title}>
            <Text style={styles.span}>
                გზამკვლევი{'\n'} 
            </Text>    
            სასჯელმოხდილ{'\n'}პირთათვის
        </Text>
    );
};

export const FirstPage = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontLoaded(true)}
        />
      );
    }
    const handlePress = () => {
        Alert.alert('Button pressed!');
    };

    return (
        <>
        <View style={styles.container}>                                                 
            <Image source={up} style={styles.up} />
            <View style={styles.item1}>
                <View style={styles.innerItem1}>
                    <Image source={logo} style={styles.image} />
                </View>
            </View>
            <View style={styles.container}>
                <CustomTitle />
                <CustomButton onPress={handlePress} title="შემდეგი" />
            </View>
        </View>
            <View style={styles.leftCont}>
                 <Image source={left} style={styles.left} />
            </View>
        </>
    );
};



export default FirstPage;
