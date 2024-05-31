// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    innerItem1: {},
    button: {
        backgroundColor: '#FBA826',
        padding: 10,
        borderRadius: 5,
        width: 350,
        height: 115,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 33,
    },
    buttonText: {
        color: 'black',
        fontSize: 26,
        textAlign: 'center',

    },
    item1: {    
        height: '40%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    image: {
        borderRadius: 5,
        width: 80,
        height: 80,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        color: 'black',
    },                                      

    btnOuter: {
        width: 370,
        height: 130,
        backgroundColor: "none",
        borderWidth: 5,
        borderColor: '#FBA826',
        borderRadius: 33,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    span: {
        fontWeight: "800",
    }
});
