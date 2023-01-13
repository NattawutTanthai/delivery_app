import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

export default function HomeScreen() {
  const navigation = useNavigation()
  const [FeaturedCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(
      `
    * [_type == "featured"]{
      ...,
      restaurants[]-> {
        ...,
        dishes[]->
      }
    }
      `
    )
      .then((data) => {
        setFeaturedCategories(data)
      })

  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      <View className='flex-row pb-3 items-center mx-3 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className='h-10 w-10 bg-gray-300 rounded-full'

        />
        <View className='flex-1'>
          <Text className='font bold text-gray-400 text-xs'>Delivery Now!</Text>
          <Text className='font-bold text-xl'>Current Location
            <Feather name='chevron-down' size={20} color='#00ccbb' />
          </Text>
        </View>
        <Ionicons name='person-outline' size={35} color='#00ccbb' />
      </View>

      <View className='flex-row items-center space-x-2 mx-4 pb-2'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
          <Ionicons name='search-outline' size={20} color='gray' />
          <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' />
        </View>
        <Feather name='sliders' size={20} color='#00ccbb' />
      </View>

      <ScrollView
        className='bg-gray-300'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id='1'
          title='Featured'
          description='Top picks for you'
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description='Top picks for you'
        />
        {/* Offers near you */}
        <FeaturedRow
          id='3'
          description='Top picks for you'
          title='Offers near you'
        />

      </ScrollView>
    </SafeAreaView>
  )
}