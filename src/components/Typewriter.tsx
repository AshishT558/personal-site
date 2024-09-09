"use client";
import { TypeAnimation } from 'react-type-animation';

interface Props {
  text: string
}

export default function Typewriter({text} : Props) {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Development',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Data Science',
        1000,
        'Artificial Intelligence',
        1000,
        'Machine Learning',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '2em', display: 'inline-block', color: "#2563eb"}}
      repeat={Infinity}></TypeAnimation>
  )
}
