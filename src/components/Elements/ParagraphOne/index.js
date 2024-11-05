import React from 'react';

// Import styles
import styles from './ParagraphOne.module.css';

function ParagraphOne({additionalClasses, children}) {
    return ( 
        <p className={`${additionalClasses} ${styles.paragraphOne}`}>{children}</p>
    );
}

export default ParagraphOne;