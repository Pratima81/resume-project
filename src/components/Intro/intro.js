import React from 'react'
import './intro.css'
import bg from '../../assets/pratima.png'
import bgorg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <img src={bgorg} alt="profile" className="bg" />
            <div className="introContent">
                <span className='hello'>Hello</span>
                <span className="introText">I'm
                    <span className="introName"> Pratima</span><br />
                    <p className="introPara">I am a skilled web designer with experience <br />in creating visually appealing web design</p>
                    <Link><button className="btn"><img src={btnImg} alt="HireMe" className='btnImg' />Hire me</button></Link>
                </span>
            </div>

        </section >
    )
}

export default Intro
