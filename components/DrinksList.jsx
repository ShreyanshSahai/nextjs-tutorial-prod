import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrinksList = ({ drinks }) => {
    return (
        <ul className="pl-0 grid sm:grid-cols-2 gap-4">
            {drinks.map((drink) => {
                return (
                    <li key={drink.idDrink}>
                        <div className="text-2xl font-bold">
                            {drink.strDrink}
                        </div>
                        <Link href={`/drinks/${drink.idDrink}`}>
                            <div className="relative h-48 mb-4">
                                <Image
                                    className="rounded"
                                    src={drink.strDrinkThumb}
                                    fill
                                    alt={drink.strDrink}
                                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                                ></Image>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default DrinksList;
