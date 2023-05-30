import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
// import IMask from "imask";

const Main = () => {
    const [state, setState] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [patronymic, setPatronymic] = useState()
    const [date, setDate] = useState()
    const [number, setNumber] = useState()
    const [search, setSearch] = useState()
    const [error, setError] = useState()
    console.log(name, date, number);

    const addPatient = async () => {
        if (name, date, number == null) {
            alert('you may not have filled all of the inputs!')
        } else {
            const param = {
                "name": name,
                "surname": surname,
                "patronymic": patronymic,
                "date": date,
                "number": number,
                "desc":
                {
                    "redBloodCells": null,
                    "Hemoglobin": null,
                    "Hematocrit": null,
                    "colorIndex": null,
                    "Leukocytes": null,
                    "Monocytes": null,
                    "Neutrophils": null,
                    "Basophils": null,
                    "Eosinophils": null,
                    "platelets": null,
                    "ESR": null
                }

            }
            const addPatientData = await axios({
                url: `http://localhost:8000/patients`,
                method: "post",
                data: param
            })
            if (addPatientData.status == 201) {
                setState(addPatientData.data)
                alert('successfully saved!')
                window.location.href = '/patients'
            }
        }
    }

    let getPatient = async () => {
        let getData = await axios({
            method: "get",
            url: `http://localhost:8000/patients`
        })
        if (getData.status == 200) {
            setState(getData.data)
        }
    }
    console.log(state);

    const searchF = async (e) => {
        if (state != null) {
            if (e.target.value != undefined) {
                if (e.target.value.length > 1) {
                    if (state != null) {
                        let fil = state.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase()))
                        console.log(fil, "filter");
                        setSearch(fil)
                    }

                } else {
                    setSearch(null)
                }
            } else {
                setSearch(null)
            }
        }
    }



    //     const phoneInput = document.querySelector("#phone")
    //     console.log(phoneInput);

    //     const mask = new IMask(phoneInput, {
    //     mask: "+996(000)00-00-00"
    // })

    useEffect(() => {
        getPatient()
    }, [])

    return (
        <div className="Main">
            <Header />

            <div className="main">
                <div className="title-block">
                    <h2>Добавить нового пациента</h2>
                    <div>
                        <p><i className="fa-regular fa-plus"></i><a href="#">Add Content</a></p>
                    </div>
                </div>

                <div className="search-form">
                    <input onChange={(e) => { searchF(e) }} className="search-form-txt" type="text" name="" placeholder="Search content.." />
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </div>

                {search != undefined ? <>
                    <div className="section">
                        {search.map(i => <>
                            <div className="search-box">
                            <h3>Пациент#:</h3> <br />
                                <p> <span style={{ "fontWeight": "1000" }}>Surname: </span> {i.surname}</p> <br />
                                <p><span style={{ "fontWeight": "1000" }}>Name: </span> {i.name}</p> <br />
                                <p><span style={{ "fontWeight": "1000" }}>Patronymic: </span> {i.patronymic}</p> <br />
                            </div>

                            <div style={{ "display": "flex", "justifyContent": "space-between", "width": "40%" }} className="search-box">
                                <p><span style={{ "fontWeight": "1000" }}>Date: </span>{i.date}</p>
                                <p><span style={{ "fontWeight": "1000" }}>Number: </span>{i.number}</p> <br />
                            </div> <br /> <br /> <br />
                        </>)}
                    </div> <br />
                </> : <></>}



                <div className="section">
                    <div className="box-style">
                        <h2>Добавить нового пациента</h2>
                        <p class="text-style">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, recusandae!</p>
                    </div> <br />

                    <div className="inp-block">
                        <div class="box-style">
                            <label for="">Фамилия</label>
                            <input onChange={(e) => setSurname(e.target.value)} class="second-inp flex" type="text" placeholder="Фамилия" />
                        </div>

                        <div className="box-style">
                            <label for="">Имя</label>
                            <input onChange={(e) => setName(e.target.value)} className="first-inp" type="text" placeholder="Имя" />
                        </div>

                        <div className="box-style">
                            <label for="">Отчество</label>
                            <input onChange={(e) => setPatronymic(e.target.value)} className="third-inp flex" type="text" placeholder="Отчество" />
                        </div>
                    </div>

                    <div className="inp-block">
                        <div class="box-style">
                            <label for="">Год рождения</label>
                            <input onChange={(e) => setDate(e.target.value)} class="second-inp flex" type="text" placeholder="Год рождения" />
                        </div>
                        <div className="box-style">
                            <label for="">Номер телефона</label>
                            <input onChange={(e) => setNumber(e.target.value)} className="third-inp flex" id="phone" type="tel" name="phone" placeholder="+996 (000) 00 00 00" />
                        </div>
                    </div> <br />

                    <button onClick={addPatient} className="btn-save">Сохранить</button>
                    <h2>Код: Код с бекенда</h2>
                </div> <br />
            </div>
        </div>
    );
}

export default Main