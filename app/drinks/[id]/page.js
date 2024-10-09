import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const fetchData = async (id) => {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
        throw new Error("Error fetching the data...");
    }
    return await response.json();
};

const SingleDrinksPage = async ({ params }) => {
    const data = await fetchData(params.id);
    const drink = data?.drinks;
    if (drink) {
        return (
            <div>
                <Link className="btn btn-primary mb-4" href="/drinks">
                    Back To Drinks
                </Link>
                <Image
                    className="rounded"
                    width="200"
                    height="300"
                    src={drink[0]?.strDrinkThumb}
                ></Image>
                <div className="text-2xl mt-6">{drink[0]?.strDrink}</div>
            </div>
        );
    } else {
        return (
            <div>
                <Link className="btn btn-primary mb-4" href="/drinks">
                    Back To Drinks
                </Link>
                <div className="text-2xl text-red-500">
                    Incorrect URL. Please check again.
                </div>
            </div>
        );
    }
};

export default SingleDrinksPage;
