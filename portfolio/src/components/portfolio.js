import React from 'react';
import brew from "../images/brew.PNG";
import burger from "../images/burger.PNG";
import note from "../images/note.PNG";
import pokemon from "../images/pokemon.PNG";
import ranPassword from "../images/password.PNG";
import movie from "../images/movie.PNG";


function Portfolio() {
    //card body for 6 projects
    return (
        <>
            <h2>PORTFOLIO</h2>
            <div className="container-fluid d flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            {/* Note Taker */}
                            <div className="overflow">
                                <img src={note} alt="project1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Note Taker</h4>
                                <p className="card-text text-secondary">
                                    Created an application where the user can write and save notes. Not only that,
                                    the user can delete notes that was written before. This is used to organize and keep track of tasks.
                                </p>
                                <a href="https://github.com/swoo328/NoteTaker" class="card-link">Repository</a>
                                <a href="https://notingtake.herokuapp.com/" class="card-link">Heroku Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            {/* brew time */}
                            <div className="overflow">
                                <img src={brew} alt="project2" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Brew Time</h4>
                                <p className="card-text text-secondary">
                                    Created an application that allows the user to create a login in order to access the google maps. 
                                    The user will be able to see coffee shops around the area based on user's location.
                                </p>
                                <a href="https://github.com/jhohing/BrewTime" class="card-link">Repository</a>
                                <a href="https://apricot-shortcake-18871.herokuapp.com/" class="card-link">Github Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            {/* burger maker */}
                            <div className="overflow">
                                <img src={burger} alt="project3" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Burger Eater</h4>
                                <p className="card-text text-secondary">
                                    This application is created in order to store and display burgers on the page.
                                    The user will be able to log all the burgers they have devour or waiting to be eaten.
                                </p>
                                <a href="https://github.com/swoo328/burgerEater" class="card-link">Repository</a>
                                <a href="https://burgermakerr.herokuapp.com/" class="card-link">Heroku Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center">
                            {/* password generator */}
                            <div className="overflow">
                                <img src={ranPassword} alt="project1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Random-PWDGenerator</h4>
                                <p className="card-text text-secondary">
                                    Created an application that generates a random password based on the user's choices.
                                    Once the user fills their criteria a password will created base on those criterias.
                                </p>
                                <a href="https://github.com/swoo328/Random-PWDGenerator" class="card-link">Repository</a>
                                <a href="https://swoo328.github.io/Random-PWDGenerator/" class="card-link">Github Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={movie} alt="project1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Movie Synopsis</h4>
                                <p className="card-text text-secondary">
                                    Allows user to search for a single movie or multi movies at once. With the single movie search, 
                                    you can get the different options such as genre, rated, providers, etc
                                </p>
                                <a href="https://github.com/jhohing/MovieSynopsis" class="card-link">Repository</a>
                                <a href="https://jhohing.github.io/MovieSynopsis" class="card-link">Github Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="overflow">
                                <img src={pokemon} alt="project1" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card title">Poke-Quiz</h4>
                                <p className="card-text text-secondary">
                                    A pokemon questionaire that will test your knowledge of pokemon. You are 
                                    given a timer to answer all the questions as best as possible and get the best possible score.
                                </p>
                                <a href="https://github.com/swoo328/Poke-Quiz-" class="card-link">Repository</a>
                                <a href="https://swoo328.github.io/Poke-Quiz-/" class="card-link">Github Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;