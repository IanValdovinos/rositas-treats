import React from 'react';

// Import styles
import styles from './chefsFavorites.module.css';

// Import media
import RightSectionPicture from '../../../assets/images/test/food_8.jpg';

// Import components
import ParagraphOne from '../../Elements/ParagraphOne';
import BaseButton from '../../Elements/BaseButton';
import Marquee from "react-fast-marquee";

function ChefsFavorites() {
    return (  
        <div className={styles.chefsFavoritesSection}>
            <div className={styles.marqueeContainer}>
                <Marquee className={styles.marquee} autoFill={false}>
                    <h1>CHEF'S FAVORITES ~ CHEF'S FAVORITES ~ CHEF'S FAVORITES ~ CHEF'S FAVORITES ~ CHEF'S FAVORITES ~  </h1>
                </Marquee>
            </div>

            {/* ########## Left section (content) ######### */}
            <div className={styles.chefsFavoritesSectionLeft}>     
                <ParagraphOne additionalClasses={styles.chefsFavoritesSectionLeftParagraph}>
                    Picada del Mar is a chef's favorite, showcasing the vibrant flavors of Colombia's coast. A seafood medley of shrimp, calamari, fish, and mussels, all perfectly seasoned and grilled to perfection. Served with golden plantains, yuca fries, and a tangy salsa, this dish is a true celebration of the sea and Colombian culinary tradition.
                </ParagraphOne>

                <div className={styles.buttonContainer}>
                    <BaseButton additionalClassNames={styles.chefsFavoritesSectionLeftButton}>ORDER NOW</BaseButton>
                </div> 
            </div>

            {/* ########## Right section (picture) ######### */}
            <div className={styles.chefsFavoritesSectionRight}>
                <div className={styles.imageContainer}>
                    <img src={RightSectionPicture} alt="Chef's recommendation"/>
                </div>
            </div>
        </div>
    );
}

export default ChefsFavorites;