import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 45,
        color: '#fff',
        top: 130,
        width: 200,
        left: 35
    },
    content: {
        width: '100%',
        position: 'absolute',
        top: 300,
        alignItems: 'center'
    },
    input: {
        width: '85%',
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding: 5,
        marginVertical: 18,
        fontWeight: 'bold',
    },
    button: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    circle: {
        width: 80,
        height: 80,
        backgroundColor: '#3D4249',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 40,
        height: 30
    },
    footer: {
        top: '22%',
        width: '85%',
    },
    textFooter: {
        textDecorationLine: "underline",
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default styles;