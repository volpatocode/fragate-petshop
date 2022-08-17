import * as React from 'react';
import { CategoryBarButton } from './styles';
import { CategoryBarItem } from './styles';
import { CategoryBarButtonMenu } from './styles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <CategoryBarButton variant="contained" {...bindTrigger(popupState)}>
            Cachorros
          </CategoryBarButton>
          <CategoryBarButtonMenu {...bindMenu(popupState)}>
            <CategoryBarItem onClick={popupState.close}>Rações</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Ossinhos e Petiscos</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Medicina e Saúde</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Higiene e Limpeza</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Shampoos e Cosméticos</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Acessórios para Alimentação</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Roupas e Acessórios</CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>Casinhas e Outros</CategoryBarItem>
          </CategoryBarButtonMenu>
        </React.Fragment>
      )}
    </PopupState>
  );
}