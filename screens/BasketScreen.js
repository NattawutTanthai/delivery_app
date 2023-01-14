import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectrestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasketScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectrestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket , setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    
  }, [items])

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
}
