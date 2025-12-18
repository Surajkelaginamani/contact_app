import { Phone ,MessageCircle } from 'lucide-react';

const Card = (props) => {
    const whatsappLink = `https://wa.me/91${props.number}`;
    return(
        <div className="card">
            <div className="top">
                <img src ={props.img} alt = "dadada" />
            </div>
            <div className = "info">
                <h2>{props.name}</h2>
                <h3>{props.number}</h3>
            </div>
           <a href={`tel:${props.number}`}>
          <button title="Call">
            <Phone size={16} />
          </button>
        </a>
             <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
            <button><MessageCircle size={16} /></button>
             </a>
        </div>
    )
}

export default Card;