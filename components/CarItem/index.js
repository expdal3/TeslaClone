import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

    //create data model for each CarItem
    const {modelname, tagline, taglineCTA, image} = props.car; //modelname receive from .car property of props

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{modelname}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton
                    type='primary'
                    content={'Custom Order'}
                    onPress={() => {
                        console.warn("Custom order is currently not available!")
                    }}
                />

                <StyledButton
                    type='secondary'
                    content={'Check Inventory'}
                    onPress={() => {
                        console.warn("Checking current inventory ...")
                    }}
                />

            </View>

        </View>
    );
};

export default CarItem;