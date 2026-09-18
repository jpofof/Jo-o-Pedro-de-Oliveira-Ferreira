import Header from "../componentes/Header"
import CardLivros from "../componentes/CardLivros"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <CardLivros 
      
        titulo ="O Homem Mais Rico da Babilônia"
        autor ="George S. Clason"
        categoria ="Finanças pessoais" 
        />
    </div>
  )
}

export default App