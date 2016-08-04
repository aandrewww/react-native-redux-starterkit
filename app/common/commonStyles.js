import { StyleSheet } from 'react-native';

const HEADER_HEIGHT = 64;

export default StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: HEADER_HEIGHT
    },
    bg: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0
    },
    input: {
        height: 40,
        padding: 10,
        marginBottom: 10,
        borderColor: 'steelblue',
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'steelblue'
    },
    label: {
        color: 'steelblue',
        padding: 5,
        fontWeight: "700",
        fontStyle: 'italic'
    },
    errorText: {
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        fontWeight: "700",
        fontStyle: 'italic'
    }
});