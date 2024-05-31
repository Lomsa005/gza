import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { styles } from "./styles";
import logo from '../../assets/images/FirstImage/justice.png'; // Ensure the path is correct

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

const CustomImage = () => {
    return (
        <Image source={logo} style={styles.image} />
    );
};

export const FirstPage = () => {
    const handlePress = () => {
        Alert.alert('Button pressed!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <View style={styles.innerItem1}>
                    <CustomImage />
                </View>
            </View>
            <View style={styles.container}>
                <CustomTitle />
                <CustomButton onPress={handlePress} title="შემდეგი" />
            </View>
        </View>
    );
};



export default FirstPage;
