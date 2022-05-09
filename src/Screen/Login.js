import React,{useState} from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { managerName } from '../recoil/atom';
import { useNavigation } from '@react-navigation/core'


function Login() {
    const [userName, setUserName] = useRecoilState(managerName);
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const toRepPage = () => {
        navigation.navigate('RepPage');
    }
    
    return (
        <View style={styles.page}>
            <TextInput placeholder='username' value={userName} onChangeText={setUserName} style={styles.input} autoCapitalize="none"/>
            <TextInput placeholder='password' value={password} onChangeText={setPassword} style={styles.input} secureTextEntry/>
            <Pressable style={[styles.button, { color: 'white' }]} onPress={toRepPage}>
                <Text>Login</Text>
            </Pressable>
            
        </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        alignItems: 'stretch',
        justifyContent:'center'
    },
    input: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#b50b22',
        padding: 10,
        marginVertical: 10,
        width: '25%',
        alignItems: 'center',
        borderRadius: 5,
    },
})

export default Login