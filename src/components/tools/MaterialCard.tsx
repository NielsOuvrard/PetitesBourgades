import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { materialList, MaterialType } from '../../utils/GameData'

interface CardProps {
    title: string;
    content: string;
    style?: object;
}

const Card: React.FC<CardProps> = ({ title, content, style }) => {
    return (
        <View style={[styles.card, style]}>
            <Text style={styles.title}>{title}</Text>
            {materialList.map((item: MaterialType) => {
                if (item.name === content) {
                    return (
                        <View
                            key={item.name}
                            style={{
                                backgroundColor: item.color,
                                width: 30,
                                height: 30,
                                marginVertical: 4,
                                alignSelf: 'center',
                            }} />
                    )
                }
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 11,
        margin: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf: 'center',
    },
    content: {
        fontSize: 16,
    },
});

export default Card;
