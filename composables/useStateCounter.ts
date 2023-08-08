import { useState } from "nuxt/app"

export default () => {
  return useState('state-counter', () => 0)
}
