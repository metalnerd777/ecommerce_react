import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @mediaonly screen and (max-width: 380px) {
      display: none;
    }
  `;
};
