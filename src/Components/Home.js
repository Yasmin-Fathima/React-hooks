import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <button>
                <Link to='/color'>Color</Link>
            </button>
            <button>
                <Link to='/prevElement'>PrevElement</Link>
            </button>
            <button>
                <Link to='/counter'>Counter</Link>
            </button>
            <button>
                <Link to='/addSubtract'>AddSubtract</Link>
            </button>
        </div>
    )
}

export default Home;