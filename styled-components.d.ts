import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    chartBg: string;
    color: string;
  }
  export interface darkTheme {
    bg: string;
    chartBg: string;
    color: string;
  }
  export interface lightTheme {
    bg: string;
    chartBg: string;
    color: string;
  }
}
