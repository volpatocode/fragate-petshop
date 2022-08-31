import { Box } from "@mui/material";
import styled from "styled-components";
import Carousela from "react-multi-carousel";

export const SimilarSection = styled(Box)`
 display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  justify-content: center;
`;

export const SectionTitle = styled.h3`
  color: #007fe8;
`;


export const Carousel = styled(Carousela)`

.carousel-item {
    :nth-child(1) {
        margin: 0 20px 0 0;
    }
    :last-child {
        margin: 0 0 0 20px;
    }
    margin: 0 20px;
}

`;
