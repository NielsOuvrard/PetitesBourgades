import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../components/tools/Button';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const HomeScreen: React.FC = () => {
    const { t } = useTranslation();

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const openSettings = () => {
        navigation.navigate("Settings");
    };

    const openPlay = () => {
        navigation.navigate("Play");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('title')}</Text>
            <Button style={styles.button} title={t('play')} onPress={openPlay} />
            <Button style={styles.button} title={t('settings')} onPress={openSettings} />
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
    button: {
        margin: 10,
        padding: 10,
    },
});

export default HomeScreen;