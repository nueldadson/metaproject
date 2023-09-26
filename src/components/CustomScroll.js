import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/scroll.css';
import adultMale from '../assets/adult male.jpeg';
import ladyGlasses from '../assets/lady with glasses.jpeg';
import afroMale from '../assets/young male with afro.jpeg';
import aiFemale from '../assets/AI photo of female.jpg';
import maleLaughing from '../assets/male laughing.jpeg';

const testimonials = [
    {
        "image": adultMale,
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "image": ladyGlasses,
        "content": "I recommend them for a perfect outdoor hangout with friends."
    },
    {
        "image": afroMale,
        "content": "I enjoyed a wonderful evening with my family."
    },
    {
        "image": aiFemale,
        "content": "The Lemon dessert is out of this world."
    },
    {
        "image": maleLaughing,
        "content": "I trusted them to handle my wedding and they came through excellently."
    }
  ]

const CustomScroll = () => {
  return (

        <Container>
            <ul className="cards">
            {testimonials.map(({ image, rating, content }) => (
                <li key={content} className="card">
                    <div>
                        <img src={image} alt="Testimonial" className="text-center" style={{borderRadius: '18px',border: 'solid 9px #EE9972'}}/>
                        <p className="text-center" style={{marginTop: '1em'}}>★★★☆</p>
                        <div className="card-content text-center">
                            <p>{content}</p>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </Container>
    
    );
};

export default CustomScroll;
