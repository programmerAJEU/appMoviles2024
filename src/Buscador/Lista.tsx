import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { views } from '../_estilos/views';

const Lista = () => {
    const [entrada, setEntrada] = useState('');
    return(
        <View style={[views.inputView]}>
            <TextInput placeholder='Escribe algo' style={[views.input]} value={entrada} onChangeText={setEntrada}/>
        </View>
    )
}
export default Lista;