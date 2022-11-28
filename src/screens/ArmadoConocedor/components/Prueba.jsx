import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from 'react-bootstrap';

function PlayerInfo(props) {
const [show, setShow] = useState(true);

function toggleButton() {
    
}

return (<Card >
  <Button>
    <button onClick={<Card.Body></Card.Body>}> Añadir </button>
    {show ? props.children : null}
    </Button>
        </Card>
);  
}


const Prueba = (props) => {
    return <div>
        {
         props.carrito.map((producto) => {
         return <PlayerInfo>
            <div>
                  { producto.nombre }
            </div>
          </PlayerInfo>
         })           
}</div>
}
export default Prueba;


/*

function Prueba() {
return (<PlayerInfo>
  <div>
        XD
  </div>
</PlayerInfo>)
}
*/