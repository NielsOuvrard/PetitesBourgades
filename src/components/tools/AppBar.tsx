import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

interface AppBarProps {
    title: string;
}

const AppBar: React.FC<AppBarProps> = ({ title }) => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: colors.primary,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default AppBar;
