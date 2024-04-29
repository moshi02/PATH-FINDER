/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'; // Import React and useEffect
import "../CC/CC.scss";
import Navbar from '../../components/Navbar';
// import Newscover from '../../components/Newscover';
// import Footer from '../../components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import Newscover from '../../components/Newscover';

function Card() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    { id: 1, name: 'Engineering', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Here are sub-parts of Engineering: Electrics and Electronics Engineering, Mechanical and Automotive Engineering, Civil Engineering, Chemical and Petroleum Engineering, Aerospace Engineering, CS-IT Engineering, Sound Engineering, Marine Engineering, Robotics, AIML' },
    { id: 2, name: 'Computer Application & IT', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 3, name: 'Health tech', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 4, name: 'Cyber security', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 5, name: 'Tele communication', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 6, name: 'Ethical hacking & IT', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 7, name: 'Engineering', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Here are sub-parts of Engineering: Electrics and Electronics Engineering, Mechanical and Automotive Engineering, Civil Engineering, Chemical and Petroleum Engineering, Aerospace Engineering, CS-IT Engineering, Sound Engineering, Marine Engineering, Robotics, AIML' },
    { id: 8, name: 'Computer Application & IT', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 9, name: 'Health tech', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 10, name: 'Cyber security', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 11, name: 'Tele communication', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 12, name: 'Ethical hacking & IT', imgUrl: 'http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
   
    // Add more cards here
    
  ];
  useEffect(() => {
    setFilteredCards(cards.filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCardClick = (id) => {
    setFilteredCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, expanded: !card.expanded } : card
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className='maindiv'>
        <div className="img">
          <img className="banner" src="src\images\banner for careers page.png" alt="" />
        </div>

        <h1 className='first-text'>What career are you looking for?</h1>

        <div className="search">
          <div className="input">
            <input type="search" className="search_course" placeholder='Search for information on 200+ career options' value={searchQuery} onChange={handleSearchInputChange} />
          </div>
          <div className="button">
            <button>Search</button>
          </div>
        </div>

        <div className="wrapper">
          <div className="cards">
            {filteredCards.map(card => (
              <div className={`card ${card.expanded ? 'is-expanded' : 'is-collapsed'}`} key={card.id} onClick={() => handleCardClick(card.id)}>
                <div className="card__inner">
                  <span>
                    <img src={card.imgUrl} alt={card.name} />
                    <p>{card.name}</p>
                  </span>
                  <i className="fa fa-folder-o"></i>
                </div>
                <div className="card__expander">
                  <i className="fa fa-close"></i>
                  <p>{card.expanded ? card.info : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div> 
    </>
  );
}

export default Card;
