import React from 'react';
import {Card} from 'react-bootstrap'

function about() {
    return (
        <Card class = "about" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>ABOUT</Card.Title>
                <Card.Text>
                    Hi, my name is Steven Woo.

                    From a young age I've had a passionate interest within the field of Web Design. It always
                    intrigued me how all of these lines of code came together to create
                    a website, let alone a customizable design space that contains the visual ideas of the creator.
                    I attended Brooklyn College in 2018 with the focus on Computer Science.
                    I enjoyed it a lot and came out successfully with my certificate for bachelors of science (BS).
                    The combination of what I learnt in my degree, matched with my ideas and
                    interets within web, has made me make the confident decision to persue a career within the field
                    of Web Development and Design.

                </Card.Text>
                <button class="resume"><a href="Resume.pdf">Resume</a></button>
            </Card.Body>
        </Card>

    )
}

export default about;
