import Header from "../components/Header";
// import IMask from "imask";

const Main = ()=>{
//     const phoneInput = document.querySelector("#phone")
//     console.log(phoneInput);

//     const mask = new IMask(phoneInput, {
//     mask: "+996(000)00-00-00"
// })

    return (
        <div className="Main">
            <Header/>

            <div className="main">
                <div className="title-block">
            <h2>Добавить нового пациента</h2>
            <div>
                <p><i className="fa-regular fa-plus"></i><a href="#">Add Content</a></p>
            </div>
                </div>

                <div className="search-form">
                    <input className="search-form-txt" type="text" name="" placeholder="Search content.."/>
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </div>

        <div className="section">
            <div className="box-style">
                <h2>Добавить нового пациента</h2>
                <p class="text-style">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, recusandae!</p>
            </div> <br/>
            <div className="box-style">
            <label for="">ФИО</label>
            <input className="first-inp" type="text" placeholder="ФИО"/>
            </div>

            <div className="inp-block">  
                <div class="box-style">
                    <label for="">Год рождения</label>
                    <input class="second-inp flex" type="text" placeholder="Год рождения"/>
                </div>
                <div className="box-style">
                    <label for="">Номер телефона</label>
                <input className="third-inp flex" id="phone" type="tel" name="phone" placeholder="+996 (000) 00 00 00"/> 
                </div>
            </div> <br/>

            <button className="btn-save">Сохранить</button>
            <h2>Код: Код с бекенда</h2>
        </div>
            </div>
        </div>
    );
}

export default Main