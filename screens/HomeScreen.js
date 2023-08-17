import React from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { UserIcon, ChevronDownIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

export default function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-8">

            {/* header */}
            <View className="flex-row mx-4 py-2 items-center space-x-2">
                <Image
                    source={{ url: "https://links.papareact.com/wru" }}
                    className="h-7 w-7 rounded-full bg-gray-300 p-4"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xs text-gray-400">Deliver Now</Text>
                    <Text className="font-bold text-lg">
                        Current Location
                        <ChevronDownIcon size={22} color="#00ccbb" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00ccbb" />

            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md">
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsHorizontalIcon color="#00ccbb" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 150,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured rows */}
                <FeaturedRow
                    id="12345"
                    title="Featured"
                    description="paid placements form our partners"
                />
                <FeaturedRow
                    id="12345"
                    title="Total Discounts"
                    description="Enjoy on India win!"
                />
                <FeaturedRow
                    id="12345"
                    title="Offers near you"
                    description="Support local restaurants"
                />

            </ScrollView>

        </SafeAreaView>
    )
}