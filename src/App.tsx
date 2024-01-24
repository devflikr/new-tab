import FavoriteLinks from "./components/FavoriteLinks"
import ToDoTasks from "./components/ToDoTasks"
import Header from "./layout/Header"

function App() {
    return (
        <section className="flex flex-1">
            <section className="flex flex-col">
                <Header />
                <ToDoTasks />
            </section>
            <section className="flex-1"></section>
            <section className="flex flex-col">
                <FavoriteLinks />
            </section>
        </section>
    )
}

export default App
