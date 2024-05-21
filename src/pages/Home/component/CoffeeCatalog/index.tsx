import coffeeImg from '../../../../assets/imagemcoffee.png'
import { CatalogContainer, CatalogContent, CatalogHeader } from './styles'

export function CoffeeCatalog() {
  return (
    <CatalogContainer>
      <CatalogHeader>
        <img src={coffeeImg} alt="" />
          
        <ul>
          <li>TRADICIONAL</li>
        </ul>
      </CatalogHeader>

      <CatalogContent>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CatalogContent>

      <div>
        <div>
          <span>R$</span>
          <span>9,90</span>
        </div>

        <div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button>CCC</button>
        </div>
      </div>
    </CatalogContainer>
  )
}