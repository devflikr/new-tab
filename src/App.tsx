import React from "react"
import LayerBgInner from "./layers/BgInner"
import LayerBgCover from "./layers/BgCover"
import LayerDateTime from "./components/Time"
import LayerWelcome from "./components/Welcome"
import LayerCalendar from "./components/Calendar"
import LayerQuickAccess from "./components/QuickAccess"

function App(): React.JSX.Element {
    return (
        <section className="fixed inset-0 w-full h-full">
            <LayerBgInner />
            <LayerBgCover />

            <section className="absolute inset-0 z-10 flex items-stretch gap-5">
                <section className="inline-flex flex-col items-stretch p-5 gap-5">
                    <LayerQuickAccess />
                    <LayerCalendar />
                </section>
                <section className="flex flex-col flex-1 items-stretch justify-between">
                    <LayerDateTime />
                    <LayerWelcome />
                    <div className=""></div>
                    <div className=""></div>
                </section>
                <section className="inline-flex flex-col items-stretch justify-between">
                </section>
            </section>
        </section>
    )
}

export default App
