"use client";
import { TypeAnimation } from 'react-type-animation';


export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Data Scientist',
        1000,
        ' AI Engineer',
        1000,
        ' Designer',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1em', display: 'inline-block', color: "#517cdb"}}
      repeat={Infinity}></TypeAnimation>
  )
}
