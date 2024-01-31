import FavoriteLinks from "./components/FavoriteLinks"
import FlikrUi from "./components/FlikrUi"
import ToDoTasks from "./components/ToDoTasks"
import Header from "./layout/Header"
import React from "react"
import { BrowserRouter } from "react-router-dom"

function App():React.JSX.Element {
    return (
        <BrowserRouter>
            <section className="flex flex-1">
                <section className="flex flex-col">
                    <Header />
                    <ToDoTasks />
                </section>
                <section className="flex-1"></section>
                <section className="flex flex-col">
                    <FlikrUi />
                    <FavoriteLinks />
                </section>
            </section></BrowserRouter>
    )
}

export default App
