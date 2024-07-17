import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProductsQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
