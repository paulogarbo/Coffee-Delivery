import styled from 'styled-components'

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
`

export const CatalogHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  margin-top: -20px;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 0.25rem;

    li {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.625rem;
      font-weight: 800;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }
`

export const CatalogContent = styled.main`
  margin-top: 1rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 1.25rem;
  align-items: center;
  text-align: center;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
  }
`
