import React from 'react';

function MemoFunction() {

    console.log("MemoFunction rendering");

    return (
        <span className="title">Timer</span>
    );
}

export default React.memo(MemoFunction);