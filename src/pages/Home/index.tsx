import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import { BenefitCoffee, CoffeeHeader, ColBanner, HomeContainer, HomeHeader } from "./styles"
import bannerCoffee from '../../assets/Imagem.svg'
import { Filter } from "./component/Filter"
import { CoffeeCatalog } from "./component/CoffeeCatalog"

interface BenefitCoffeeListProps {
  content: string
  icon: JSX.Element
  color: 'yellow-dark' | 'gray' | 'yellow' | 'purple'
}

const benefitCoffeeDelivery = [
  {
    content: 'Compra simples e segura',
    icon: <ShoppingCart size={16} weight="fill"/>, 
    color: 'yellow-dark'
  },
  {
    content: 'Embalagem mantém o café intacto',
    icon: <Package size={16} weight="fill"/>, 
    color: 'gray'
  },
  {
    content: 'Entrega rápida e rastreada',
    icon: <Timer size={16} weight="fill"/>, 
    color: 'yellow'
  },
  {
    content: 'O café chega fresquinho até você',
    icon: <Coffee size={16} weight="fill"/>, 
    color: 'purple'
  },
] as BenefitCoffeeListProps[]

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <ColBanner>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </header>

          <ul>
            {benefitCoffeeDelivery.map((benefit) => (
              <BenefitCoffee 
                key={benefit.content}
                backgroundColor={benefit.color} 
              >
                <i>{benefit.icon}</i>
                <p>{benefit.content}</p>
              </BenefitCoffee>
            ))}
          </ul>
        </ColBanner>
        <img src={bannerCoffee} alt="Um copo de café com os grãos do lado" />
      </HomeHeader>

      <section>
        <CoffeeHeader>
          <h2>Nossos cafés</h2>
          <div>
            <Filter />
            <Filter />
            <Filter />
            <Filter />
            <Filter />
          </div>
        </CoffeeHeader>

        <CoffeeCatalog />
      </section>
            

    </HomeContainer>
  )
}