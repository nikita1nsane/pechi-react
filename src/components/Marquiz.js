import React, { useEffect } from 'react';

function Marquiz(props) {

   useEffect(() => {
    window.marquiz('Button', {
        id: '62cfd741cb27ea004d4a42b8',
        buttonText: `<span class="title">Пройти тест и получить ${props.text}</span> <span class="subtitle">+ спецпредложение c подарками после теста →</span>`
    })
   }, [])

   return (
        <div data-marquiz-id='62cfd741cb27ea004d4a42b8'></div>
   );
}

export default Marquiz;