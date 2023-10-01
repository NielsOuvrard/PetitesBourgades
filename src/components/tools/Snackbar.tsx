import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

interface SnackbarProps {
    message: string;
    actionText: string;
    onActionPress: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, actionText, onActionPress }) => {
    return (
        <View style={styles.snackbar}>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity onPress={onActionPress}>
                <Text style={styles.actionText}>{actionText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    snackbar: {
        backgroundColor: '#333',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 3,
    },
    message: {
        fontSize: 16,
        color: '#fff',
    },
    actionText: {
        fontSize: 16,
        color: colors.primary, // Google Blue
    },
});

export default Snackbar;
