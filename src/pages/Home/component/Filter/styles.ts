import styled from 'styled-components'

export const ButtonFilter = styled.button`
  font-size: 0.625rem;
  font-weight: bold;

  padding: 0.375rem 0.75rem;
  background: none;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['yellow-dark']};

  &:hover {
    background-color: ${(props) => props.theme['base-card']};
  }
`