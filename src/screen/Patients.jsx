import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { patientsF } from "../reduxtoolkit/toolkit";

const Patients = () => {
    let dispatch = useDispatch()
    const { patients } = useSelector(state => state.mytoolkit)
    const [search, setSearch] = useState()
    const {state, setState} = useState()
    console.log(patients, "pp");

    const GetPatients = async()=>{
        const GetPatientsData = await axios ({
            method: "get",
            url: `http://localhost:8000/patients`
        })
        if(GetPatientsData.status == 200){
            setState(GetPatientsData.data)
        }
    }
    console.log(state, "Users");

    useEffect(() => {
        dispatch(patientsF())
        GetPatients()
    }, [])

    return (
        <div className="Patients">
            <Header />

            <div className="patients-main main">
                <div className="title-block mainsTitleBlock">
                    <h2>Пациенты</h2>
                </div>

                <div className="search-form searchPatients">
                    <input onChange={(e) => setSearch(e.target.value)} className="search-form-txt" type="text" name="" placeholder="Поиск пациента" />
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </div>

                {/* {search != undefined ? <>
                    <div className="section">
                        {search.map(i => <>
                            <div className="search-box">
                                <h3>Пациент#:</h3> <br />
                                <p><span style={{ "fontWeight": "1000" }}>Surname: </span> {i.surname}</p> <br />
                                <p><span style={{ "fontWeight": "1000" }}>Name: </span> {i.name}</p> <br />
                                <p><span style={{ "fontWeight": "1000" }}>Patronymic: </span> {i.patronymic}</p> <br />
                            </div>

                            <div style={{ "display": "flex", "justifyContent": "space-between", "width": "40%" }} className="search-box">
                                <p><span style={{ "fontWeight": "1000" }}>Date: </span>{i.date}</p>
                                <p><span style={{ "fontWeight": "1000" }}>Number: </span>{i.number}</p> <br />
                            </div> <br /> <br /> <br />
                        </>)}
                    </div> <br />
                </> : <></>} */}

                <div className="section sectionPatients">
                    <div className="box-style">
                        <h2>Список пациентов в ожидании</h2>
                    </div> <br />

                    {/* {patients != null ? <>
                        {patients.map(i => <>

                            <div className="container">

                                <div className="formList firstForm">
                                    <div className="box first"></div>
                                    <div className="box second">Lorem ipsum dolor </div>

                                </div>
                                <div className="formList secondForm">
                                    <div className="box first"></div>
                                    <div className="box second">Lorem ipsum dolor </div>

                                </div>
                                <div className="formList thirdForm">
                                    <div className="box first"></div>
                                    <div className="box second">{i.fullName} </div>

                                </div>
                                <div className="formList fourthForm">
                                    <div className="box first"></div>
                                    <div className="box second"><button className="buttonList"><a href="data">изменить</a></button></div>

                                </div>
                            </div> <br />
                        </>)}
                    </> : <>loading.....</>} */}


                    <table className="container">
                        <tr>
                            <td className="empty-boxes"></td>
                            <td className="empty-boxes"></td>
                            <td className="empty-boxes"></td>
                            <td className="empty-boxes"></td>
                        </tr>
                        {patients != null ? <>
                            {patients.map(i => <>
                                <tr className="data-boxes">
                                    <td>{i.name}</td>
                                    <td>{i.surname}</td>
                                    <td> {i.patronymic} </td>
                                    <td style={{ "width": "26%" }}>
                                        <button style={{ "marginRight": "2px" }} className="buttonList"><a href={"/data/" + i.id}>изменить</a></button>
                                        <button className="buttonList"><a href={"/lookdata/" + i.id}>посмотреть</a></button>
                                    </td>
                                </tr>

                            </>)}
                        </> : <></>}
                    </table>


                    <div className="pagination">
                        <button className="btnPrev btn" disabled><i className="fa-regular fa-angles-down"></i></button>
                        <div className="buttonPage active">1</div>
                        <div className="buttonPage">2</div>
                        <div className="buttonPage">3</div>
                        <div className="buttonPage">4</div>
                        <div className="buttonPage">5</div>
                        <button className="btnNext btn"><i className="fa-regular fa-angles-down"></i></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Patients