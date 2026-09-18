function Header() {
    return (
        <header className="border -b -4 border black">
            <nav className="mx-auto flex max-w-5x1 items-center justify-between px-6 py-4">
                <h1 className="text 2x1 font-bold">
                    Biblioteca João Pedro
                </h1>
                <div className="flex gap-6">
                    <a href="#" className="font-medium hover:text-blue-600">
                        Inicío
                        </a>
                    <a href="#" className="font-medium hover:text-blue-600">
                        Livros
                        </a>
                    <a href="#" className="font-medium hover:text-blue-600">
                        Usuários
                        </a>
                    <a href="#" className="font-medium hover:text-blue-600">
                        Empréstimos
                        </a>
                </div>
            </nav>
        </header>
    )
}

export default Header