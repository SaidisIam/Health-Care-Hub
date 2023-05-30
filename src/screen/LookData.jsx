import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const LookData = () => {
    let params = useParams()
    const [state, setState] = useState()
    console.log(params.id);

    const LookData = async () => {
        const LookDataData = await axios({
            url: `http://localhost:8000/patients/${params.id}`,
            method: "get"
        })
        console.log(LookDataData);
        if (LookDataData.status == 200) {
            setState(LookDataData.data)
        }
    }

    useEffect(() => {
        LookData()
    }, [])

    return (
        <div className="DataLook">
            <Header />
            <div className="LookData main">
                <div style={{ padding: "35px 35px" }} className="title-block">
                    <h1>Данные пациента#</h1>
                </div>

                {state != null ? <>
                    <div className="section-lookdata">
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Эритроциты: <span>{state.desc.redBloodCells}</span></h3>
                            </div> 
                            <div className="box-style">
                                <h3>Гемоглобин: {state.desc.Hemoglobin}</h3>
                            </div>
                        </div> <br />
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Гематокрит: {state.desc.Hematocrit}</h3>
                            </div>
                            <div className="box-style">
                                <h3>Цветовой показатель: {state.desc.colorIndex}</h3>
                            </div>
                        </div> <br />
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Лейкоциты: {state.desc.Leukocytes}</h3>
                            </div>
                            <div className="box-style">
                                <h3>Леймфоциты: {state.desc.Lymphocytes}</h3>
                            </div>
                        </div> <br />
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Моноциты: {state.desc.Monocytes}</h3>
                            </div>
                            <div className="box-style">
                                <h3>Нейтрофилы: {state.desc.Neutrophils}</h3>
                            </div>
                        </div> <br />
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Базофилы: {state.desc.Basophils}</h3>
                            </div>
                            <div className="box-style">
                                <h3>Эозинофилы: {state.desc.Eosinophils}</h3>
                            </div>
                        </div> <br />
                        <div className="h3-block">
                            <div className="box-style">
                                <h3>Тромбоциты: {state.desc.platelets}</h3>
                            </div>
                            <div className="box-style">
                                <h3>СОЭ: {state.desc.ESR}</h3>
                            </div>
                        </div>
                    </div>
                </> : <><center>loading</center></>}
            </div>
        </div>
    );
}

export default LookData