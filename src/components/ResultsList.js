import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if (results.length === 0)
        return null;

    return (
        <View style={styles.contanier}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity> 
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contanier: {
        marginBottom: 10
    },
    title: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default withNavigation(ResultsList);