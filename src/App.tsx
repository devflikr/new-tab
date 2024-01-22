import FavoriteLinks from "./components/FavoriteLinks"
import Header from "./layout/Header"

function App() {
    return (
        <>
            <section className="flex flex-col flex-1">
                <Header />
            </section>
            <section className="flex flex-col">
                <FavoriteLinks />
            </section>
        </>
    )
}

export default App
