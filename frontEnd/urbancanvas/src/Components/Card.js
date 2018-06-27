import React from 'react';

const Card = () => {
    let style = {
        backgroundColor: "black",
        width: "60%"

    }
    let cardStyle = {
        width: "80%",
        height: "auto",
        padding: "10%"
    }
    let ptag = {
        color: "white"
    }
    return (
        <section style={style} >
            <img style={cardStyle} src="https://lh5.ggpht.com/jyCBS54ZBvqCks_Uy7yXzsfXDYoSNg52TpsWG6Ta0ATu7wKr2b8mWuv7YfSg" alt="art" />
            <p style={ptag}>
                Location
            </p>
        </section>
    )
}

export default Card