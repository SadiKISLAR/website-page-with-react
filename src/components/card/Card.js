import React from "react";
import imghtml from "../../assets/img/logo_html.png"
import imgcss from "../../assets/img/logo_css.png"
import imglogo from "../../assets/img/logo_brush.png"
import { useNavigate } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate()
  return (
    <div>
        <div onClick={()=> navigate ("/html")} className="box">
          <img src={imghtml} alt="" />
          <h3>HTML5 MarkUp</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies
          </p>
        </div>
                <div className="box">
          <img src={imgcss} alt="" />
          <h3>CSS3 Styling</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies
          </p>
        </div>
                <div className="box">
          <img src={imglogo} alt="" />
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies
          </p>
        </div>
    
    
    </div>

  );
};

export default Card;
