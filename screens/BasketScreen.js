import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBaskteTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'


const BasketScreen = () => {
    const navigation = useNavigation()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBaskteTotal)
    const dispatch = useDispatch()

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [items])

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00ccbb] shadow bg-white">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurant.title}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="bg-gray-100 rounded-full top-3 right-5 absolute"
                    >
                        <XCircleIcon color="#00ccbb" height={50} width={50} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center align-middle space-x-4 px-4 py-3 bg-white">
                    <Image
                        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                        source={{
                            url: "https://links.papareact.com/wru"
                        }} />
                    <Text className="flex-1">Deleiver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text>{items.length} x </Text>
                            <Image
                                className="h-12 w-12 rounded-full"
                                source={{
                                    url: (items[0]?.image)
                                }}
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">${items[0]?.price}</Text>
                            <TouchableOpacity>
                                <Text
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                    className="text-[#00ccbb] text-xs">
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">${basketTotal}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">${5.99}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="">Order Total</Text>
                        <Text className="font-extrabold">${5.99 + basketTotal}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#00ccbb] p-4">
                        <Text className="text-center text-white text-xl font-extrabold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen