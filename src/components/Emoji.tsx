import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUP from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
//key ko object ky sath render kro or object ko component ky sath
interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  // we have any number of keys of type number error, to solve, annontate it
  //  called index signaturing,

  const emojiMap: { [key: number]: ImageProps } = {
    //you define a map where the key is the rating (3, 4, or 5) and the value is the image object
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUP, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };
  return (
    //render values associated with given key
    <Image {...emojiMap[rating]} marginTop={1}></Image>
    //emojiMap[rating] fetches the image object corresponding to the rating key.
    // By using the spread operator (...emojiMap[rating]), it passes the image properties (src and alt) to the <Image> component
    // 3 ky sath aik image associate ho gi 4 ky sath ho gi 5 ky sath
  );
};

export default Emoji;
