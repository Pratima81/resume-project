import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do </span>
            <span className="skillDescription">
                I am a skill and passionate web designer with experience indesign in the web development
                I am a skill and passionate web designer with experience indesign in the web development
                I am a skill and passionate web designer with experience indesign in the web development
                I am a skill and passionate web designer with experience indesign in the web development
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a Demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a Demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a Demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a Demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
