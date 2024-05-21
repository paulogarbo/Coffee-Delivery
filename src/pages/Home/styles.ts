import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.25rem 10rem;
`

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  margin-bottom: 6.75rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.125rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
      filter: drop-shadow(0 48px 100px ${(props) => props.theme['purple-light']});
    }

    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      filter: drop-shadow(0 48px 100px ${(props) => props.theme['yellow-light']});
    }
  }

  img {
    filter: drop-shadow(0 48px 100px ${(props) => props.theme['yellow-light']});
  }
`

export const ColBanner = styled.section`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem; 
    width: 100%;

    li {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.75rem;
      min-width: 14.437rem;
      filter: drop-shadow(0 48px 100px ${(props) => props.theme['purple']});
    }
  }
`

const STATUS_COLOR = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const 

export interface PropsBenefit {
  backgroundColor: keyof typeof STATUS_COLOR
}

export const BenefitCoffee = styled.li<PropsBenefit>`
  i {
    width: 2rem;
    height: 2rem;
    padding: 8px;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme[STATUS_COLOR[props.backgroundColor]]};
    color: ${(props) => props.theme.white};
  }
` 

export const CoffeeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.375rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`
