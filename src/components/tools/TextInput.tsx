import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const TextInputComponent: React.FC<TextInputProps> = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default TextInputComponent;
