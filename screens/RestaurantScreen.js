import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } } = useRoute()

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
        }))
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image source={{
                        url: imgUrl
                    }}
                        className="w-full h-56"
                    />
                </View>
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-50 rounded-full">
                    <ArrowLeftIcon size={20} color="#00ccbb" />
                </TouchableOpacity>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        {/* short-info */}
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs">
                                    <Text className="text-green-600">{rating}</Text>
                                    . {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color="gray" opacity={0.4} size={22} />
                                <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" opacity="0.5" size={20} />
                        <Text className="text-md font-bold pl-2 flex-1">Have a food allergy?</Text>
                        <ChevronRightIcon color="#00ccbb" />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 my-3 font-bold text-xl">Menu</Text>

                    {/* Dishrows */}
                    {dishes.map((dish) => (
                        <DishRow
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            description={dish.description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen