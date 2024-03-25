import BarraLateral from '../../containers/Barralateral'
import ListaDeContatos from '../../containers/ListaDeContatos'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral buscaOuVoltar />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
