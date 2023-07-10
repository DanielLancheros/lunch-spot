import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

export default function Tray({setSelectRestaurant}) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }

    const clear = () => {
        setSelectRestaurant(0)
    }

    return (
        <View style={styles.tray}>
            <View style={styles.buttonList}>
                <TouchableOpacity onPress={choose} style={styles.button}>
                    <Text style={styles.buttonText}>🎲 Shuffle Now</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={clear} 
                style={[styles.button, styles.resetButton]}>
                    <Text style={[styles.buttonText, styles.resetButtonText]}>🔁 Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#ed714d',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#f79477', 
    },
    
    resetButtonText: {
        color: '#777',
    },

    resetButton: {
        backgroundColor: `#f4f5f6`,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#f79477',
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 600,
    },

    tray: {
        width: '100%',
        backgroundColor: '#eeeeff',
        height: 120,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        }
    }
)