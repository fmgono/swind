// import "./global.css"
import * as colors from 'twind/colors'
import { setup  } from 'twind/shim'

setup({
  theme: {
    extend: {
      colors: {
        current: colors.blueGray[900],
        primary: {
          lightest: colors.blue[400],
          light: colors.blue[500],
          DEFAULT: colors.blue[700],
          dark: colors.blue[900],
        },
        secondary: {
          lightest: colors.indigo[400],
          light: colors.indigo[500],
          DEFAULT: colors.indigo[700],
          dark: colors.indigo[900],
        },
        success: {
          lightest: colors.green[400],
          light: colors.green[500],
          DEFAULT: colors.green[700],
          dark: colors.green[900],
        },
        danger: {
          lightest: colors.red[400],
          light: colors.red[500],
          DEFAULT: colors.red[700],
          dark: colors.red[900],
        },
        info: {
          lightest: colors.purple[400],
          light: colors.purple[500],
          DEFAULT: colors.purple[700],
          dark: colors.purple[900],
        },
        warning: {
          lightest: colors.yellow[400],
          light: colors.yellow[500],
          DEFAULT: colors.yellow[700],
          dark: colors.yellow[900],
        },
        blue: {
          lightest: colors.blue[400],
          light: colors.blue[500],
          DEFAULT: colors.blue[700],
          dark: colors.blue[900],
        },
        indigo: {
          lightest: colors.indigo[400],
          light: colors.indigo[500],
          DEFAULT: colors.indigo[700],
          dark: colors.indigo[900],
        },
        green: {
          lightest: colors.green[400],
          light: colors.green[500],
          DEFAULT: colors.green[700],
          dark: colors.green[900],
        },
        red: {
          lightest: colors.red[400],
          light: colors.red[500],
          DEFAULT: colors.red[700],
          dark: colors.red[900],
        },
        purple: {
          lightest: colors.purple[400],
          light: colors.purple[500],
          DEFAULT: colors.purple[700],
          dark: colors.purple[900],
        },
        yellow: {
          lightest: colors.yellow[400],
          light: colors.yellow[500],
          DEFAULT: colors.yellow[700],
          dark: colors.yellow[900],
        },
        orange: {
          lightest: colors.orange[400],
          light: colors.orange[500],
          DEFAULT: colors.orange[700],
          dark: colors.orange[900],
        },
        gray: {
          lightest: colors.blueGray[400],
          light: colors.blueGray[500],
          DEFAULT: colors.blueGray[700],
          dark: colors.blueGray[900],
        },
      }
    }
  }
})

import App from './App.svelte'
import color from './constant/color'

const app = new App({
  target: document.body
})

export default app
