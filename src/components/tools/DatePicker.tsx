import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DatePickerProps {
    selectedDate: string;
    onDateChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    return (
        <View style={styles.datePicker}>
            <TouchableOpacity onPress={toggleDatePicker}>
                <Text style={styles.dateText}>{selectedDate}</Text>
            </TouchableOpacity>

            {showDatePicker}
        </View>
    );
};

const styles = StyleSheet.create({
    datePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    dateText: {
        fontSize: 16,
        color: '#333',
    },
    // Additional styles for the date picker UI can be added here
});

export default DatePicker;
