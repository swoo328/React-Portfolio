import React from 'react';
import './contact.css'

function Contact (){
    return(
        <>
        <form className = "form">
            <h2>CONTACT</h2>
            <label>Name</label>
            <input placeholder = "name"/>

            <label>Email</label>
            <input placeholder = "email"/>

            <label>Phone</label>
            <input placeholder = "phone"/>

            <label>Message</label>
            <textarea placeholder = "Message"></textarea>
        </form>
        </>
    )
}

export default Contact;