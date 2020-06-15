import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';

interface Props  {
    state: boolean,
    onMenuOpened: (state: boolean) => void,
    handleMenuOpened: () => void
}
const Menu : React.FC<Props> = ({ state, onMenuOpened, handleMenuOpened }) => {
    const menuOpened = useRef(new Animated.Value(Dimensions.get('screen').width)).current;

    return (
        <Animated.View style={[styles.container, { right: menuOpened }]}>
            <View style={styles.main}>
                <Text>Componente Menu</Text>
            </View>
            
        </Animated.View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        position: 'absolute',
        height: '100%',
        width: '70%'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})