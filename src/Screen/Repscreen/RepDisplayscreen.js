import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Pressable, FlatList,TextInput } from 'react-native';
import Header from '../../Components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context'
import contact from '../../../assets/data/contacts.json'
import { useNavigation } from '@react-navigation/core';

function RepDisplayscreen() {

    const [searchValue, setSearchValue] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contact); 
    
    const navigation = useNavigation();

    useEffect(() => {
        const newContacts = contact.filter((eachContact) => eachContact.user_display_name.includes(searchValue)); 
        setFilteredContacts(newContacts);
    },[searchValue])

    return (
        <SafeAreaView>
            <Header />
            <TextInput placeholder='Search for Rep' style={styles.searchInput} value={searchValue} onChangeText={setSearchValue}/>
            <View style={styles.repList}>
                <FlatList data={filteredContacts} renderItem={({ item }) => (<Pressable><View style={styles.container}><Text style={styles.repName}>{item.user_display_name}</Text><Text style={styles.phone}>{item.user_phone}</Text></View></Pressable>)}
                    ItemSeparatorComponent={() => (<View style={styles.seperator}></View>)}
                >

                </FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 15,
        marginTop: 15,
        flex: 1,
    },
    repList: {
        padding:10,
    },
    seperator: {
        backgroundColor: '#d4d0cf',
        width: '100%',
        height: 1
    },
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    repName: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft:15
    },
    phone: {
        marginTop:10,
        fontSize:14,  
    },
    searchInput: {
        backgroundColor: '#d4d0cf',
        padding: 5,
        borderRadius: 7,
        marginBottom: 10,
        width: "90%",
        marginLeft:18,
        textAlign:'center'
    },
    

})

export default RepDisplayscreen