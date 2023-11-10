import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();

    const handleNavigateToTokyo = () => {
        navigate("/tokyo");
      };

  return (
    <div>
    <div className="banner2" style={{marginTop: "80px"}}></div>
    <section className="city">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <p className="text-center text-uppercase mt-3 fs-4 fat">Мы <span className="colortext">работаем</span> в городах</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <a className="btn btn-itd btn-lg" onClick={handleNavigateToTokyo}>Ахтубинск</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Ейск</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Знаменск</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Каменск-Шахтинский</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Крымск</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Новошахтинск</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Сарапул</a>
            </div>
            <div className="col-12">
                <a className="btn btn-itd btn-lg mt-3">Челябинск</a>
            </div>
        </div>  
    </div>
</section>
    </div>
  )
}
