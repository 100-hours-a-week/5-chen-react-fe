import { createGlobalStyle } from "styled-components";
import styles from "css/GlobalStyle.css"
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${styles}
`
export default GlobalStyle;