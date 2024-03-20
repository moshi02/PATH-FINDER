import React, { useEffect } from 'react';
import "../CC/CC.css";
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome stylesheet

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

    


    <div className="wrapper">
      <div className="cards">
        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>

        <div className="card [ is-collapsed ]">
          <div className="card__inner [ js-expander ]">
            <span>Card</span>
            <i className="fa fa-folder-o"></i>
          </div>
          <div className="card__expander">
            <i className="fa fa-close [ js-collapser ]"></i>
            Expander
          </div>
        </div>
        

        {/* Repeat the above card structure for each card */}
      </div>


    </div>
  );
}

export default Card;
