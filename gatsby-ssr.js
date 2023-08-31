import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/BaroqueScript.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}