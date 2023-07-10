
import { View, Image, Text, StyleSheet} from "react-native"

export default function RestCard({ restaurant }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image}
            source={{
                uri: restaurant.photo_url,
                cache: "force-cache",
            }} />
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.rating}>
            {
                (restaurant.rating.length > 0)
                ? "⭐️".repeat(restaurant.rating)
                : null
            }
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#a3a3a3',
        borderStyle: 'solid',
    },
    card: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
},
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        
        
    },
    title: {
        color: `#203040`,
        fontSize: 28,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 12,
    },
})