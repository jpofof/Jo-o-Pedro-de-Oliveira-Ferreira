import Header from './componentes/Header'

  function App() {
  return(
    <div>
      <Header />
        <main>
          <h2>Bem-vindo à nossa biblioteca</h2>
        
          <p>
            Estamos construindo um espaço para você explorar e descobrir novos livros.
            Fique à vontade para navegar pelo nosso cátalogo e encontrar sua próxima leitura favorita!
            A FATEC deseja a todos uma ótima experiência de leitura e aprendizado.
          </p>

          <button>Explorar livros</button>
        </main>
    </div>
  )
}

export default App