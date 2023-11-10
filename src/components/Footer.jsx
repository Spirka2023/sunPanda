import React from 'react'

export default function Footer() {
  return (
    <footer id = "footer">
    <div className="container">
     <div className="row">
         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
             <img src="img/footer.png" alt="" className="img-fluid"/>
             <ul>
                <li className="footer_item text-center">Франшиза SunPanda</li>
                <li className="footer_item text-center">О нас</li>
                <li className="footer_item text-center">Стать партнером</li>
                <li className="footer_item text-center">Пользовательское соглашение</li>
             </ul>
         </div>

         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4 className="text-center text-white mt-3">Мы в соцсетях</h4>
            <div className="container">
                <div className="row">
                   <div className="col-4 text-center mt-3">
                <img src="img/о.png" alt="" class="img-fluid icon" style={{width: "50px"}}/>
            </div>
            <div className="col-4 text-center mt-3">
                <img src="img/tg.7946009c.png" alt="" class="img-fluid icon" style={{width: "60px"}}/>
            </div>
            <div className="col-4 text-center mt-3">
                <img src="img/youtube.png" alt="" class="img-fluid icon" style={{width: "50px"}}/>
            </div> 
                </div>
            </div>
            
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4 className="text-center text-white mt-3">Скачай на телефон</h4>
            <div className="container">
                <div className="row">
                   <div className="col-12 text-center">
                <img src="img/android.png" alt="" class="img-fluid mt-3 icon" style={{width: "140px"}}/>
            </div>
            <div className="col-12 text-center">
                <img src="img/apple.png" alt="" class="img-fluid mt-3 icon" style={{width: "140px"}}/>
            </div>
             
                </div>
            </div>
            
        </div>

         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <h4 className="text-center text-white mt-3">Контакты "Сан Панда"</h4>
            <ul>
               <li className="footer_item2 text-center ">Call центр: 8 (996) 275 79 18</li>
               <li className="footer_item2 text-center">E-mail: admin@sunpanda.ru</li>
               <li className="footer_item2 text-center">© Copyright 2023 Все права защищены - sunpanda.ru</li>
               
            </ul>
        </div>

     </div>


     
    </div>
 </footer>
  )
}
