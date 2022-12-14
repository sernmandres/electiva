import React from 'react';
import { BarChartLine } from 'react-bootstrap-icons';
import ofertasServicios from '../assets/home/ofertasServicios.jpeg';
import Acordeon  from '../component/Acordeon';
import ButtonAction from '../component/ButtonAction';
import Prueba from '../component/Prueba';

//importar componentes 
import Banner from '../component/Banner';

const Home = () => {
    return (
        <>
            
            <Banner />
            <div className='container-icons'>
                <div>
                    <div className='icons-info'>
                        <BarChartLine size={45} />
                        <h3>Lorem ipsum dolor</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                egestas eu ornare et, ultrices et lectus. </p>
                        </div>
                    </div>

                    <div className='icons-info'>
                        <BarChartLine size={45} />
                        <h3>Lorem ipsum dolor</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                egestas eu ornare et, ultrices et lectus. </p>
                        </div>
                    </div>

                    <div className='icons-info'>
                        <BarChartLine size={45} />
                        <h3>Lorem ipsum dolor</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                egestas eu ornare et, ultrices et lectus. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sepTop container-fluid'>
                <div className="container">
                    <div className="row">
                        <div>
                            <h2 className="section-title">
                                <span>Servicios <br /></span>
                                Crear Soluciones
                            </h2>
                        </div>
                        <div className='container-solution'>
                            <div>
                                <BarChartLine size={45} />
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                    egestas eu ornare et, ultrices et lectus. </p>

                            </div>
                            <div>
                                <BarChartLine size={45} />
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                    egestas eu ornare et, ultrices et lectus. </p>

                            </div>
                            <div>
                                <BarChartLine size={45} />
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris,
                                    egestas eu ornare et, ultrices et lectus. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-top-4'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={ofertasServicios} alt="...."/>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2 className="section-title p-top-4">
                                <span>Servicios <br /></span>
                                Crear Soluciones
                            </h2>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu suscipit lectus, eu ullamcorper risus. 
                            Sed aliquam ultricies molestie. Maecenas ut laoreet nisi. Sed turpis turpis, ultrices ut eros eget, condimentum 
                            luctus dolor.
                            </p>

                            <Acordeon />
                            <ButtonAction />
                        </div>
                    </div>

                </div>
            </div>

            <Prueba />
        </>

    )
}

export default Home;