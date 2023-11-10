import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function AllRest() {

    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
    return (
<section className="allRest mt-5">
      <div className="container">
        <div className="row">
            <div className="col-12" onClick={handleGoBack}>
                <a class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                <h4 className="d-inline-block align-text-top">Все рестораны</h4></a>
            </div>
        </div>
    </div>
</section>
)
}