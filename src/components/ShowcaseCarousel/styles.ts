import styled from "styled-components";
import { Box } from "@mui/material";

export const Img = styled.img`
  width: 100%;
`;

export const ShowcaseCarousel = styled(Box)`
  .dots {
    padding-bottom: 1rem;
    button {
      border: none;
    }
  }

  .react-multi-carousel-dot button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .react-multi-carousel-dot--active button {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
