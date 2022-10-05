import { useEffect, useState } from "react"

const MiApi = () => {

    const [characters, setCharacters] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()
            setCharacters(data.results);
        }

        fetchData()
    }, [])

    const filterData = () => {
        const search = value.toLowerCase()
        const filtered = allData.filter((Characters) => {
            const name = Characters.name.toLowerCase()
            const status = Characters.status.toLowerCase()

            return name.includes(search) || status.includes(search)
        })

        setData(filtered)
    }

    return (
        <div>
            <div className="input-container">
                <input className="filtro-busqueda" type="text" placeholder="buscar" onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="container">
                {
                    characters.map(characters => {
                        return (
                            <main>

                                <div key={characters.id} className="personajes-container">
                                    <img className="personajes-img" src={characters.image} alt="" />
                                    <h2> {characters.name} </h2>
                                    <p> Status: {characters.status} </p>
                                    <p> Especie: {characters.species} </p>
                                    <p> Origen: {characters.origin.name} </p>
                                </div>
                            </main>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MiApi