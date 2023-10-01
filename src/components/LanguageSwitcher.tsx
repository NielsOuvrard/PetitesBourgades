import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <View style={styles.container}>
            <Text>{t('language')}</Text>
            <Button title="English" onPress={() => changeLanguage('en')} />
            <Button title="Français" onPress={() => changeLanguage('fr')} />
            <Button title="Español" onPress={() => changeLanguage('es')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
});

export default LanguageSwitcher;
