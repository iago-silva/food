import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState();
    const id = navigation.getParam('id');

    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    } 

    useEffect(() => {
        getResult();
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>ResultsShow</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
});

export default ResultsShowScreen;