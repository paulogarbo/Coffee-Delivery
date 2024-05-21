import { NavLink } from "react-router-dom";
import { Logo } from "../Logo";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { ActionsContent, DeliveryAddress, GoToShoppingCart, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="voltar para a home">
        <Logo width={85} height={40}/>
      </NavLink>

      <ActionsContent>
        <DeliveryAddress>
          <MapPin size={22} weight="fill" />
          <span>Taubaté, SP</span>
        </DeliveryAddress>
        <GoToShoppingCart to="/checkout" title="carrinho de compras">
          <ShoppingCart size={22} weight="fill" />
          <span>1</span>
        </GoToShoppingCart>
      </ActionsContent>
    </HeaderContainer>
  )
}
