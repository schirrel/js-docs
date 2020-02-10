import styled from "styled-components"

export const IframesStyle = styled.iframe`
  width: 70%;
  height: 285px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }

  @media (min-width: 1350px) {
    width: 40%;
  }
`
export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Loader = styled.div`
 position: absolute;
 width: 100px;
`