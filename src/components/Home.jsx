import React from 'react';
import img1 from '../images/blocks/block1.webp'
import img2 from '../images/blocks/block2.webp'
import img3 from '../images/blocks/block3.webp'
import shemaImg from '../images/experimental/shema.png'
import { Helmet } from 'react-helmet'
import Marquiz from './Marquiz';

const Home = (props) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.metaTitle}</title>
                <link rel="preconnect" href={props.mainImg} />
            </Helmet>            
            <div className="container Home">
            <div className="ellipse1"></div>
                <div className='topContent'>
                <div className='leftContent'>
                    <h1>{props.title}</h1>

                    <h2>Ответьте на <span className='spanColor'>5 вопросов</span> и получите коммерческое предложение <span className='spanColor'>с точным расчетом</span> стоимости оборудования, бесплатным монтажом, доставкой и подарками</h2>
                    <div className="ellipse2"></div>
                    <div className="guarantee">
                        <div className="count">

                            <div className="text">
                            <span className='month'>36 мес.</span>
                            <span className='garant'>гарантия</span>
                            </div>
                        </div>
                        <div className="shema">
                            <span>Схема</span>
                            <span> проекта</span>
                        </div>
                        <img src={shemaImg} alt="shema" />
                        <div className="free">
                            <span>Бесплатная разработка проекта</span>
                        </div>
                    </div>
                    <div className="ellipse3"></div>
                    <div className="ellipse4"></div>
                    <div className="ellipse5"></div>
                </div>
                <div className="rightContent">
                    <img src={props.mainImg} alt="img" width="891px" height='693px'/>
                </div>
                <div>
                    <Marquiz text="расчет"/>
                    <p className='confirmed'>Тест бесплатный. Данные защищены.</p>
                </div>
                </div>
                    <div className="eight">
                    ОТВЕТЬТЕ НА 5 ВОПРОСОВ И ПОЛУЧИТЕ РАСЧËТ СТОИМОСТИ С <span className='spanColor'>ПОДАРКАМИ</span>
                    </div>
                    <div className="blocks">
                        <div className="block">
                            <div className="block_title">Бесплатный монтаж</div>
                            <div className="block_subtitle">Наш эксперт приедет и смонтирует оборудование</div>
                            <div className="block_img"><img src={img1} alt="img" width='80%' /></div>
                        </div>
                        <div className="block">
                            <div>
                            <div className="block_title">Комплект расходников в подарок</div>
                            <div className="block_subtitle">Для непрерывной работы</div>
                            </div>
                            <div className="block_img"><img src={img2} alt="" /></div>
                        </div>
                        <div className="block">
                            <div>
                            <div className="block_title">Бесплатная доставка</div>
                            <div className="block_subtitle">При оплате до 17 июля</div>
                            </div>
                            <div className="block_img"><img src={img3} alt="" /></div>
                        </div>
                    </div>
                    <div className="podarki"><Marquiz text="подарки"/></div>
                    <div className="footer">
                    <p><span className="spanBold">Телефон:</span> <a href='tel:+74954446019' onClick={() => {window.ym(88553363,'reachGoal','nomer')}} className="phone">8 (495) 444-60-19</a></p>
                    <p><span className="spanBold">E-mail:</span> <a href="mailto:info@metallo-zavod.ru">info@metallo-zavod.ru</a></p>
                    <p><span className="spanBold">Компания</span> ООО «Линия»</p>
                    <p><span className='spanBold'>ИНН:</span> 7751188447</p>
                    <p><span className="spanBold">ОГРН:</span> 1207700436789</p>
                    <p><span className="spanBold">Адрес:</span> Москва, пос. Московский, Киевское шоссе, 22-й км, вл4блокГ, офис 705Г, 7 этаж</p>
                    </div>
                    <div id='wa_scroll' className="wa_scroll container">
            <a href="https://api.whatsapp.com/send/?phone=79636623914&app_absent=0+79636623914&text&app_absent=0" onClick={() => {window.ym(88553363,'reachGoal','whatsapp')}}>Связаться в WhatsApp</a>
            </div>
                </div>
                
        </>
    );
}

export default Home;
