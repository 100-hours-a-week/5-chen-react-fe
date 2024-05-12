import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

// language=CSS
const GlobalStyle = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: black;
    }

    ul {
        list-style: none;
    }

    :root {
        --bg-color: rgba(244, 245, 247, 1);
        --deep-magenta: rgba(127, 106, 238, 1);
        --profile-img-grey: rgba(217, 217, 217, 1);
        --profile-img-white: #E9E9E9;
        --magenta: #ACA0EB;
        --z-dimm: 1233;
        --z-modal: 1234;
    }

    @font-face {
        /* 애플산돌고딕 폰트 적용 */
        font-family: "SagacSagac";
        src: url("/fonts/Human-beomseok.ttf") format("truetype");
        font-weight: normal;
    }


    body {
        margin: 0 0 0 0;
        max-width: 1920px;
        min-height: 1080px;
        background: var(--bg-color);
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export default GlobalStyle;