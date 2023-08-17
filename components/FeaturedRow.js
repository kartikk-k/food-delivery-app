import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const dishes = [
    {
        id: 1,
        name: "Sushi",
        description: "Japan's most famous dish",
        price: 120,
        image: "https://bit.ly/3jNPTAR"
    }, {
        id: 2,
        name: "Noodles",
        description: "Long long noodles",
        price: 50,
        image: "https://bit.ly/3Cue7qy"
    }
]

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="flex-row mt-4 items-center justify-between px-4">
                <Text className="font-bold text-lg text-gray-800">{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restaurant cards */}
                <RestaurantCard
                    id={1212}
                    imgUrl="https://bit.ly/3jNPTAR"
                    title="Sushi"
                    rating={4.5}
                    genre="Japanase"
                    address="Downtown Dubai"
                    short_description="This is testing description"
                    dishes={dishes}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={1212}
                    imgUrl="https://bit.ly/3Ze0tS5"
                    title="Pizza"
                    rating={4.5}
                    genre="Japanase"
                    address="Downtown Dubai"
                    short_description="This is testing description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={1212}
                    imgUrl="https://bit.ly/3Cue7qy"
                    title="Noodles"
                    rating={4.5}
                    genre="Japanase"
                    address="Downtown Dubai"
                    short_description="This is testing description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow