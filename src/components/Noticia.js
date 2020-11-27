import React from 'react';
import styled from '@emotion/styled';

const CardNews = styled.div`
    position: relative;
    background: #fff;
    box-shadow: 0 1px 2px #ccc;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 3px;
    display: flex;
    img{margin-right: 1em}
    p.title{font-size: 16px;}
    p.escription{font-size: 12px}
    p.author{font-size: 12px, margin-top: 6em}
`;

const Noticia = ({noticia}) => {

    const { url, urlToImage, author, content, description, publishedAt, title} = noticia;

    return ( 
        <CardNews> 
            <img src={noticia.urlToImage} width="150px"></img>
            <div>
            <p className="title">{noticia.title}</p>
            <p className="escription">{noticia.description}</p>
            <p className="author">{noticia.author}</p>
            </div>
            
        </CardNews>
       
     );
}
 
export default Noticia;