import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {Loading} from './Loading'

export const Covid19 = () => {
    const [datos,setDatos]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(() => {
      getData()  
    },[])

    const getData=async()=>{
        setLoading(true)
        const respuesta = await Axios.get('https://api.coronastatistics.live/countries/colombia')
        setDatos(respuesta.data)
        setLoading(false)
    }
    return (
        <div className='container-fluid' style={{width:'90%'}}>
            <h2 className="text-center mt-4">
                <img src="./assets/images/co.svg" style={{width:'100px', height:'100px'}}/>.
                <span style={{color:'white'}}>Estadisticas en Colombia</span>
            </h2>
            {
                loading ? <Loading/> :
            
                <div className='row'>
                    {/* casos totales */}
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-center border mt-3 p-2">
                            <h4 className="font-weight-bold">Infecciones</h4>
                            <div className="border bg-dark" style={{color:'white'}}>
                                <h2>{datos.cases}</h2>
                            </div>
                            <div className="progress progress-bar-alt-success">
                                <div className="progress-bar bg-success" 
                                role="progressbar" 
                                aria-aria-valuenow="77" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                style={{width:'100%'}}>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* muertes totales */}

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-center border mt-3 p-2">
                            <h4 className="font-weight-bold">Muertes</h4>
                            <div className="border bg-dark" style={{color:'white'}}>
                                <h2>{datos.deaths}</h2>
                            </div>
                            <div className="progress progress-bar-alt-success">
                                <div className="progress-bar bg-success" 
                                role="progressbar" 
                                aria-aria-valuenow="77" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                style={{width:'100%'}}>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recuperados totales */}

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-center border mt-3 p-2">
                            <h4 className="font-weight-bold">Recuperados</h4>
                            <div className="border bg-dark" style={{color:'white'}}>
                                <h2>{datos.recovered}</h2>
                            </div>
                            <div className="progress progress-bar-alt-success">
                                <div className="progress-bar bg-success" 
                                role="progressbar" 
                                aria-aria-valuenow="77" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                style={{width:'100%'}}>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* criticos */}

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-secondary text-center border mt-3 p-2">
                            <h4 className="font-weight-bold">Criticos</h4>
                            <div className="border bg-dark" style={{color:'white'}}>
                                <h2>{datos.critical}</h2>
                            </div>
                            <div className="progress progress-bar-alt-success">
                                <div className="progress-bar bg-success" 
                                role="progressbar" 
                                aria-aria-valuenow="77" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                style={{width:'100%'}}>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            }            
        </div>
    )
}
