import DateTimeWeather from "../components/DateTimeWeather"

function Header() {
    return (
        <header className="w-full p-5 flex items-start justify-between">
            <DateTimeWeather />
        </header>
    )
}

export default Header
