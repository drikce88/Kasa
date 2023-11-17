import React from 'react';
import errorImg from "../images/ereur.png";
import { Link } from 'react-router-dom';



export default function ErrorBody () {
    return (
        <article>
            <div className='error-containeur'>
                <img src={errorImg} alt="Erreur 404" />
            </div>
            <article className='article-containeur'>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="link-error">
                    Retourner sur la page d'accueil
                </Link>
            </article>
        </article>
        
    )
}