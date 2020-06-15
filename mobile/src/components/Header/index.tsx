import React, { useRef }from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

interface Props  {
    state: boolean,
    onMenuOpened: (state: boolean) => void,
    handleMenuOpened: () => void
}

const Header : React.FC<Props> = ({ state, onMenuOpened, handleMenuOpened }) => {

    function handleMenuOpen() {
        onMenuOpened(!state)
        handleMenuOpened();
    }

    return (
        <>
        <View style={styles.header}>
            <TouchableOpacity onPress={handleMenuOpen}> 
                <Image source={require('../../assets/menu.png')} style={styles.menuIcon} />
            </TouchableOpacity>

            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Icon name="calendar" size={30} color="#FFF" style={styles.calendarIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.userIcon}>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        width: 30,
        height: 30
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF'
    },
    calendarIcon: {
        paddingHorizontal: 20
    },
})