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
    contentItem: {
        borderWidth: 3,
        borderColor: 'transparent',
        borderRadius: 10,
        padding: 3,
    },
    selectedBorder1: {
        borderColor: '#FBA826',
    },
    selectedBorder2: {
        borderColor: '#AED5EA',
    },
    innerItem1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-end"
    },
    button: {   
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
        zIndex: 1,
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
        left: 0,
        zIndex: 0
    },
    leftCont: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        bottom: "35%",
        zIndex: 0
    },
    contentContainer: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    content1: {
        width: 177,
        height: 143,
        backgroundColor: "#FBA826",
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 10
    }, 
    
    content2: {
        width: 177,
        height: 143,
        backgroundColor: "#AED5EA",
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 10
    },
    contentText: {
        fontSize: 14,
        fontWeight: 600,
        width: 140
    },
    margin: {
        width: 10,
        height: 143
    },
    leftP: {
        position: "absolute",
        width: 68,
        height: 212,
        left: 0,
        zIndex: 0
    },
    leftContP: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        bottom: "65%",
        zIndex: 0
    },
});
