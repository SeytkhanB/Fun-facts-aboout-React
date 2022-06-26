

import React from 'react'
import '../style.css'

export default function Footer(props) {


    return (
        <footer className={props.darkMode ? 'dark' : ''}>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    );
}



