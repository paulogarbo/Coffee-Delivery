import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

export const ActionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const DeliveryAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  svg {
    color: ${(props) => props.theme["purple"]};
  }
`

export const GoToShoppingCart = styled(NavLink)`
  position: relative;

  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  background-color: ${(props) => props.theme["yellow-light"]};

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  span {
    position: absolute;
    right: -8px;
    top: -8px;

    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
