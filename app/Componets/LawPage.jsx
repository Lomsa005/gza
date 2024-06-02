import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import back from "../../assets/images/back.png";
import fav from "../../assets/images/fav.png";

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

export const LawPage = () => {
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

    return (
        <>
        <ScrollView>
            <View style={styles.lawContainer}>
                <View style={styles.firstCont}>
                    <Image source={back} style={styles.back} /> 
                    <Text style={styles.lawTitle}>რას ნიშნავს ნასამართლობის გაქარწყლება ან მოხსნა?</Text>
                    <Image source={fav} style={styles.fav} />
                </View>
                <View style={styles.SecondCont}>
                    <Text style={styles.lawText}>პასუხისმგებლობის განმეორებითი დანაშაულის შემთხვევაში დაკისრების დროსაც, მოხსნილი ან გაქარწყლებული ნასამართლობა მის მდგომარეობას ვერ დაამძიმებს.</Text>
                </View>
            </View>
        </ScrollView>
        </>
    );
};

export default LawPage;
