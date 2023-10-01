import React from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
// import { colors } from '../../utils/colors';

class SliderComponent extends React.Component {
    state = {
        value: 0.8,
    };

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    animateTransitions
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}

                    minimumTrackTintColor="#d14ba6"
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                />
                {/* <Text>{Math.round(this.state.value * 100)}%</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    thumb: {
        backgroundColor: '#f8a1d6',
        borderColor: '#a4126e',
        borderRadius: 10,
        borderWidth: 5,
        height: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        width: 20,
    },
    track: {
        backgroundColor: 'white',
        borderRadius: 4,
        height: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1,
    },
});

export default SliderComponent;
