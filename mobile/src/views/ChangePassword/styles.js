import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 45,
        color: '#fff',
        top: 130,
        width: 200,
        left: 32
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }, 
    input: {
        fontSize: 16,
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: '#99948F',
        marginVertical: 18,
        fontWeight: 'bold',
        padding: 5
    },
    button: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 80
    },
    circle: {
        width: 80,
        height: 80,
        backgroundColor: '#3D4249',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',        
    }, 
    image: {
        width: 40,
        height: 30,
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        top: 0
    },
    textFooter: {
        textDecorationLine: "underline",
        fontWeight: 'bold'
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    password: {
        position: 'relative',
        width: '85%',
        flexDirection: 'row'
    },  
    iconPassword: {
        width: 28,
        height: 28,
        marginVertical: 20,
        marginLeft: 10
    }
});

export default styles;