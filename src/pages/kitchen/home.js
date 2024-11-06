import React from 'react';

// Import styles
import styles from './home.module.css';

// Import components
import KitchenBanner from '../../components/Kitchen/banner';
import ColombianCocina from '../../components/Kitchen/colombianCocina';
import AllYouCanEat from '../../components/Kitchen/allYouCanEat';

function CocinaHome() {
    return (
        <div>
            <h1>Home Page</h1>

            {/* ############################ */}
            {/* ########## Banner ########## */}
            {/* ############################ */}
            <KitchenBanner />

            {/* ############################################## */}
            {/* ########## Colombian Cosina Section ########## */}
            {/* ############################################## */}
            <ColombianCocina />

            {/* ############################################# */}
            {/* ########## Chef's Favorite Section ########## */}
            {/* ############################################# */}


            {/* ############################################# */}
            {/* ########## All You Can Eat Section ########## */}
            {/* ############################################# */}
            <AllYouCanEat />


            {/* ########################################### */}
            {/* ########## Empanada CLub Section ########## */}
            {/* ########################################### */}


            {/* ###################################################### */}
            {/* ########## Rosita's Treats Presents Section ########## */}
            {/* ###################################################### */}


        </div>
    );
}

export default CocinaHome;