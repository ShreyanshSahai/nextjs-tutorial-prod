import DrinksList from "@/components/DrinksList";
import React from "react";
import { resolve } from "styled-jsx/css";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error fetching the data");
    }
    const data = await response.json();
    return data;
};

const DrinksPage = async () => {
    const data = await fetchData();
    return (
        <div>
            <DrinksList drinks={data.drinks}></DrinksList>
        </div>
    );
};

export default DrinksPage;
