import styled from "styled-components";

export const Content = styled.div`
  box-shadow: 0px 0px 10px 0px rgb(180 180 180);
  border: 4px solid #f8981c;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  padding: 32px 48px;
  background-color: #fff;
  max-width: 480px;
  position: relative;
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
  z-index: 3;
`;

export const Logo = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const H1 = styled.h1`
  font-size: 24px;
  margin: 8px auto;
  font-weight: bold;
  text-align: center;
  color: #666;
`;

export const P = styled.div`
  margin: 8px 0;
  text-align: justify;
`;
export const Form = styled.div``;

export const Label = styled.form`
  font-size: 12px;
  line-height: 22px;
`;

export const InputTypeText = styled.input`
  border-radius: 16px;
  width: calc(100% - 32px);
  border: 1px solid #aaa;
  box-shadow: 0px 0px 4px #eee;
  max-width: 100%;
  border-radius: 6px;
  padding: 8px 16px;
  color: #070707;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: 0px 0px 4px #eee;
  max-width: 100%;
`;

export const InputTypeSubmit = styled.input`
  border-radius: 6px;
  cursor: pointer;
  background-color: #f8981c;
  border-color: #f39318;
  width: 100%;
  border: none;
  padding: 16px 0;
  color: #fff;
  font-weight: bold;
  transition-property: border-color, background-color;
  transition-duration: 0s, 0.2s;
  transition-timing-function: ease, ease-out;
  transition-delay: 0s, 0s;
  &:hover {
    background-color: #f8ae4e;
    cursor: pointer;
  }
`;
