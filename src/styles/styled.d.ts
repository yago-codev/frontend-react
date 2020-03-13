import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title_theme: string,

    colors: {
      moovin: string,
      primary: string,
      secondary: string,
      tertiary: string,
      font_primary: string,
      font_secondary: string,
      font_tertiary: string,
      border: string
    }
  }
}