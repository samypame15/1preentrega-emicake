import './App.css'
import NavbarComponent  from './components/Navbarcomponet'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (

      <div>
        <NavbarComponent></NavbarComponent>
        <ItemListContainer greeting="Bienvenidos a la pasteleria y Reposteria Emicake" texto= "Ordenar Ahora"   />
      </div>
      
  )
}

export default App
