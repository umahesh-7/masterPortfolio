import React from "react";
import styled, { keyframes } from "styled-components";

// same hexagon & MU animations…
const drawHexagon = keyframes`
  from { stroke-dashoffset: 600; opacity: 0; }
  to   { stroke-dashoffset:   0; opacity: 1; }
`;
const drawText = keyframes`
  from { stroke-dashoffset: 1200; opacity: 0; }
  to   { stroke-dashoffset:    0; opacity: 1; }
`;

const LogoContainer = styled.div`
  width: 440px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RawLogo = styled.svg`
  height: 340px;
  width: 340px;

  .hexagon {
    fill: none;
    stroke: ${({ theme }) => theme.body || "#fff"};
    stroke-width: 3;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
    animation: ${drawHexagon} 4s ease forwards;
  }

  .letters {
    fill: none;
    stroke: ${({ theme }) => theme.body || "#fff"};
    stroke-width: 2;
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: ${drawText} 4s ease forwards;
    animation-delay: 1s;
  }
`;

const NameSVG = styled.svg`
  width: 800px;
  height: 140px;
  margin-top: 0px;

  text {
    fill: none;
    stroke: ${({ theme }) => theme.body || "#fff"};
    stroke-width: 1;
    paint-order: stroke;            /* ensures stroke renders on top */
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: ${drawText} 5s ease forwards;
    animation-delay: 2.5s;
  }
`;

const LoaderLogo = ({ theme }) => (
  <LogoContainer>
    <RawLogo viewBox="0 0 200 200">
      <polygon
        className="hexagon"
        points="100,20 170,60 170,140 100,180 30,140 30,60"
      />
      <text
        className="letters"
        x="100"
        y="115"
        fontSize="60"
        fontFamily="serif"
        textAnchor="middle"
      >
        MU
      </text>
    </RawLogo>

    <NameSVG viewBox="0 0 800 120">
      <text
        x="50%"
        y="90"
        textAnchor="middle"
        fontFamily="'Segoe Script', cursive"
        fontSize="48"
      >
        Mahesh Utlapalli
      </text>
    </NameSVG>
  </LogoContainer>
);

export default LoaderLogo;
