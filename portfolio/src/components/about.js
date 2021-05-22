import React, {useState} from 'react';
import './about.css'
import portfolio from "../images/me.PNG";

function About() {
    const [blog, setBlog] = useState("Hi, my name is Steven Woo. From a young age I've had a passionate interest within the field of Web Design. It always intrigued me how all of these lines of code came together to create a website, let alone a customizable design space that contains the visual ideas of the creator. I attended Brooklyn College in 2018 with the focus on Computer Science. I enjoyed it a lot and came out successfully with my certificate for bachelors of science (BS). The combination of what I learnt in my degree, matched with my ideas and interets within web, has made me make the confident decision to persue a career within the field of Web Development and Design.");

    return (
        <>
            <h2>ABOUT</h2>
            <div className = "Card">
                <div className = 'upper-container'>
                    <div className = 'image-container'>
                        <img src = {portfolio} alt = "me"/>
                    </div>
                    <div className = "lower-container">
                        <p>{blog}</p>
                        <button class="resume"><a href="Resume.pdf">Resume</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
