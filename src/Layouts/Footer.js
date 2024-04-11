import React from 'react'

function Footer() {
    return (
        <>


            <footer className="bg-mode py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Footer nav START */}
                            <ul className="nav justify-content-center justify-content-md-start lh-1">
                                <li className="nav-item">
                                    <a className="nav-link" href="my-profile-about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="privacy-and-terms.html">Privacy &amp; terms</a>
                                </li>
                            </ul>
                            {/* Footer nav START */}
                        </div>
                        <div className="col-md-6">
                            {/* Copyright START */}
                            <p className="text-center text-md-end mb-0">©2023 <a className="text-body" target="_blank" href="https://www.webestica.com"> Webestica </a>All rights reserved.</p>
                            {/* Copyright END */}
                        </div>
                    </div>
                </div>
            </footer>










        </>
    )
}

export default Footer