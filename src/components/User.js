import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let gretting;
    if(familiar){
        gretting = <p>Welcome, my friend.</p>
    }
    else{
        gretting = <p>Who the hell are you?</p>
    }
    return (
        <div>
            <div>
                <h2>Grettings</h2>
                {gretting}
            </div>
            <div>
                <h2>Food</h2>
                {/* tarnary operator */}
                {
                    familiar ? <p>I will buy Food for you.</p> : <p>Lets eat his his whose whose?</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {/* use likes, when only if condition is present in condition */}
                {
                    familiar && <div>Let's Join my facebook.</div>
                }
            </div>
        </div>
    );
};

export default User;