import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import up from '../../assets/images/FirstImage/up.png';
import left from '../../assets/images/FirstImage/left.png';
import yellowImage from '../../assets/images/yellow.png';
import blueImage from '../../assets/images/blue.png';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () => {
    await Font.loadAsync({
        'BPG-Nino-Mtavruli-Normal': require('../../assets/fonts/bpg_nino_mtavruli_normal.otf'),
    });
};

const Content = ({ onSelect, selectedOption }) => {
    return (
        <View style={styles.contentContainer}>
            <View style={[styles.contentItem, selectedOption === "First" && styles.selectedBorder1]}>
                <TouchableOpacity style={styles.content1} onPress={() => onSelect("First")}>
                    <Text style={styles.contentText}>სასჯელმოხდილი პირის სტატუსი და მისი უფლებრივი მდგომარება</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.margin} />
            <View style={[styles.contentItem, selectedOption === "Second" && styles.selectedBorder2]}>
                <TouchableOpacity style={styles.content2} onPress={() => onSelect("Second")}>
                    <Text style={styles.contentText}>სოციალური რესოციალიზაცია/რეაბილიტაციის ხელშემწყობი პროგრამები</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const SecondPage = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState("First");

    useEffect(() => {
        const loadResources = async () => {
            try {
                await fetchFonts();
                setFontLoaded(true);
                await SplashScreen.hideAsync();
            } catch (e) {
                console.warn(e);
            }
        };

        loadResources();
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    const handlePress = () => {
        if (selectedOption === "First") {
            navigation.navigate('HeadFirst');
        } else if (selectedOption === "Second") {
            navigation.navigate('HeadSecond');
        }
    };

    return (
        <>
            <View style={[styles.container, { zIndex: 0 }]}>
                <Image source={up} style={styles.up} />
                <View style={styles.item1}>
                    <View style={styles.innerItem1}>
                        <Image source={selectedOption === "First" ? yellowImage : selectedOption === "Second" ? blueImage : yellowImage} style={styles.image} />
                    </View>
                </View>
                <View style={[styles.container, { zIndex: 10 }]}>
                    <Content onSelect={handleSelect} selectedOption={selectedOption} />
                    <View style={[styles.btnOuter, { borderColor: selectedOption === "First" ? "#FBA826" : selectedOption === "Second" ? "#AED5EA" : "#FBA826" }]}>
                        <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor: selectedOption === "First" ? "#FBA826" : selectedOption === "Second" ? "#AED5EA" : "#FBA826" }]}>
                            <Text style={styles.buttonText}>გაგრძელება</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.leftContP]}>
                <Image source={left} style={[styles.leftP]} />
            </View>
        </>
    );
};

export default SecondPage;
