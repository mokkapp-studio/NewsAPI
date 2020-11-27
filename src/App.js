import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #f7f7f7;
  max-width: 800px;
  margin: 0 auto;
  .inner-container{
    margin-top: 10em;
  }
`


function App() {


const [ categoria, setCategoria ] = useState('')
const [ news, setNews ] = useState([]);

 useEffect(() => {
   const consultarAPI = async () => { 
     const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=a55f805814dd484e95400fe233d83ea2`;

     const respuesta = await fetch(url);
     const noticias = await respuesta.json();

     setNews(noticias.articles)

     console.log(news)

   }
   consultarAPI()
 }, [categoria])
  

  return (
    <Container className="App">
      <div className="inner-container">
      <h1>App de Noticias</h1>
      <Formulario
        setCategoria={setCategoria}
      />
      <Listado
        news={news}
      />
      </div>
    </Container>
  );
}

export default App;
