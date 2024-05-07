/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'; // Import React and useEffect
import "../CC/CC.scss";
import Navbar from '../../components/Navbar';
// import Newscover from '../../components/Newscover';
// import Footer from '../../components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';
import Newscover from '../../components/Newscover';
import bannerphoto from "../../images/Screenshot 2024-05-02 003503.png"

function Card() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    { id: 1, name: 'Engineering', imgUrl: 'https://img.freepik.com/premium-vector/engineers-cartoon-set-with-civil-engineering-construction-workers-architect-surveyor-illustration_180264-7.jpg?w=2000', info: 'Engineering is the practice of using natural science, mathematics, and the engineering design process[1] to solve technical problems, increase efficiency and productivity, and improve systems. Modern engineering comprises many subfields which include designing and improving infrastructure, machinery, vehicles, electronics, materials, and energy systems. Engineering offers diverse career opportunities, including roles in civil engineering, mechanical engineering, electrical engineering, and more.' },
    { id: 2, name: 'Computer Application & IT', imgUrl: 'https://th.bing.com/th/id/OIP.ZXaSMoRBlIzaQOwt7Kvh3AHaFj?rs=1&pid=ImgDetMain', info: 'An application program (software application, or application, or app for short) is a computer program designed to carry out a specific task other than one relating to the operation of the computer itself, typically to be used by end-users.Word processors, media players, and accounting software are examples. The collective noun "application software" refers to all applications collectively.The other principal classifications of software are system software, relating to the operation of the computer, and utility software ("utilities")' },
    { id: 3, name: 'Health tech', imgUrl: 'https://www.sinequa.com/wp-content/uploads/2023/08/speed-drug-discovery-with-ai-search-1-scaled-e1692298725473.jpg', info: 'Health technology is defined by the World Health Organization as the "application of organized knowledge and skills in the form of devices, medicines, vaccines, procedures, and systems developed to solve a health problem and improve quality of lives".This includes pharmaceuticals, devices, procedures, and organizational systems used in the healthcare industry,as well as computer-supported information systems. In the United States, these technologies involve standardized physical objects, as well as traditional and designed social means and methods to treat or care for patients.' },
    { id: 4, name: 'Cyber security', imgUrl: 'https://th.bing.com/th/id/OIP.f-jCgc2sA2I76AIbNxo-AwHaEK?w=2000&h=1125&rs=1&pid=ImgDetMain', info: 'Computer security, cybersecurity, digital security or information technology security (IT security) is the protection of computer systems and networks from attacks by malicious actors that may result in unauthorized information disclosure, theft of, or damage to hardware, software, or data, as well as from the disruption or misdirection of the services they provide.' },
    { id: 5, name: 'Media and Communication', imgUrl: 'https://cdn.vectorstock.com/i/preview-1x/50/62/online-video-stream-concept-multimedia-cinema-vector-34645062.jpg', info: 'In communication, media are the outlets or tools used to store and deliver content; semantic information or subject matter of which the media contains.The term generally refers to components of the mass media communications industry, such as print media, publishing, news media, photography, cinema, broadcasting (radio and television), digital media, and advertising.' },
    { id: 6, name: 'Ethical hacking & IT', imgUrl: 'https://cdn.leverageedu.com/blog/wp-content/uploads/2020/09/04184611/how-to-become-an-ethical-hacker.png', info: 'Ethical hacking, also known as white hat hacking, involves using the same hacking techniques and knowledge as malicious hackers, but with a legitimate purpose. Ethical hackers are authorized to identify vulnerabilities in computer systems, networks, and applications. They work with organizations to find and fix these weaknesses before malicious actors can exploit them. This proactive approach helps organizations improve their security posture and prevent cyberattacks.' },
    { id: 7, name: 'Medical Field', imgUrl: 'https://static.vecteezy.com/system/resources/previews/000/656/881/original/set-of-doctor-cartoon-characters-medical-staff-team-concept-in-hospital-vector.jpg', info: 'Medicine is the science and practice of caring for patients, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness. Contemporary medicine applies biomedical sciences, biomedical research, genetics, and medical technology to diagnose, treat, and prevent injury and disease, typically through pharmaceuticals or surgery, but also through therapies as diverse as psychotherapy, external splints and traction, medical devices, biologics, and ionizing radiation, amongst others.' },
    { id: 8, name: 'Business and Management', imgUrl: 'https://th.bing.com/th/id/OIP.7gMK5gHBfGJ48yMPFyFoBwHaEf?w=1024&h=621&rs=1&pid=ImgDetMain', info: 'Business and management encompass the activities of overseeing and directing all aspects of a company or organization. This includes planning, organizing, staffing, leading, and controlling resources to achieve specific goals.  Business professionals wear many hats, from strategizing marketing campaigns and managing finances to ensuring smooth operations and motivating employees. Effective business management requires a strong understanding of various disciplines like accounting, marketing, human resources, and leadership.' },
    { id: 9, name: 'Accounting and Finance', imgUrl: 'https://www.freestonelms.com/wp-content/uploads/2021/10/blog-card-accounting-ed-trends-1920x1162-1-980x593.png', info: 'Information Technology (IT), Computer Science Engineering (CSE), Software Engineering, Computer Application, etc.' },
    { id: 10, name: 'Law', imgUrl: 'https://static.vecteezy.com/system/resources/previews/007/630/238/original/court-there-is-justice-decision-and-law-with-laws-scales-buildings-wooden-judge-hammer-in-flat-cartoon-design-illustration-vector.jpg', info: 'Law is a set of rules that are created and are enforceable by social or governmental institutions to regulate behavior, with its precise definition a matter of longstanding debate.It has been variously described as a scienceand as the art of justice.State-enforced laws can be made by a group legislature or by a single legislator, resulting in statutes; by the executive through decrees and regulations; or established by judges through precedent, usually in common law jurisdictions. Private individuals may create legally binding contracts, including arbitration agreements that adopt alternative ways of resolving disputes to standard court litigation. The creation of laws themselves may be influenced by a constitution, written or tacit, and the rights encoded therein. The law shapes politics, economics, history and society in various ways and also serves as a mediator of relations between people.' },
    { id: 11, name: 'Counselor', imgUrl: 'https://thumbs.dreamstime.com/b/individual-session-psychologist-flat-color-vector-illustration-mental-health-issues-treatment-psychological-therapy-d-cartoon-195479039.jpg', info: 'A counselor offers guidance and support to individuals facing challenges in life. By listening empathetically and providing evidence-based interventions, counselors help clients navigate mental health issues, relationship struggles, and career decisions. They create a safe environment for clients to explore their emotions and behaviors, fostering self-awareness and positive change. With their expertise, counselors empower individuals to overcome obstacles and lead healthier, more fulfilling lives.' },
    { id: 12, name: 'Consultant', imgUrl: 'https://th.bing.com/th/id/OIP.5D73ASA7ic7SkO2Rz35mfQHaEo?w=2343&h=1465&rs=1&pid=ImgDetMain', info: 'A consultant is an expert who provides professional advice to businesses, organizations, or individuals in a specific area. They leverage their deep knowledge and experience to help clients solve problems, improve performance, and achieve their goals. Consultants can be internal, employed by the organization they advise, or external, working independently or for a consulting firm. Their tasks vary depending on the project, but they often conduct research, analyze data, identify areas for improvement, develop recommendations, and sometimes even assist with implementation.' },
   
    
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
    <div >
      <Navbar />
      <div className='maindiv'>
        <div className="img">
          <img className="banner" src={bannerphoto} alt="" />
        
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
    </div>
  );
}

export default Card;
