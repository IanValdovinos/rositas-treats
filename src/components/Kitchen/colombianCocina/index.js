import React from 'react';

// Import styles
import styles from './colombianCocina.module.css';

// Import components
import BaseButton from '../../Elements/BaseButton';

// Images and Videos
import CocinaPicture from '../../../assets/images/test/food_7.jpg';


function ColombianCocina() {
    return (
        <div>
            <div className={styles.colombianCocina}>
                <div className={styles.colombianCocinaSection}>
                    <img src={CocinaPicture} alt='Colombian Cocina' />
                </div>

                <div className={styles.colombianCocinaItem}>
                    <h1>Colombian Cocina</h1>
                    <p>Rosandys' love of Cartagena food is obvious in her hand made treats. Her empanadas are sure to make you miss home after eating these treats. She learned how to make the empanadas from her mother Aida while growing up in Cartagena.Rosandys started making empanada's while she was working as a professional singer in China many years ago. She had a large following of local and ex-pats that loved and missed their food from
                    </p>
                </div>

            </div>

            <BaseButton />
        </div>

    );
}

export default ColombianCocina; 