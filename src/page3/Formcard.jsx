import React from 'react';
import './Formcard.css';
import Image1 from './Image1.png';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';
import Image4 from './Image4.jpg';
import Image5 from './Image5.jpg';
import Image6 from './Image6.jpg';
import Image7 from './Image7.jpg';
const formCards = [
  { id: 1, title: 'Marketing',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image1 },
  { id: 2, title: 'Design',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image2 },
  { id: 3, title: 'Programming',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image3 },
  { id: 4, title: 'Technology',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image4 },
  { id: 5, title: 'Cooking',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image5 },
  { id: 6, title: 'Health and care',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image6 },
  { id: 7, title: 'Photograph',description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus", image: Image7 },
];

const Formcard =()=>{
  return (
    <div className="card-container">
      {formCards.map(card => (
        <div
            key={card.id}
          className="form-card"
          style={{ backgroundImage: `url(${card.image})` }}
        >          
            <div className="p3d2">
                  <h1>{card.title}</h1> 
                  <p>{card.description}</p>
            </div>
        </div>
      ))}
              
    </div>
  );
};

export default Formcard;
