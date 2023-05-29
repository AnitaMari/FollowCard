import { useState } from "react";

export function FollowCard ({ formatUserName, userName, name }) {
//vamos a crear una variable que nos diga si estamos siguiendo o no y le vamos a dar un valor inicial.
//El state nos devuelve un array con dos posiciones, primero el valor del estado y segundo una función que nos va a permitir actualizarlo.
const [isFollowing, setIsFollowing] = useState(false);

//const imageSrc = `https://unavatar.io/${userName}`; //y poner abajo src={imageSrc}
//console.log(isFollowing);

//lo de abajo por si quieres que le añada una arroba, pero no siempre, por eso se pone aquí en lugar de poner una arroba directamenete abajo delante del userName
//en lugar de hacerlo aquí lo vamos a hacer en el padre, en la App.
//Aquí lo que vamos a hacer es pasarle una función como prop llamada formatUserName.
//const addAt = (userName) => `@${userName}`;
//<span className="followCard-infoUserName">{addAt(userName)}</span>
 
//vamos a crear un renderizado condicional dependiendo de si la persona está siguiendo o no, y abajo en button en vez de poner seguir poner {text}
const text = isFollowing ? "Following" : "Follow"

//podríamos tener estilos diferentes dependiendo de si estamos siguiendo o no tiene diferentes clases css
const buttonClassName = isFollowing
? "followCard-button is-following"
: "followCard-button"

const handleClick = () => {
    setIsFollowing(!isFollowing) //para darle la vuelta al valor que tenga. Así cambiamos el estado
}

return (
    <article className="followCard">
    {/* <article style={{ display: "flex", color: "#fff" }}> En React Native es así, o para estilar algo en concreto.  */}
    <header className="followCard-header">
        <img 
            className="followCard-avatar"
            alt="Corazón de Francia de colores" 
            // src={`https://previews.123rf.com/images/aliasching/aliasching1604/aliasching160400324/58850436-dise%C3%B1o-en-forma-de-coraz%C3%B3n-letras-decorativas-francia.jpg/${userName}`} />
            src={`https://unavatar.io/${userName}`} />
        <div className="followCard-info"></div>
        <div className="followCard-info">
        <strong>{name}</strong>
        <span className="followCard-infoUserName">{formatUserName(userName)}</span>
        
        </div>      
    </header>

    <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="followCard-text">{text}</span>
            <span className="followCard-stopFollowing">Stop Following</span>
        </button>
    </aside>        
    </article>
   )
}