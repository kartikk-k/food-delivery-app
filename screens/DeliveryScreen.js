import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/outline'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

    return (
        <View className="flex-1">
            <SafeAreaView className="bg-[#00ccbb]  z-50 relative">
                <View className="flex-row p-5 justify-between items-center">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-xl">Order Help</Text>
                </View>

                <View className="relative top-10 bg-white mx-5  rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-500">Estimated arrival</Text>
                            <Text className="text-3xl font-bold">40-45 min</Text>
                        </View>
                        <Image
                            className="h-20 w-20"
                            source={{
                                url: "https://links.papareact.com/fls"
                            }} />
                    </View>
                    <Text>You order at {restaurant.title} is been prepared</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: "25.2048° N",
                    longitude: "55.2708° E",
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                mapType="mutedStandard"
                className="flex-1 mt-10 z-0"
            >
                <Marker
                    coordinate={{
                        latitude: "25.2046° N",
                        longitude: "55.2695° E"
                    }}
                    title={restaurant.title}
                    description={restaurant.description}
                    identifier="origin"
                    pinColor='#00ccbb'
                />

            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    className="h-12 w-12 rounded-full ml-5 bg-gray-500"
                    source={{
                        url: "https://links.papareact.com/wru"
                    }} />
                <View className="flex-1">
                    <Text className="text-lg">Ben Stokes</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen