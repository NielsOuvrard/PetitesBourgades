import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const MyComponent: React.FC = () => {
    const { t } = useTranslation();

    const handleButtonPress = () => {
        Alert.alert('Button Pressed');
    };

    return (
        <View>
            <Text>{t('title')}</Text>
            <Text>{t('translation')}</Text>
            <Button title={t('buttonText')} onPress={handleButtonPress} />
        </View>
    );
};

export default MyComponent;
