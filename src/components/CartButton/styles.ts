import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({ 
    color: "#8A8A8A",
    cursor: "pointer",
    '& .MuiBadge-badge': {
    backgroundColor: "#FF9A57",
      right: -1,
      top: 19,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
