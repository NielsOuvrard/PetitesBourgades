import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card from '../components/tools/Card';
import MaterialCard from '../components/tools/MaterialCard';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import { allTypesBatiment, BatimentType, batiments, materialList, MaterialType } from '../utils/GameData'

const rows = 4;
const cols = 4;

type Cell = {
    material?: MaterialType;
};

type GameMap = Cell[][];

function fillEmptyMap(): GameMap {
    const map: GameMap = [];
    for (let i = 0; i < rows; i++) {
        map.push([]);
        for (let j = 0; j < cols; j++) {
            map[i].push({});
        }
    }
    return map;
}
type Status = 'BUILD' | 'CHOOSE_MATERIAL' | 'DROP_MATERIAL';
let status: Status = 'CHOOSE_MATERIAL';

const Game: React.FC = () => {
    const [map, setMap] = React.useState<GameMap>(fillEmptyMap);
    const [selectedMaterial, setSelectedMaterial] = React.useState<MaterialType | undefined>(undefined);
    const [selectedBatiment, setSelectedBatiment] = React.useState<BatimentType | undefined>(undefined);

    const findThisMaterial = (name: string) => {
        return materialList.find((material) => material.name === name);
    }

    const fillWithThis = (cell: Cell) => {
        if (selectedMaterial && !cell.material && status === 'DROP_MATERIAL') {
            cell.material = selectedMaterial;
            setMap([...map]);
            status = 'CHOOSE_MATERIAL';
        }
    }

    const { t } = useTranslation();

    const nameBatimentsSelected = [
        "house",
        "chapel",
        "farm",
        "tavern",
        "well",
        "theater",
        "factory",
    ];

    const batimentsSelected: BatimentType[] = nameBatimentsSelected.map((name) => {
        return batiments.find((batiment) => batiment.name === name);
    }).filter((batiment) => batiment !== undefined) as BatimentType[]; // filter undefined


    const materials = [
        'wood',
        'wheat',
        'brick',
        'glass',
        'stone',
    ];

    const colorAccordingToType = (type: string) => {
        let color = "white";
        materialList.forEach((item: MaterialType) => {
            if (item.name === type) {
                color = item.color;
            }
        });
        return color;
    }

    const sizeCardX = (batiment: BatimentType) => {
        if (!batiment.resources) {
            return 0;
        }
        return batiment.resources[0].length;
    }

    const sizeCardY = (batiment: BatimentType) => {
        return batiment.resources?.length ?? 0;
    }

    const buildHere = (rowIndex: number, cellIndex: number) => {
        console.log("buildHere : ", rowIndex, cellIndex);
        if (status !== 'BUILD' || !selectedBatiment) {
            return;
        }
        let couldBuild = true;
        selectedBatiment.resources?.forEach((resourceY, y) => {
            resourceY.forEach((resource, x) => {
                if (resource === '') {
                    return;
                }
                const material = findThisMaterial(resource); // check if material is undefined, even if it should not be
                if (!material) {
                    return;
                }
                // invert x and y because of the map
                if (map[rowIndex + x][cellIndex + y].material?.name !== material.name) {
                    couldBuild = false;
                }
            });
        });
        console.log("couldBuild : ", couldBuild);
        if (!couldBuild) {
            return;
        }
        selectedBatiment.resources?.forEach((resourceY, indexY) => {
            resourceY.forEach((resource, indexX) => {
                if (resource === '') {
                    return;
                }
                const material = findThisMaterial(resource); // check if material is undefined, even if it should not be
                if (!material) {
                    return;
                }
                map[rowIndex + indexY][cellIndex + indexX].material = undefined;
            });
        });
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
                            <TouchableOpacity key={batiment.name} onPress={() => { setSelectedBatiment(batiment), status = 'BUILD' }}>
                                <Card title={t('batiments.' + batiment.name)} content={batiment.name}>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: (sizeCardX(batiment) * 32) + 40,
                                        height: (sizeCardY(batiment) * 32) + 40
                                    }}>
                                        {batiment.resources?.map((resourceY, indexY) => {
                                            return (
                                                <View style={{ flexDirection: 'column' }} key={`${indexY}`}>
                                                    {resourceY.map((resource, indexX) => {
                                                        return (
                                                            <View
                                                                key={`${indexX}-${indexY}`}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: indexY * 32,
                                                                    left: indexX * 32,
                                                                    backgroundColor: colorAccordingToType(resource),
                                                                    width: 30,
                                                                    height: 30,
                                                                    marginVertical: 4,
                                                                }} />
                                                        );
                                                    })}
                                                </View>
                                            );
                                        })}
                                    </View>
                                </Card>
                            </TouchableOpacity>
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
                                    <TouchableOpacity key={cellIndex} onPress={() => {
                                        fillWithThis(cell),
                                            console.log("rowIndex : ", rowIndex, " cellIndex : ", cellIndex),
                                            buildHere(rowIndex, cellIndex)
                                    }}>
                                        <View
                                            key={cellIndex}
                                            style={{
                                                backgroundColor: 'lightgreen',
                                                width: 60,
                                                height: 60,
                                                marginVertical: 4,
                                                marginHorizontal: 4,
                                                alignSelf: 'center'
                                            }} >
                                            {cell.material && (
                                                <View
                                                    style={{
                                                        backgroundColor: colorAccordingToType(cell.material.name),
                                                        width: 30,
                                                        height: 30,
                                                        margin: 4, // ?
                                                        alignSelf: 'center',
                                                    }} />
                                            )}
                                        </View>
                                    </TouchableOpacity>
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
                            <TouchableOpacity key={material} onPress={() => { setSelectedMaterial(findThisMaterial(material)), status = 'DROP_MATERIAL' }}>
                                <MaterialCard style={{ width: 100, height: 100 }} content={material} title={t('materials.' + material)} />
                            </TouchableOpacity>
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