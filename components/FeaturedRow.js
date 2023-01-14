import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCards from "./RestaurantCards";
import sanityClient from "../sanity";

export default function FeaturedRow({ id, title, description }) {
    const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "featured" && _id == $id]{
                ...,
                restaurant[]-> {
                ...,
                dishes[]->,
                type-> {
                    name
                }
                },
            }[0]
        `,
        { id }
      )
      .then((data) => {
         setRestaurants(data?.restaurant);
      })
      .catch(console.error);
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign size={20} color="#00ccbb" name="arrowright" />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}

        {restaurants.map((restaurant) => (
        <RestaurantCards
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
        />
        ))}

      </ScrollView>
    </View>
  );
}
