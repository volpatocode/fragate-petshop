import styled from "styled-components";
import { Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export const BoxInteration = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const Star = styled(StarIcon)`
  color: #FF9A57;
`;

export const Img = styled.img`
  width: 100%;
`;

export const ProductSlider = styled(Box)`
  height: 387px;
  width: 362px;
  margin-top: 1rem;

  .dots {
    padding-bottom: 1rem;
    button {
      border: none;
    }
  }
  .react-multiple-carousel__arrow::before {
    color: #ff9a57;
  }
  .react-multiple-carousel__arrow {
    background-color: transparent;
  }
  .react-multi-carousel-dot button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .react-multi-carousel-dot--active button {
    background-color: #ff9a57;
  }
`;
