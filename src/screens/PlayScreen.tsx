import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../components/tools/Button';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';


const PlayScreen: React.FC = () => {
    const { t } = useTranslation();

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const openHome = () => {
        navigation.navigate("Home");
    };


    const openGame = () => {
        navigation.navigate("Game");
    };


    return (
        <View style={styles.container}>
            <Button style={styles.button} title={t('solo')} onPress={openGame} />
            <Button style={styles.button} title={t('multiplayer')} onPress={openHome} />
            <Button style={styles.button} title={t('rules')} onPress={openHome} />
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

export default PlayScreen;