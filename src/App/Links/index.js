import React from "react";

import './links.scss'

import data from './data'

for (const prop in data) {
    console.log(data[prop])
}




function Links() {
    return (
        <div className="holder">
            <ul className="links_holder">
                <li className="sphere">
                    <h2>IT</h2>
                    <ul>
                        <li>
                            <a href="/game.html">game</a>
                        </li>
                        <li>
                            <a href="/geo.html">geo</a>
                        </li>
                        <li>
                            <a href="/rwd.html">rwd</a>
                        </li>
                        <li>
                            <a href="/slot.html">slot</a>
                        </li>
                        <li>
                            <a href="/wsg.html">wsg</a>
                        </li>
                    </ul>
                </li>
                <li className="sphere">
                    <h2>Architecture</h2>
                    <ul>
                        <li>
                            <a href="http://scandinaviantree.com">scandinavianiatree</a>
                        </li>
                        <li>
                            <a href="https://ovlay.herokuapp.com/">ovlay</a>
                        </li>
                        <li>
                            <a href="/st.html">st</a>
                        </li>
                        <li>
                            <a href="/tree.pdf">tree</a>
                        </li>
                        <li>
                            <a href="/user.html">user</a>
                        </li>
                    </ul>
                </li>
                <li className="sphere">
                    <h2>Philosophy</h2>
                    <ul>
                        <li>
                            <a href="/melet.html">melet</a>
                        </li>
                        <li>
                            <a href="/paul-ricoeur.html">paul-ricoeur</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Links;

