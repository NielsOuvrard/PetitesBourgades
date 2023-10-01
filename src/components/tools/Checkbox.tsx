import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

interface CheckboxProps {
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return (
        <TouchableOpacity onPress={toggleCheckbox}>
            <View style={styles.checkboxContainer}>
                <View style={checked ? styles.checkboxChecked : styles.checkbox} />
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary, // Google Blue
        marginRight: 8,
    },
    checkboxChecked: {
        width: 24,
        height: 24,
        borderRadius: 4,
        backgroundColor: colors.primary, // Google Blue
        marginRight: 8,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});

export default Checkbox;
