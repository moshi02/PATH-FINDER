import { useEffect } from 'react';
import "../CC/CC.scss";
import Navbar from '../../components/Navbar';
import Newscover from '../../components/Newscover';
import Footer from '../../components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

// import '@fortawesome/fontawesome-free/css/all.css'; 

function Card() {
  useEffect(() => {
    const $cell = document.querySelectorAll('.card');

    function handleExpanderClick(event) {
      const $thisCell = event.currentTarget.closest('.card');

      if ($thisCell.classList.contains('is-collapsed')) {
        $cell.forEach(cell => {
          if (cell !== $thisCell) {
            cell.classList.remove('is-expanded');
            cell.classList.add('is-collapsed', 'is-inactive');
          }
        });

        $thisCell.classList.remove('is-collapsed');
        $thisCell.classList.add('is-expanded');

        if (!$cell.forEach(cell => cell.classList.contains('is-inactive'))) {
          $cell.forEach(cell => cell.classList.add('is-inactive'));
        }
      } else {
        $thisCell.classList.remove('is-expanded');
        $thisCell.classList.add('is-collapsed');
        $cell.forEach(cell => cell.classList.remove('is-inactive'));
      }
    }

    function handleCollapserClick(event) {
      const $thisCell = event.currentTarget.closest('.card');

      $thisCell.classList.remove('is-expanded');
      $thisCell.classList.add('is-collapsed');
      $cell.forEach(cell => cell.classList.remove('is-inactive'));
    }

    $cell.forEach(cell => {
      cell.querySelector('.js-expander').addEventListener('click', handleExpanderClick);
      cell.querySelector('.js-collapser').addEventListener('click', handleCollapserClick);
    });

    return () => {
      $cell.forEach(cell => {
        cell.querySelector('.js-expander').removeEventListener('click', handleExpanderClick);
        cell.querySelector('.js-collapser').removeEventListener('click', handleCollapserClick);
      });
    };
  }, []);

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
        <input type="search"  className="search_course"   placeholder='Search for information on 200+ career options'/>
        </div>
        <div className="button">
          <button>Search</button>
        </div>
        
      </div>


    <div className="wrapper">
      <div className="cards">
        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/1.Engineering-Cover.png" alt="" />
            <p>Engineering</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            

            <p>Here are sub-parts of Engineering : <br />Electrics and Electronics Engineering<br />
            Mechanical and Automative Engineering<br />
            Civil Engineering<br />
            Chemical and petrolium Engineering<br />
            Aerospace Engineering<br />
            CS-IT Engineering<br />
            Sound Engineering <br />
            Marine Engineering <br />
            Robotics <br />
            AIML
            </p>
            
            
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="src\images\2.png" alt="" />
            <p>Computer Application & IT</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            <p></p>
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/3.Ethical-Hacking-Cover.png" alt="" />
            <p>Ethical Hacking</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/4.Aviation-Cover.png" alt="" />
            <p>Aviation</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/5.Architecture-Cover.png" alt="" />
            <p>Architecture</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/6.Merchant-Navy-Cover.png" alt="" />
            <p>Merchant Navy</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/7.Food-Agriculture-Cover.png" alt="" />
            <p>Food & Agriculture</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/8.Physical-Science-Cover.png" alt="" />
            <p>Physical Science</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/9.Life-Science-Cover.png" alt="" />
            <p>Live Science / Envirnoment</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/10.Maths-Statistics-Cover.png" alt="" />
            <p>Maths & Statistics</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/11.Medicine-Cover.png" alt="" />
            <p>Medicine</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/12.Allied-Medicine-Cover.png" alt="" />
            <p>Allied Medicine</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/13.Nutrition-Fitness-Cover.png" alt="" />
            <p>Nutrition & Fitness</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/14.Design-Cover.png" alt="" />
            <p>Design</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span><img src="http://mindlercareerlibrarynew.imgix.net/15.Animation-Graphics-Cover.png" alt="" />
            <p>Animation & Graphics</p>
            </span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>
        

        {/* Repeat the above card structure for each card */}
      </div>

    <Newscover />
    <Footer />
    </div>
    </div>
    </>
  );
}

export default Card;
