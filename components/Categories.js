import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

export default function Categories() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type == "category"]
      `
    ).then((data) => {
      setCategories(data);
    }).catch(console.error);
  }, []); 

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10,
    }}>
      {/* Categoty Card */}
      {Categories.map((category) => (
      <CategoryCard key={category._id} imgUrl={urlFor(category.Image).width(200).url()} title={category.name}/>
      ))}
    </ScrollView>
  );
}
