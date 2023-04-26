import Header from "../components/Header";

const Data = ()=>{
    return (
        <div className="Data">
            <Header/>
    <div className="mainData main">
        <div style={{ padding: "35px 35px"}} className="title-block">
            <h2>Пациент #idFromBackend</h2>
        </div>

        

        <div className="section-fillData">
            <div className="title-block mainsTitleBlock-2">
                <h2>Заполнение данных</h2>
            </div>

            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Эритроциты</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">Гемоглобин</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Гематокрит</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">Цветовой показатель</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Лейкоциты</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">Леймфоциты</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Моноциты</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">Нейтрофилы</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Базофилы</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">Базофилы</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <div className="inp-block">  
                <div className="box-style">
                    <label for="">Тромбоциты</label>
                    <input className="flex" type="text" placeholder="Placeholder content"/>
                </div>
                <div className="box-style">
                    <label for="">СОЭ</label>
                <input className="flex" type="text" name="" placeholder="Placeholder content"/> 
                </div>
            </div>
            <button className="btn-save data">Сохранить</button>
        </div>
    </div>
        </div>
    );
}

export default Data