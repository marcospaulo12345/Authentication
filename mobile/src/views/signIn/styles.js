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
        paddingBottom: 80
    }, 
    input: {
        fontSize: 16,
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: '#AEACAA',
        marginVertical: 18,
        fontWeight: 'bold',
        padding: 5
    },
    button: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
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
        paddingHorizontal: 30
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
        ...StyleSheet.absoluteFill,
        width: 13,
        height: 24,      
    }
});

export default styles;