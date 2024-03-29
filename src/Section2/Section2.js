import './Section2.css'
import React from "react";
import img1 from '../img/photo_2023-09-11_11-37-12.jpg'
import img2 from '../img/oie_8jgFDFw7ABoM.jpg'
import img3 from '../img/oie_krRUlAJVkAd1 (1).jpg'
import img4 from '../img/oie_n5VcvTAImu6w (2).jpg'
import img5 from '../img/OkRumbsduGmb.jpg'

const Section2=()=>{
    return(
        <div className={"container-fluid text-light back text-center"}>
            <p className={"texts text-center font-weight-bold "}>Bizning ustozlarimiz</p>
            <img className={"image1 mt-3"} src={img1}/>
            <div className={"d-flex col-10 mt-5 center-img"}>
                <div className="col-4 back-2 bg-white div1 text-dark">
                    <img src={img2} className={'img-b mb-3'} />
                    <h1 className={"pe"}>To'htaev Bobur </h1>
                    <p>Oliy toifali Ingiliz tili o'qtuvchisi</p>
                    <a href="#"><p>Learn More</p></a>

                    <p className={"font-weight-bold text-right"}>Maktab direktori</p>
                </div>
                <div className="col-4 back-2 ml-4 div1 bg-white text-dark">
                    <img src={img3} className={'img-b mb-3'} />
                    <h1 className={'pe'}>Elmurodova Mavluda</h1>
                    <p className={"pe"}>Oliy toifali Ona tili va Adabiyot o'qtuvchisi</p>
                    <a href="#"><p>Learn More</p></a>
                    <p className={"font-weight-bold text-right"}>Ona tili o'qtuvchi</p>
                </div>
                <div className="col-4 back-2 div1 ml-4 bg-white text-dark">
                    <img  src={img4} className={'img-b  mb-3'} />
                    <h1 className={"pe"}>Zohidov Fozil</h1>
                    <p className={"pe"}>Oliy toifali Matematika o'qtuvchisi</p>
                    <a href="#">Learn More</a>
                    <p className={"font-weight-bold text-right"}>Matematika o'qtuvchi</p>
                </div>
            </div>
            <div className={"d-flex col-10 mt-5 center-img"}>
                <div className="col-4 back-2 bg-white div1 text-dark">
                    <img src={img5} className={'img-b mb-3'} />
                    <h1 className={"pe"}>To'htaev Bobur </h1>
                    <p>Oliy toifali Ingiliz tili o'qtuvchisi</p>
                    <a href="#"><p>Learn More</p></a>

                    <p className={"font-weight-bold text-right"}>Maktab direktori</p>
                </div>
                <div className="col-4 back-2 ml-4 div1 bg-white text-dark">
                    <img src={img3} className={'img-b mb-3'} />
                    <h1 className={'pe'}>Elmurodova Mavluda</h1>
                    <p className={"pe"}>Oliy toifali Ona tili va Adabiyot o'qtuvchisi</p>
                    <a href="#"><p>Learn More</p></a>
                    <p className={"font-weight-bold text-right"}>Ona tili o'qtuvchi</p>
                </div>
                <div className="col-4 back-2 div1 ml-4 bg-white text-dark">
                    <img  src={img4} className={'img-b  mb-3'} />
                    <h1 className={"pe"}>Zohidov Fozil</h1>
                    <p className={"pe"}>Oliy toifali Matematika o'qtuvchisi</p>
                    <a href="#">Learn More</a>
                    <p className={"font-weight-bold text-right"}>Matematika o'qtuvchi</p>
                </div>
            </div>


        </div>
    )

}
export default Section2