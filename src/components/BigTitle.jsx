import React from 'react';
import '@styles/BigTitle.scss'

function BigTitle({title}) {
    return (
    <div className="big-title">
        <h1 className="title-preview">
            {title}
        </h1>
    </div>
    );
}

export default BigTitle;