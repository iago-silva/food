import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/Searchbar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results] = useResults(term);

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.container}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={searchApi} 
            />
            <ScrollView>
                <ResultsList
                    title="Cost Effective" 
                    results={filterResultsByPrice('$')} 
                />
                <ResultsList
                    title="Big Pricier" 
                    results={filterResultsByPrice('$$')} 
                />
                <ResultsList
                    title="Big Spender" 
                    results={filterResultsByPrice('$$$')} 
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
});

export default SearchScreen;