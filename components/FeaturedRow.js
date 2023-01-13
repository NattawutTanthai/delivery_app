import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import RestaurantCards from './RestaurantCards'


export default function FeaturedRow({id , title , description }) {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <AntDesign size={20} color='#00ccbb' name='arrowright'/>
        </View>

        <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal:15}}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* RestaurantCards... */}
            <RestaurantCards
                id={id}
                imgUrl='https://links.papareact.com/gn7'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='1-2-3, Shibuya, Tokyo'
                short_description='This is a Test des'
                dishes={[]}
                long={20}
                lat={30}
            />
            <RestaurantCards
                id={id}
                imgUrl='https://links.papareact.com/gn7'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='1-2-3, Shibuya, Tokyo'
                short_description='This is a Test des'
                dishes={[]}
                long={20}
                lat={30}
            />
            <RestaurantCards
                id={id}
                imgUrl='https://links.papareact.com/gn7'
                title='Yo! Sushi'
                rating={4.5}
                genre='Japanese'
                address='1-2-3, Shibuya, Tokyo'
                short_description='This is a Test des'
                dishes={[]}
                long={20}
                lat={30}
            />

        </ScrollView>
    </View>
  )
}