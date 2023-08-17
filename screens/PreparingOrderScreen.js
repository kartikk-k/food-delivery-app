import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'


const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('DeliveryScreen')
        }, 4000)
    })

    return (
        <SafeAreaView className="flex-1 bg-[#00ccbb] justify-center items-center">
            <Text className="text-white text-xl">Preparing Your Order</Text>
        </SafeAreaView>
    )
}

export default PreparingOrderScreen