import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';

import Header from '../../components/Header'
import Map from '../../components/Map';
import Menu from '../../components/Menu';

const Dashboard = () => {
    const [optionSelected, setOptionSelected] = useState(true);
    const [menuOpened, setMenuOpened] =useState(true);
    const menu = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 300
        }).start();
      };
    
      const fadeOut = () => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300
        }).start();
      };

    const open = () => {
        Animated.timing(menu, {
          toValue: 0,
          duration: 300
        }).start();
      };
    
      const close = () => {
        Animated.timing(menu, {
          toValue: Dimensions.get('screen').width * 0.7,
          duration: 300
        }).start();
      };

    function handleMenuOpened() {
        if(menuOpened === false) {
            open();
            fadeOut();
            setMenuOpened(!menuOpened);
        } else {
            close();
            fadeIn();
            setMenuOpened(!menuOpened);
        }
    }

    function handleOptionSelected() {
        setOptionSelected(!optionSelected);
    }

    return (
        <>
        <StatusBar barStyle="light-content"  backgroundColor="transparent"  translucent/>
        
        <Animated.View onTouchEnd={handleMenuOpened} style={[
            styles.overlay, 
            { left: menu, opacity: opacity, zIndex: menuOpened ? -1 : 1 }
            ]}></Animated.View>

        <Animated.View style={[styles.constainer, { left: menu }]}>
            <Header state={menuOpened} onMenuOpened={setMenuOpened} handleMenuOpened={handleMenuOpened}/>
            <Menu state={menuOpened} onMenuOpened={setMenuOpened} handleMenuOpened={handleMenuOpened}/>
            <View style={styles.main}>

                <View style={{paddingHorizontal: 20}}>
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
                </View>

                <ScrollView style={[styles.cards, 
                {
                    display: optionSelected ? 'flex' : 'none'
                }]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{ paddingHorizontal: 20}}>
                    <View style={styles.card}>

                    </View>
                    <View style={styles.card}>

                    </View>
                    <View style={styles.card}>

                    </View>
                </ScrollView>

                <View style={{ display: optionSelected ? 'none' : 'flex', flex: 1}}>
                    <Map />
                </View>

                

            </View>
        </Animated.View>
        </>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#11181D',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    main: {
        flex: 1
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
    },
    cards: {
        marginTop: 16,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        height: 350,
        width: 300,
        marginRight: 10
    },
    overlay: {
        backgroundColor: '#000',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
})