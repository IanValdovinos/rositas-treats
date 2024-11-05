import React from "react";
import styles from './BaseButton.module.css';

function BaseButton({additionalClassNames, onClick, children}) {
    return ( 
        <div className={`${additionalClassNames} ${styles.baseButton}`} onClick={onClick}>
            <p>{children}</p>
        </div>
     );
}

export default BaseButton;