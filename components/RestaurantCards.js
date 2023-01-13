import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'


export default function RestaurantCards({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image
                source={{ uri: imgUrl }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View className='flex-row items-center space-x-1'>
                    <AntDesign name='star' color='green' size={22} />
                    <Text className='text-green-500 text-xs'>
                        <Text className='text-green-500'>{rating}</Text> · {genre}
                    </Text>
                </View>

                <View className='flex-row items-center space-x-1'>
                    <SimpleLineIcons name='location-pin' color='gray' size={22} />
                    <Text className='text-xs text-gray-500'>Nearby · {address} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}