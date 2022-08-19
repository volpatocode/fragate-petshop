import * as React from "react";
import { CategoryBarButton } from "./styles";
import { CategoryBarItem } from "./styles";
import { CategoryBarButtonMenu } from "./styles";
import PopupState,  { bindTrigger, bindMenu } from "material-ui-popup-state";
import Icon from "../Icon";

export default function index() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <CategoryBarButton variant="contained" {...bindTrigger(popupState)}>
            Cachorros
          </CategoryBarButton>
          <CategoryBarButtonMenu {...bindMenu(popupState)}>
            <CategoryBarItem onClick={popupState.close}>
              Rações <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Ossinhos e Petiscos{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Medicina e Saúde{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Higiene e Limpeza{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Shampoos e Cosméticos{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Acessórios para Alimentação{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Roupas e Acessórios{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
            <CategoryBarItem onClick={popupState.close}>
              Casinhas e Outros{" "}
              <Icon type="arrowRight" size="small" iconcolor="grey" />
            </CategoryBarItem>
          </CategoryBarButtonMenu>
        </>
      )}
    </PopupState>
  );
}
