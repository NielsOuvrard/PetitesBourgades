import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
    title: string;
    content?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, children }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {
                content && content.length > 0 &&
                <Text style={styles.content}>{content}</Text>
            }
            {
                children
            }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    content: {
        fontSize: 16,
    },
});

export default Card;
