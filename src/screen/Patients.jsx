import Header from "../components/Header";

const Patients = ()=>{
    return (
        <div className="Patients">
            <Header/>

            <div className="patients-main main">
            <div className="title-block mainsTitleBlock">
            <h2>Пациенты</h2>
            </div>

            <div className="search-form searchPatients">
                <input className="search-form-txt" type="text" name="" placeholder="Поиск пациента"/>
                <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
            </div>
        
            <div className="section sectionPatients">
                <div className="box-style">
                <h2>Список пациентов в ожидании</h2>
            </div> <br/>

            <div className="container">
                <div className="formList firstForm">
                    <div className="box first"></div>
                    <div className="box second">Lorem ipsum dolor </div>
                    <div className="box third"> sit amet consectetur,</div>
                    <div className="box fourth"> adipisicing elit.</div>
                    <div className="box fifth"> illum dignissimos eligendi</div>
                    <div className="box sixth">ratione distinctio</div>
                    <div className="box seventh"> numquam commodi, at </div>
                    <div className="box eighth"> incidunt adipisci sit</div>
                    <div className="box ninth"> eveniet vitae accusamus</div>
                    <div className="box tenth">qui recusandae </div>
                </div>
                <div className="formList secondForm">
                    <div className="box first"></div>
                    <div className="box second">Lorem ipsum dolor </div>
                    <div className="box third"> sit amet consectetur,</div>
                    <div className="box fourth"> adipisicing elit.</div>
                    <div className="box fifth"> illum dignissimos eligendi</div>
                    <div className="box sixth">ratione distinctio</div>
                    <div className="box seventh"> numquam commodi, at </div>
                    <div className="box eighth"> incidunt adipisci sit</div>
                    <div className="box ninth"> eveniet vitae accusamus</div>
                    <div className="box tenth">qui recusandae </div>
                </div>
                <div className="formList thirdForm">
                    <div className="box first"></div>
                    <div className="box second">Lorem ipsum dolor </div>
                    <div className="box third"> sit amet consectetur,</div>
                    <div className="box fourth"> adipisicing elit.</div>
                    <div className="box fifth"> illum dignissimos eligendi</div>
                    <div className="box sixth">ratione distinctio</div>
                    <div className="box seventh"> numquam commodi, at </div>
                    <div className="box eighth"> incidunt adipisci sit</div>
                    <div className="box ninth"> eveniet vitae accusamus</div>
                    <div className="box tenth">qui recusandae </div>
                </div>
                <div className="formList fourthForm">
                    <div className="box first"></div>
                    <div className="box second"><button className="buttonList"><a href="data">???</a></button></div>
                    <div className="box third"><button className="buttonList">???</button></div>
                    <div className="box fourth"><button className="buttonList">???</button></div>
                    <div className="box fifth"><button className="buttonList">???</button></div>
                    <div className="box sixth"><button className="buttonList">???</button></div>
                    <div className="box seventh"><button className="buttonList">???</button></div>
                    <div className="box eighth"><button className="buttonList">???</button></div>
                    <div className="box ninth"><button className="buttonList">???</button></div>
                    <div className="box tenth"><button className="buttonList">???</button></div>
                </div>
            </div> <br/>

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