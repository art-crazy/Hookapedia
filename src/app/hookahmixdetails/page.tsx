"use client"
import {Mix} from "ui-hookapedia";

const testData = {
  title: "Hookah Mix",
  id: "hookah-mix",
  reviews: "Hookah Mix",
  rating: 10,
  imageMain: "",
}

export default function Page () {
  return (
      <Mix recipe={testData}/>
  )
}
