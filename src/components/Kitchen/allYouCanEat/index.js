import React from 'react';

// Import styles
import styles from './allYouCanEat.module.css'

function AllYouCanEat() {
    return ( 
        <div className={styles.allYouCanEatSection}>
            {/* Left Section */}
            <div className={styles.allYouCanEatSubsection}>
                I'm right
            </div>

            {/* Right Section */}
            <div className={styles.allYouCanEatSubsection}>
                I'm left
            </div>
        </div>
    );
}

export default AllYouCanEat