import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import './App.css';

const HomeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const IconLink = (props) => {
    return (
        <div >
            <HomeIcon color="primary" style={{ fontSize: 30 }} />
        </div>
    )
}

export default (IconLink);