import React, { Fragment } from 'react';
import Noticia from './Noticia';

const Listado  = ({news}) => {
    return ( 
        <Fragment>
            <h2>Listado Noticias</h2>
            <div>
                {news.map(noticia => (
                    <Noticia
                        noticia={noticia}
                        key={noticia.url}
                    />
                ))}
            </div>
        </Fragment>
        
     );
}
 
export default  Listado;