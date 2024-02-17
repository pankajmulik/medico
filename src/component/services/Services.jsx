import React from 'react'
import './services.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Services = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div style={{ width: '100%', marginTop: '3%', paddingTop:'5%', paddingLeft:'2%'}}>


            <div className="carousel-serv">
                <Carousel  responsive={responsive}>
                   
                    <div className='scardst'>
                        <div className="simgs">
                            <img src="https://www.shutterstock.com/shutterstock/photos/388775896/display_1500/stock-photo-hospital-room-with-beds-and-comfortable-medical-equipped-in-a-modern-hospital-388775896.jpg"
                                alt="doctor" className='imgtwo' />
                        </div>
                        <div className="sertext" >
                            <h3>
                                Modern Devices
                            </h3>
                            <p>Access to good quality, affordable, and appropriate health products is indispensable to advance universal health coverage, address health emergencies, and promote healthier populations. </p>
                        </div>
                    </div>
                    <div className='scards'>
                        <div>
                        <div className="simgs">
                            <img src="
https://st3.depositphotos.com/10654624/14666/i/380/depositphotos_146663073-stock-photo-little-girl-visiting-doctor.jpg"
                                alt="not foi=und"  className='imgtwo'/>
                        </div>

                            <div className="sertext" >
                                <h3>Child Health</h3>
                                <p>Child heakth is necessary
                                    <br />Facility Based Newborn and Child Care <br />
                                    Assisting children and their families in transitioning from pediatric health care
                                     and active engagement with health care providers.
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='scardst'>
                        <div className="simgs">
                            <img src="
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfzVpkFSLPz_1tDvl9YxE8UJRhDmpmQ6OmgVC-gNbwZ_FDtZF6q3jHreFdGxiKXMff58&usqp=CAU"
                                alt=" not found"  className='imgthree' />
                            
                        </div>
                        <div className="sertext" >
                            <h3>Expert Professional</h3>
                            <p>Experts to check your health and cure you</p>
                        </div>
                    </div>

                    <div className='scards'>
                        <div className="simgs">
                            <img src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" alt="not found"
                            className='imgthree'
                            ></img>
                        </div>
                        <div className="sertext">
                            <h3>Surgens</h3>
                            <p>Number of professionals for you

                            </p>
                        </div>
                    </div>
                </Carousel>;


            </div>

        </div>
    )
}

export default Services