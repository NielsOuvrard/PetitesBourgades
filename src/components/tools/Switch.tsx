import React, { useState } from 'react';
import { View, Text, Switch as RNSwitch, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

interface SwitchProps {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, value, onValueChange }) => {
    return (
        <View style={styles.switchContainer}>
            <Text style={styles.label}>{label}</Text>
            <RNSwitch
                style={styles.switch}
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: '#ccc', true: colors.primary }} // Google Blue for the track
                thumbColor={value ? colors.primary : '#f4f3f4'} // Google Blue for the thumb
            />
        </View>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    switch: {},
});

export default Switch;
