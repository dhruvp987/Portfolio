/*
 * Credit: TCGDex for API that provides Pokemon TCG card images.
 */

import { useState } from 'react';
import useFetchJson from './useFetchJson.tsx';
import './RandomPokeCard.css';

interface Card {
  image: string;
}

function RandomPokeCard() {
  const URL = 'https://api.tcgdex.net/v2/en/cards';
  const IMG_QUALITY = 'high';
  const IMG_FORMAT = 'webp';
  const IMG_URL_END = `/${IMG_QUALITY}.${IMG_FORMAT}`;

  const [render, setRender] = useState(false);

  function random<T>(arr: ArrayLike<T>): T {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }

  function retry<T>(func: () => T, undesired: any): T {
    let res = undesired;
    while (res === undesired) {
      res = func();
    }
    return res;
  }

  const cards: ArrayLike<Card> | undefined = useFetchJson<ArrayLike<Card>>(URL, [render]);
  const imgUrl = typeof cards === 'object' ? retry<string>(() => random<Card>(cards).image, undefined) + IMG_URL_END : undefined;

  return (
    <div className="random-poke-card-div">
      <button className="random-poke-card-button"
              onClick={() => {setRender(!render)}}>
        New Card
      </button>
      <img className="random-poke-card-img"
           src={imgUrl}
	   alt="Random Pokemon Card" />
    </div>
  );
}

export default RandomPokeCard;
