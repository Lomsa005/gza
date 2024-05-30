import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CustomButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const FirstPage = () => {
    const handlePress = () => {
        Alert.alert('Button pressed!');
    };

    return (
        <View style={styles.cont}>
            <Text>Hello World</Text>
            <CustomButton onPress={handlePress} style={styles.btn} title="Press Me" />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        
    }, 
    btn: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    cont: {
        backgroundColor: "red", 
        height: "100%"
    }
});

export default FirstPage;
