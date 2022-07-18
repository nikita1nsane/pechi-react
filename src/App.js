import React, { lazy } from 'react';

const NavBar = lazy(() => import('./components/navbar'))
const Home = lazy(() => import('./components/Home'))

const Sites = [
  {
    id: '/linii',
    title: 'ЛИНИИ ПОРОШКОВОЙ ПОКРАСКИ С ВЫРАБОТКОЙ 4 цикла в час от завода-производителя!',
    mainImg: require('./images/linii-first.webp'),
    metaTitle: 'Производство линий порошковой покраски с повышенной скоростью покрасочных работ от завода-производителя! | Бесплатный монтаж и доставка по МСК и МО'
  },
  {
    id: '/',
    title: `ПЕЧИ ПОЛИМЕРИЗАЦИи от завода-производителя \nС НАГРЕВОм за 15 минут!`,
    mainImg: require('./images/pechi-first.webp'),
    metaTitle: 'Производство печей полимеризации с повышенной работоспособностью от производителя! | Бесплатный монтаж и доставка по МСК и МО'
  },
  {
    id: '/kamera-napyleniya',
    title: 'КАМЕРЫ НАПЫЛЕНИЯ от производителя! С ПроизводительностЬЮ от 120 изделий в час!',
    mainImg: require('./images/kamera-first.webp'),
    metaTitle: 'Производство камер напыления с повышенной экономией на покрасочных работах от завода-производителя! | Бесплатный монтаж и доставка по МСК и МО'
  }
]

function App() {

  return (
    <>
      <NavBar />
      {Sites.filter(item => item.id === window.location.pathname).map((elem) => 
        <Home key={elem.id} title={elem.title} mainImg={elem.mainImg} metaTitle={elem.metaTitle}/>
      )}
      
    </>
  );
}

export default App;
