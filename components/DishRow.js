import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItemsWithId, addToBasket, removeFromBasket } from '../features/basketSlice'


const DishRow = ({ key, id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selectBasketItemsWithId(state, id))
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return
        dispatch(removeFromBasket({ id }))
    }

    return (
        <>
            <TouchableOpacity key={key} onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">${price}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#f3f3f4"
                            }}
                            className="h-20 w-20 bg-gray-300 p-4 rounded-md"
                            source={{
                                url: image
                            }} />
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View className="bg-white px-4" key={items.key}>
                    <View className="flex-row items-center justify-center space-x-2">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <MinusCircleIcon size={40} color="#00ccbb" opacity={!items.length ? 0.5 : 1} />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon
                                size={40}
                                color="#00ccbb" />
                        </TouchableOpacity>

                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow