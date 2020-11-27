import React, {useState} from 'react';
import useSelect from '../Hooks/useSelect';
import { Form, Button } from 'antd';



const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        { key: 'science', value: 'science', text: 'Ciencia' },
        { key: 'technology', value: 'technology', text: 'Tecnología' },
        { key: 'sports', value: 'sports', text: 'Deportes' },
    ]

    const[ categoria, SelectNoticias ] = useSelect('', OPCIONES)

    // const buscarNoticia = e => {
    //     e.preventDefault();

    //     setCategoria(categoria);
    // }

    const onSend = () => {
        setCategoria(categoria)
    }



    return (
        <div>
             <Form 
                //onSubmit={buscarNoticia} 
                layout="vertical"
            >
                <SelectNoticias />
                <Form.Item>
                    <Button 
                        onClick={onSend}
                        type="primary"
                    >
                        Buscar  Noticia
                    </Button>
                </Form.Item>
                </Form>
            
        </div>
      )
}
 
export default Formulario;