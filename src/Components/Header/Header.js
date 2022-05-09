import React from 'react'
import { View, StyleSheet, Pressable,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

function Header() {

    const navigation = useNavigation();

    const goBack = () => {
        console.warn("sd")
        navigation.goBack();
    }
    return (
        <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={goBack}>
                <Ionicons name='chevron-back' size={20} color="white" />
            </Pressable>
            <Text style={styles.appTitle}>GoGrade</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height:60,
        backgroundColor: '#b50b22',
        marginVertical:10
    },
    backButton: {
        top: 15,
        left:10,
    },
    appTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Header