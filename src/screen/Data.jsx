import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const Data = () => {
    const [state, setState] = useState()
    const [one, setOne] = useState()
    const [two, setTwo] = useState()
    const [three, setThree] = useState()
    const [four, setFour] = useState()
    const [five, setFive] = useState()
    const [six, setSix] = useState()
    const [seven, setSeven] = useState()
    const [eight, setEight] = useState()
    const [nine, setNine] = useState()
    const [ten, setTen] = useState()
    const [eleven, setEleven] = useState()
    const [twelve, setTwelve] = useState()

    let params = useParams()
    console.log(params.id);

    const Patients = async () => {
        const PatientsData = await axios({
            url: `http://localhost:8000/patients/${params.id}`
        })
        if (PatientsData.status == 200) {
            setState(PatientsData.data)
        }
    }

    let f2 = async () => {
        let param = {
            "desc": {
                "redBloodCells": one,
                "Hemoglobin": two,
                "Hematocrit": three,
                "colorIndex": four,
                "Leukocytes": five,
                "Lymphocytes": six,
                "Monocytes": seven,
                "Neutrophils": eight,
                "Basophils": nine,
                "Eosinophils": ten,
                "platelets": eleven,
                "ESR": twelve
            }
        }
        let resData = await axios({
            method: "patch",
            url: `http://localhost:8000/patients/${params.id}`,
            data: param
        })
        console.log(resData , "res");
        if(resData.status == 200){
            alert('ekd')
            window.location.href = "/patients"
        }
    }


    useEffect(() => {
        Patients()
    }, [])
    
    return (
        <div className="Data">
            <Header />
            <div className="mainData main">
                <div style={{ padding: "35px 35px" }} className="title-block">
                    <h2>Пациент #idFromBackend</h2>
                </div>



                <div className="section-fillData">
                    <div className="title-block mainsTitleBlock-2">
                        <h2>Заполнение данных</h2>
                    </div>

                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Эритроциты</label>
                            <input onChange={(e) => setOne(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">Гемоглобин</label>
                            <input onChange={(e) => setTwo(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" required/>
                        </div>
                    </div>
                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Гематокрит</label>
                            <input onChange={(e) => setThree(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">Цветовой показатель</label>
                            <input  onChange={(e) => setFour(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" required/>
                        </div>
                    </div>
                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Лейкоциты</label>
                            <input onChange={(e) => setFive(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">Леймфоциты</label>
                            <input onChange={(e) => setSix(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" required/>
                        </div>
                    </div>
                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Моноциты</label>
                            <input onChange={(e) => setSeven(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">Нейтрофилы</label>
                            <input onChange={(e) => setEight(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" required/>
                        </div>
                    </div>
                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Базофилы</label>
                            <input onChange={(e) => setNine(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">Эозинофилы</label>
                            <input onChange={(e) => setTen(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" required/>
                        </div>
                    </div>
                    <div className="inp-block">
                        <div className="box-style">
                            <label for="">Тромбоциты</label>
                            <input onChange={(e) => setEleven(e.target.value)} className="flex" type="text" placeholder="Placeholder content" required/>
                        </div>
                        <div className="box-style">
                            <label for="">СОЭ</label>
                            <input onChange={(e) => setTwelve(e.target.value)} className="flex" type="text" name="" placeholder="Placeholder content" requiredq/>
                        </div>
                    </div>
                    <button className="btn-save data" onClick={f2} >Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default Data