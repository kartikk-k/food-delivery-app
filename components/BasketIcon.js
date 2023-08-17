import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBaskteTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'



const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBaskteTotal)

    if (items.length === 0) return null

    return (
        <View className="absolute w-full bottom-10 z-50">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center">
                <View className="bg-[#01a296] py-1 px-2 rounded-md">
                    <Text className="text-white font-extrabold text-lg">{items.length}</Text>
                </View>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg font-extrabold text-white">${basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon