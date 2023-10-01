import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../components/tools/Card';
import MaterialCard from '../components/tools/MaterialCard';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { allTypesBatiment, BatimentType, batiments, ResourceType, materialList, MaterialType } from '../utils/GameData'

const rows = 4;
const cols = 4;

type Cell = {
    value: number;
};

type GameMap = Cell[][];

function fillEmptyMap(): GameMap {
    const map: GameMap = [];
    for (let i = 0; i < rows; i++) {
        map.push([]);
        for (let j = 0; j < cols; j++) {
            map[i].push({ value: 0 });
        }
    }
    return map;
}


const Game: React.FC = () => {
    const [map, setMap] = React.useState<GameMap>(fillEmptyMap);

    const { t } = useTranslation();

    const nameBatimentsSelected = [
        "house",
        "well",
        "mill",
        "monument",
        "temple",
        "tavern",
        "theater",
        "tower",
    ];

    const batimentsSelected: BatimentType[] = nameBatimentsSelected.map((name) => {
        return batiments.find((batiment) => batiment.name === name);
    }).filter((batiment) => batiment !== undefined) as BatimentType[]; // filter undefined


    const materials = [
        { content: 'wood', title: 'Wood' },
        { content: 'wheat', title: 'Wheat' },
        { content: 'brick', title: 'Brick' },
        { content: 'glass', title: 'Glass' },
        { content: 'stone', title: 'Stone' },
    ];

    const colorAccordingToType = (type: string) => {
        let color = "lightgreen";
        materialList.forEach((item: MaterialType) => {
            if (item.name === type) {
                color = item.color;
            }
        });
        return color;
    }

    const sizeCardX = (batiment: BatimentType) => {
        let size = 0;
        batiment.resources?.forEach((resource) => {
            if (resource.x > size) {
                size = resource.x;
            }
        });
        return size;
    }

    const sizeCardY = (batiment: BatimentType) => {
        let size = 0;
        batiment.resources?.forEach((resource) => {
            if (resource.y > size) {
                size = resource.y;
            }
        });
        return size;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('play')}</Text>

            {/* Cards Batiment */}
            <ScrollView
                horizontal
                contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
            >
                <View style={{ flexDirection: 'row' }}>
                    {batimentsSelected.map((batiment) => {
                        return (
                            <Card key={batiment.name} title={t('batiments.' + batiment.name)} content={batiment.name}>
                                <View style={{ flexDirection: 'row', width: (sizeCardX(batiment) * 32) + 40, height: (sizeCardY(batiment) * 32) + 40 }}>
                                    {batiment.resources?.map((resource) => {
                                        return (
                                            <View
                                                key={`${resource.x}-${resource.y}-${resource.type}`}
                                                style={{
                                                    position: 'absolute',
                                                    top: resource.y * 32,
                                                    left: resource.x * 32,
                                                    backgroundColor: colorAccordingToType(resource.type) ?? 'lightgreen',
                                                    width: 30,
                                                    height: 30,
                                                    marginVertical: 4,
                                                }} />
                                        );
                                    })}
                                </View>
                            </Card>
                        );
                    })}
                </View>
            </ScrollView>

            {/* Map */}
            <View style={{ flexDirection: 'row', margin: 30 }}>
                {map.map((row, rowIndex) => {
                    return (
                        <View key={rowIndex} style={{ flexDirection: 'column' }}>
                            {row.map((cell, cellIndex) => {
                                return (
                                    <View
                                        key={cellIndex}
                                        style={{
                                            backgroundColor: 'lightgreen',
                                            width: 60,
                                            height: 60,
                                            marginVertical: 4,
                                            marginHorizontal: 4,
                                            alignSelf: 'center'
                                        }} />
                                );
                            })}
                        </View>
                    );
                })}
            </View>

            {/* Material */}
            <ScrollView
                horizontal
                contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
            >
                <View style={{ flexDirection: 'row' }}>
                    {materials.map((material) => {
                        return (
                            <MaterialCard key={material.content} style={{ width: 100, height: 100 }} content={material.content} title={t('materials.' + material.content)} />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 30,
    },
});

export default Game;