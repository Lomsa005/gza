// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        width: "100%"
    },
    item2: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        zIndex: 5
    },
    innerItem1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-end"
    },
    button: {   
        backgroundColor: '#FBA826',
        padding: 10,
        borderRadius: 5,
        width: 351,
        height: 115,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25    ,
    },
    buttonText: {
        color: 'black',
        fontSize: 31,
        textAlign: 'center',
    },
    item1: {    
        height: '40%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 10,
    },
    image: {
        borderRadius: 5,
        width: 80,
        height: 80,
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
        position: 'relative',
        left: 50,
        bottom: 30,
    },
    title: {
        fontSize: 35,    
        color: 'black',
        fontFamily: 'BPG-Nino-Mtavruli-Normal',
        zIndex: 10
    },                                      

    btnOuter: {
        width: 369,
        height: 129,
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
        fontSize: 45,
    },
    up: {
        position: 'absolute',
        width: 400,
        height: 300,
        zIndex: 1
    },
    left: {
        position: "absolute",
        width: 68,
        height: 212,
        left: 0
    },
    leftCont: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        bottom: "35%",
        zIndex: 1
    }
});
