import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../components/tools/Button';
import Slider from '../components/tools/Slider';
import LanguageSwitcher from '../components/LanguageSwitcher';

import { useNavigation } from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const { t } = useTranslation();

    const handleButtonPress = () => {
        Alert.alert('Button Pressed');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('settings')}</Text>

            {/* <Text style={styles.text}>{t('language')}</Text> */}
            <LanguageSwitcher />
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <Text style={styles.text}>{t('music')}</Text>
                <Slider />
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <Text style={styles.text}>{t('effects')}</Text>
                <Slider />
            </View>

            <Button title={t('go_back')} onPress={goBack} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 60,
    },
    text: {
        fontSize: 20,
    },
    button: {
        margin: 10,
        padding: 10,
    },
});

export default SettingsScreen;
