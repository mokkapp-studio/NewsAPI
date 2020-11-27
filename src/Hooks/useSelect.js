import React, {useState} from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const useSelect = (stateInicial, countryOptions) => {

    

    const [state, actualizaState] = useState(stateInicial);

   
    const handleOnChange = value => {
        actualizaState(value)
     }

     console.log(state)

    
    const SelectNoticias = () => (
        <Form.Item name="gender" label="Noticia" rules={[{ required: true }]}>
            <Select
            placeholder="Select Category"
            allowClear
            onChange={handleOnChange}
            >
            {countryOptions.map(opcion => ( 
                <Option key={opcion.key} value={opcion.value}>{opcion.text}</Option>
            ))}
            
            </Select>
        </Form.Item>
        
    );

    return  [   state, SelectNoticias  ];
}
 
export default useSelect;


