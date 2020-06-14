import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput, Animated, ScrollView } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import Header from '../../components/Header'

const Dashboard = () => {
    const searchHeight = useRef(new Animated.Value(0)).current;
    const [optionSelected, setOptionSelected] = useState(true);

    function handleSearchOpen(scroll: number) {
        if(scroll < 0) {
            Animated.timing(searchHeight, {
                toValue: 60,
                duration: 300
              }).start();
        } else {
            Animated.timing(searchHeight, {
                toValue: 0,
                duration: 300
              }).start();
        }
    }

    function handleOptionSelected() {
        setOptionSelected(!optionSelected);
    }

    return (
        <>
        <StatusBar barStyle="light-content"  backgroundColor="transparent"  translucent/>
            <View style={styles.constainer}>

                <Header />

                <Animated.View style={[styles.search, {
                    height: searchHeight
                }]}>
                    <View style={styles.inputIcon}>
                        <Icon name="search" size={21} color="#000"/>
                    </View>
                    <TextInput 
                        style={styles.input}
                        placeholder="O que tem em mente?"
                        autoCorrect={false}
                        />
                </Animated.View>

                <ScrollView style={styles.main} onScrollEndDrag={(data) => handleSearchOpen(data.nativeEvent.contentOffset.y)}>

                    <Text style={styles.title}>Barbeiros</Text>
                    <View style={styles.options}>
                    <TouchableOpacity onPress={handleOptionSelected}>
                        <Text style={[
                            styles.subTitle,
                            optionSelected ? styles.enabled : styles.disabled
                        ]}>Populares</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOptionSelected}>
                        <Text style={[
                            styles.subTitle,
                            optionSelected ? styles.disabled : styles.enabled
                        ]}>Mapa</Text>
                    </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#11181D',
        paddingHorizontal: 20,
    },
    
    main: {
        flex: 1,        
    },
    
    input: {
        backgroundColor: '#EEEEEE',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 20,
        fontSize: 16,
        flex: 1
    },
    inputIcon: {
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 8,
        paddingLeft: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    title: {
        color: "#F2EFED",
        fontSize: 28,
        fontFamily: 'Ubuntu_500Medium'    
    },
    subTitle: {
        color: "#DBD3CD",
        lineHeight: 28,
        fontFamily: 'Ubuntu_700Bold'
    },
    options: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    enabled: {
        fontSize: 22,
    },
    disabled: {
        fontSize: 16
    }
})