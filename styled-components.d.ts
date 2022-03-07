import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: 'string';
    color: 'string';
  }
  export interface darkTheme {
    bg: 'string';
    color: 'string';
  }
  export interface lightTheme {
    bg: 'string';
    color: 'string';
  }
}
