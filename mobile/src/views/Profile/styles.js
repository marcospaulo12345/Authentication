import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        bottom: 0
    },
    content: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        top: 80
    },
    userPhoto: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 28,
        color: '#fff'
    },
    boxInput: {
        width: '80%',
        height: 240,
        top: 10,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,
    },
    input: {
        width: '100%',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#AEACAA',
        padding: 5,
        marginVertical: 10,
        fontWeight: 'bold'        
    },
    buttons: {
        width: '100%',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonUpdate: {
        backgroundColor: '#494E58',
        paddingHorizontal: 20,
        paddingVertical: 5,        
        borderRadius: 40
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    buttonDelete: {
        backgroundColor: '#494E58',
        paddingHorizontal: 20,
        paddingVertical: 5,        
        borderRadius: 40
    },
    back: {
        position: 'absolute',
        top: 30,
        left: 30  
    },
    imageArrowLeft: {
        width: 13,
        height: 24,      
    },
    exit: {
        position: 'absolute',
        top: 30,
        right: 30
    },
    textExit: {
        color: '#fff',
        fontSize: 16
    },
    footer: {
        top: '22%',
        width: '80%',
    },
    textFooter: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
    },
});

export default styles;