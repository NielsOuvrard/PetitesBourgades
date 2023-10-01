import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppBar from '../components/tools/AppBar';
import Button from '../components/tools/Button';
import Card from '../components/tools/Card';
import Checkbox from '../components/tools/Checkbox';
import DatePicker from '../components/tools/DatePicker';
import Snackbar from '../components/tools/Snackbar';
import Switch from '../components/tools/Switch';
import TextInput from '../components/tools/TextInput';

const MyComponent: React.FC = () => {
    const { t } = useTranslation();

    const handleButtonPress = () => {
        Alert.alert('Button Pressed');
    };

    return (
        <View>
            <Text>{t('title')}</Text>
            <AppBar title={t('title')} />
            <Button title={t('buttonText')} onPress={handleButtonPress} />
            <Card title={t('cardTitle')} content={t('cardContent')} />
            <Checkbox label={t('checkboxLabel')} />
            <DatePicker selectedDate={t('datePickerLabel')} onDateChange={handleButtonPress} />
            <Snackbar message={t('snackbarMessage')} actionText={t('snackbarActionText')} onActionPress={handleButtonPress} />
            <Switch label={t('switchLabel')} value={false} onValueChange={handleButtonPress} />
            <TextInput value={t('textInputLabel')} placeholder={t('textInputPlaceholder')} onChangeText={handleButtonPress} />
        </View>
    );
};

export default MyComponent;
