"use client"

import ReactDOM from "react-dom"

export function PreloadResources() {
  ReactDOM.preload(
    "/1500x500.jpg",
    { as: "image" },
  )

  return null
}