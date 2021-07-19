import React from "react";
import { TestimonialsSection } from "./Testimonials.styled";
import { Carousel, Card } from 'antd';

const Testimonials = () => {
    return (
        <TestimonialsSection>
            <div className="title-wrapper">
                <h1>
                    Our Clients speak
                </h1>
                <h3>
                    We have been working with clients around the world
                </h3>
            </div>
            <Carousel>
                <div>
                    <div className="container">
                        <div className="card-container">
                            <Card className="card">
                                <h2>Efficient Collaborating</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            </Card>

                            <div className="details">
                                <div className="imgbx">
                                    <img src="https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png" alt="" />
                                </div>
                                <h2>Jane Cooper</h2>
                                <span>CEO at ABC Corporation</span>
                            </div>
                        </div>

                        <div className="card-container">
                            <Card className="card">
                                <h2>Intuitive Design</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            </Card>
                            <div className="details">
                                <div className="imgbx">
                                    <img src="https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png" alt="" />
                                </div>
                                <h2>Jane Cooper</h2>
                                <span>CEO at ABC Corporation</span>
                            </div>
                        </div>

                        <div className="card-container">
                            <Card className="card">
                                <h2>Mindblowing Service</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            </Card>
                            <div className="details">
                                <div className="imgbx">
                                    <img src="https://www.civillo.com/wp-content/uploads/elementor/thumbs/Rectangle-52-1-oojl7ocgchwhqkun45q5vi7dujwj3fylwr4ug9xbe8.png" alt="" />
                                </div>
                                <h2>Jane Cooper</h2>
                                <span>CEO at ABC Corporation</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3></h3>
                </div>
                
            </Carousel>
        </TestimonialsSection>
    )
}

export default Testimonials;