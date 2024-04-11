import React from 'react'
import TopBar from '../Layouts/TopBar'

function Profil() {
    return (
        <>
            <TopBar />

            <main className="mt-5">
                {/* Container START */}
                <div className="container">
                    <div className="row g-4">
                        {/* Sidenav START */}
                        <div className="col-lg-3">
                            {/* Advanced filter responsive toggler START */}
                            <div className="d-flex align-items-center d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                                    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h" /></span>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                                </button>
                            </div>
                            {/* Advanced filter responsive toggler END */}
                            {/* Navbar START*/}
                            <nav className="navbar navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSideNavbar">
                                    {/* Offcanvas header */}
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close" />
                                    </div>
                                    {/* Offcanvas body */}
                                    <div className="offcanvas-body d-block px-2 px-lg-0">
                                        {/* Card START */}
                                        <div className="card overflow-hidden">
                                            {/* Cover image */}
                                            <div className="h-50px" style={{ backgroundImage: 'url(assets/images/bg/01.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                                            {/* Card body START */}
                                            <div className="card-body pt-0">
                                                <div className="text-center">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                                        <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt /></a>
                                                    </div>
                                                    {/* Info */}
                                                    <h5 className="mb-0"> <a href="#!">Sam Lanson </a> </h5>
                                                    <small>Web Developer at Webestica</small>
                                                    <p className="mt-3">I'd love to change the world, but they won’t give me the source code.</p>
                                                    {/* User stat START */}
                                                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                        {/* User stat item */}
                                                        <div>
                                                            <h6 className="mb-0">256</h6>
                                                            <small>Post</small>
                                                        </div>
                                                        {/* Divider */}
                                                        <div className="vr" />
                                                        {/* User stat item */}
                                                        <div>
                                                            <h6 className="mb-0">2.5K</h6>
                                                            <small>Followers</small>
                                                        </div>
                                                        {/* Divider */}
                                                        <div className="vr" />
                                                        {/* User stat item */}
                                                        <div>
                                                            <h6 className="mb-0">365</h6>
                                                            <small>Following</small>
                                                        </div>
                                                    </div>
                                                    {/* User stat END */}
                                                </div>
                                                {/* Divider */}
                                                <hr />
                                                {/* Side Nav START */}
                                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt /><span>Feed </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt /><span>Connections </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="blog.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/earth-outline-filled.svg" alt /><span>Latest News </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="events.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/calendar-outline-filled.svg" alt /><span>Events </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="groups.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/chat-outline-filled.svg" alt /><span>Groups </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="notifications.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt /><span>Notifications </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="settings.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/cog-outline-filled.svg" alt /><span>Settings </span></a>
                                                    </li>
                                                </ul>
                                                {/* Side Nav END */}
                                            </div>
                                            {/* Card body END */}
                                            {/* Card footer */}
                                            <div className="card-footer text-center py-2">
                                                <a className="btn btn-link btn-sm" href="my-profile.html">View Profile </a>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                        {/* Helper link START */}
                                        <ul className="nav small mt-4 justify-content-center lh-1">
                                            <li className="nav-item">
                                                <a className="nav-link" href="my-profile-about.html">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="settings.html">Settings</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" target="_blank" href="docs/index.html">Docs </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="help.html">Help</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="privacy-and-terms.html">Privacy &amp; terms</a>
                                            </li>
                                        </ul>
                                        {/* Helper link END */}
                                        {/* Copyright */}
                                        <p className="small text-center mt-1">©2023 <a className="text-reset" target="_blank" href="https://www.webestica.com/"> Webestica </a></p>
                                    </div>
                                </div>
                            </nav>
                            {/* Navbar END*/}
                        </div>
                        {/* Sidenav END */}
                        {/* Main content START */}
                        <div className="col-md-8 col-lg-6 vstack gap-4">
                            {/* Share feed START */}
                            <div className="card card-body">
                                <div className="d-flex mb-3">
                                    {/* Avatar */}
                                    <div className="avatar avatar-xs me-2">
                                        <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt /> </a>
                                    </div>
                                    {/* Post input */}
                                    <form className="w-100">
                                        <textarea className="form-control pe-4 border-0" rows={2} data-autoresize placeholder="Share your thoughts..." defaultValue={""} />
                                    </form>
                                </div>
                                {/* Share feed toolbar START */}
                                <ul className="nav nav-pills nav-stack small fw-normal">
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-image-fill text-success pe-2" />Photo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="bi bi-camera-reels-fill text-info pe-2" />Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents"> <i className="bi bi-calendar2-event-fill text-danger pe-2" />Event </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed"> <i className="bi bi-emoji-smile-fill text-warning pe-2" />Feeling /Activity</a>
                                    </li>
                                    <li className="nav-item dropdown ms-lg-auto">
                                        <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots" />
                                        </a>
                                        {/* Dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Create a poll</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Ask a question </a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Help</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* Share feed toolbar END */}
                            </div>
                            {/* Share feed END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar avatar-story me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /> </a>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"> <a href="#!"> Lori Ferguson </a></h6>
                                                    <span className="nav-item small"> 2hr</span>
                                                </div>
                                                <p className="mb-0 small">Web Developer at Webestica</p>
                                            </div>
                                        </div>
                                        {/* Card feed action dropdown START */}
                                        <div className="dropdown">
                                            <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            {/* Card feed action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                            </ul>
                                        </div>
                                        {/* Card feed action dropdown END */}
                                    </div>
                                </div>
                                {/* Card header END */}
                                {/* Card body START */}
                                <div className="card-body">
                                    <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                                    {/* Card img */}
                                    <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="Post" />
                                    {/* Feed react START */}
                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#!" data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" data-bs-custom-class="tooltip-text-start" data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (56)</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                        {/* Card share action START */}
                                        <li className="nav-item dropdown ms-sm-auto">
                                            <a className="nav-link mb-0" href="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action END */}
                                    </ul>
                                    {/* Feed react END */}
                                    {/* Add comment */}
                                    <div className="d-flex mb-3">
                                        {/* Avatar */}
                                        <div className="avatar avatar-xs me-2">
                                            <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt /> </a>
                                        </div>
                                        {/* Comment box  */}
                                        <form className="nav nav-item w-100 position-relative">
                                            <textarea data-autoresize className="form-control pe-5 bg-light" rows={1} placeholder="Add a comment..." defaultValue={""} />
                                            <button className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0" type="submit">
                                                <i className="bi bi-send-fill"> </i>
                                            </button>
                                        </form>
                                    </div>
                                    {/* Comment wrap START */}
                                    <ul className="comment-wrap list-unstyled">
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex position-relative">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                                    </div>
                                                    {/* Comment react */}
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Like (3)</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Reply</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> View 5 replies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Comment item nested START */}
                                            <ul className="comment-item-nested list-unstyled">
                                                {/* Comment item START */}
                                                <li className="comment-item">
                                                    <div className="d-flex">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt /></a>
                                                        </div>
                                                        {/* Comment by */}
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                            </div>
                                                            {/* Comment react */}
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Like (5)</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Reply</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* Comment item END */}
                                                {/* Comment item START */}
                                                <li className="comment-item">
                                                    <div className="d-flex">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-story avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt /></a>
                                                        </div>
                                                        {/* Comment by */}
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <a href="#!"> Billy Vasquez </a> </h6>
                                                                    <small className="ms-2">15min</small>
                                                                </div>
                                                                <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                                            </div>
                                                            {/* Comment react */}
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Like</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Reply</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* Comment item END */}
                                            </ul>
                                            {/* Load more replies */}
                                            <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot" />
                                                    <span className="spinner-dot" />
                                                    <span className="spinner-dot" />
                                                </div>
                                                Load more replies
                                            </a>
                                            {/* Comment item nested END */}
                                        </li>
                                        {/* Comment item END */}
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                                                </div>
                                                {/* Comment by */}
                                                <div className="ms-2">
                                                    <div className="bg-light p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a> </h6>
                                                            <small className="ms-2">4min</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                                    </div>
                                                    {/* Comment react */}
                                                    <ul className="nav nav-divider pt-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Like (1)</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Reply</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> View 6 replies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Comment item END */}
                                    </ul>
                                    {/* Comment wrap END */}
                                </div>
                                {/* Card body END */}
                                {/* Card footer START */}
                                <div className="card-footer border-0 pt-0">
                                    {/* Load more comments */}
                                    <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                        </div>
                                        Load more comments
                                    </a>
                                </div>
                                {/* Card footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt /> </a>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <h6 className="card-title mb-0"><a href="#!"> Bootstrap: Front-end framework </a></h6>
                                                <a href="#!" className="mb-0 text-body">Sponsored <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="You're seeing this ad because your activity meets the intended audience of our site." /> </a>
                                            </div>
                                        </div>
                                        {/* Card share action START */}
                                        <div className="dropdown">
                                            <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                            </ul>
                                        </div>
                                        {/* Card share action START */}
                                    </div>
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body">
                                    <p className="mb-0">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                                </div>
                                <img src="assets/images/post/3by2/02.jpg" alt />
                                {/* Card body END */}
                                {/* Card footer START */}
                                <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                                    <p className="mb-0">Currently v5.1.3 </p>
                                    <a className="btn btn-primary-soft btn-sm" href="#"> Download now </a>
                                </div>
                                {/* Card footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /> </a>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <h6 className="card-title mb-0"> <a href="#"> Judy Nguyen </a></h6>
                                                <div className="nav nav-divider">
                                                    <p className="nav-item mb-0 small">Web Developer at Webestica</p>
                                                    <span className="nav-item small" data-bs-toggle="tooltip" data-bs-placement="top" title="Public"> <i className="bi bi-globe" /> </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card share action START */}
                                        <div className="dropdown">
                                            <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                            </ul>
                                        </div>
                                        {/* Card share action END */}
                                    </div>
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body">
                                    <p>I'm so privileged to be involved in the <a href="#!">@bootstrap </a>hiring process! Interviewing with their team was fun and I hope this can be a valuable resource for folks! <a href="#!"> #inclusivebusiness</a> <a href="#!"> #internship</a> <a href="#!"> #hiring</a> <a href="#"> #apply </a></p>
                                    {/* Card feed grid START */}
                                    <div className="d-flex justify-content-between">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                {/* Grid img */}
                                                <a className="h-100" href="assets/images/post/1by1/03.jpg" data-glightbox data-gallery="image-popup">
                                                    <img className="rounded img-fluid" src="assets/images/post/1by1/03.jpg" alt="Image" />
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                {/* Grid img */}
                                                <a href="assets/images/post/3by2/01.jpg" data-glightbox data-gallery="image-popup">
                                                    <img className="rounded img-fluid" src="assets/images/post/3by2/01.jpg" alt="Image" />
                                                </a>
                                                {/* Grid img */}
                                                <div className="position-relative bg-dark mt-3 rounded">
                                                    <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                                                        <a className="btn btn-link text-white" href="#"> View all </a>
                                                    </div>
                                                    <a href="assets/images/post/3by2/02.jpg" data-glightbox data-gallery="image-popup">
                                                        <img className="img-fluid opacity-50 rounded" src="assets/images/post/3by2/02.jpg" alt />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card feed grid END */}
                                    {/* Feed react START */}
                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary" href="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" /> Louis, Billy and 126 others </a>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                    {/* Feed react START */}
                                    <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                                        </li>
                                        {/* Card share action menu START */}
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link mb-0" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction4">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action menu END */}
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-send-fill pe-1" />Send</a>
                                        </li>
                                    </ul>
                                    {/* Feed react START */}
                                    {/* Comment wrap START */}
                                    <ul className="comment-wrap list-unstyled">
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /> </a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                                    </div>
                                                    {/* Comment rect */}
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Like (3)</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Reply</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> View 5 replies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Comment item nested START */}
                                            <ul className="comment-item-nested list-unstyled">
                                                {/* Comment item START */}
                                                <li className="comment-item">
                                                    <div className="d-flex">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt /></a>
                                                        </div>
                                                        {/* Comment by */}
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                                            </div>
                                                            {/* Comment rect */}
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Like (5)</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Reply</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* Comment item END */}
                                                {/* Comment item START */}
                                                <li className="comment-item">
                                                    <div className="d-flex">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt /></a>
                                                        </div>
                                                        {/* Comment by */}
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <a href="#!"> Billy Vasquez </a> </h6>
                                                                    <small className="ms-2">15min</small>
                                                                </div>
                                                                <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                                            </div>
                                                            {/* Comment rect */}
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Like</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Reply</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* Load more replies */}
                                            <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot" />
                                                    <span className="spinner-dot" />
                                                    <span className="spinner-dot" />
                                                </div>
                                                Load more replies
                                            </a>
                                        </li>
                                        {/* Comment item END */}
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                                                </div>
                                                {/* Comment by */}
                                                <div className="ms-2">
                                                    <div className="bg-light p-3 rounded">
                                                        <div className="d-flex justify-content-center">
                                                            <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a> </h6>
                                                            <small className="ms-2">4min</small>
                                                        </div>
                                                        <p className="small mb-0">Congratulations:)</p>
                                                        <div className="card p-2 border border-2 rounded mt-2 shadow-none">
                                                            <img src="assets/images/elements/12.svg" alt />
                                                        </div>
                                                    </div>
                                                    {/* Comment rect */}
                                                    <ul className="nav nav-divider pt-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Like (1)</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Reply</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> View 6 replies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        {/* Comment item END */}
                                    </ul>
                                    {/* Comment wrap END */}
                                </div>
                                {/* Card body END */}
                                {/* Card footer START */}
                                <div className="card-footer border-0 pt-0">
                                    {/* Load more comments */}
                                    <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                        </div>
                                        Load more comments
                                    </a>
                                </div>
                                {/* Card footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/logo/13.svg" alt /> </a>
                                            </div>
                                            {/* Title */}
                                            <div>
                                                <h6 className="card-title mb-0"> <a href="#!"> Apple Education </a></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>
                                        {/* Card share action menu */}
                                        <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots" />
                                        </a>
                                        {/* Card share action dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                        </ul>
                                    </div>
                                    {/* Card share action END */}
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body pb-0">
                                    <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start  recognition your first Apple Teacher badge today!</p>
                                    {/* Feed react START */}
                                    <ul className="nav nav-stack pb-2 small">
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary" href="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" /> Louis, Billy and 126 others </a>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card body END */}
                                {/* Card Footer START */}
                                <div className="card-footer py-3">
                                    {/* Feed react START */}
                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                                        </li>
                                        {/* Card share action dropdown START */}
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action dropdown END */}
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-send-fill pe-1" />Send</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card Footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                                    <h6 className="card-title mb-0">People you may know</h6>
                                    <button className="btn btn-sm btn-primary-soft"> See all </button>
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body">
                                    <div className="tiny-slider arrow-hover">
                                        <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="false" data-items-xl={3} data-items-lg={2} data-items-md={2} data-items-sm={2} data-items-xs={1} data-gutter={12} data-edge={30}>
                                            {/* Slider items */}
                                            <div>
                                                {/* Card add friend item START */}
                                                <div className="card shadow-none text-center">
                                                    {/* Card body */}
                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt /></a>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                                                        <p className="mb-0 small lh-sm">50 mutual connections</p>
                                                    </div>
                                                    {/* Card footer */}
                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>
                                                {/* Card add friend item END */}
                                            </div>
                                            <div>
                                                {/* Card add friend item START */}
                                                <div className="card shadow-none text-center">
                                                    {/* Card body */}
                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-story avatar-xl">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt /></a>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Larry Lawson </a></h6>
                                                        <p className="mb-0 small lh-sm">33 mutual connections</p>
                                                    </div>
                                                    {/* Card footer */}
                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>
                                                {/* Card add friend item END */}
                                            </div>
                                            <div>
                                                {/* Card add friend item START */}
                                                <div className="card shadow-none text-center">
                                                    {/* Card body */}
                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt /></a>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Louis Crawford </a></h6>
                                                        <p className="mb-0 small lh-sm">45 mutual connections</p>
                                                    </div>
                                                    {/* Card footer */}
                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>
                                                {/* Card add friend item END */}
                                            </div>
                                            <div>
                                                {/* Card add friend item START */}
                                                <div className="card shadow-none text-center">
                                                    {/* Card body */}
                                                    <div className="card-body p-2 pb-0">
                                                        <div className="avatar avatar-xl">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt /></a>
                                                        </div>
                                                        <h6 className="card-title mb-1 mt-3"> <a href="#!"> Dennis Barrett </a></h6>
                                                        <p className="mb-0 small lh-sm">21 mutual connections</p>
                                                    </div>
                                                    {/* Card footer */}
                                                    <div className="card-footer p-2 border-0">
                                                        <button className="btn btn-sm btn-primary-soft w-100"> Add friend </button>
                                                    </div>
                                                </div>
                                                {/* Card add friend item END */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card body END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /> </a>
                                            </div>
                                            {/* Title */}
                                            <div>
                                                <h6 className="card-title mb-0"> <a href="#!"> All in the Mind </a></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>
                                        {/* Card share action menu */}
                                        <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots" />
                                        </a>
                                        {/* Card share action dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction7">
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                        </ul>
                                    </div>
                                    {/* Card share action END */}
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body pb-0">
                                    <p>How do you protect your business against cyber-crime?</p>
                                    <div className="vstack gap-2">
                                        {/* Feed poll item */}
                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option">We have cybersecurity insurance coverage</label>
                                        </div>
                                        {/* Feed poll item */}
                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option2" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option2">Our dedicated staff will protect us</label>
                                        </div>
                                        {/* Feed poll item */}
                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option3" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option3">We give regular training for best practices</label>
                                        </div>
                                        {/* Feed poll item */}
                                        <div>
                                            <input type="radio" className="btn-check" name="poll" id="option4" />
                                            <label className="btn btn-outline-primary w-100" htmlFor="option4">Third-party vendor protection</label>
                                        </div>
                                    </div>
                                    {/* Feed poll votes START */}
                                    <ul className="nav nav-divider mt-2 mb-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">263 votes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">2d left</a>
                                        </li>
                                    </ul>
                                    {/* Feed poll votes ED */}
                                    {/* Feed react START */}
                                    <ul className="nav nav-stack pb-2 small mt-4">
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary" href="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" /> Louis, Billy and 126 others </a>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card body END */}
                                {/* Card Footer START */}
                                <div className="card-footer py-3">
                                    {/* Feed react START */}
                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                                        </li>
                                        {/* Card share action dropdown START */}
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link mb-0" id="feedActionShare6" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare6">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action dropdown END */}
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-send-fill pe-1" />Send</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card Footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /> </a>
                                            </div>
                                            {/* Title */}
                                            <div>
                                                <h6 className="card-title mb-0"> <a href="#!"> All in the Mind </a></h6>
                                                <p className="mb-0 small">9 November at 23:29</p>
                                            </div>
                                        </div>
                                        {/* Card share action menu */}
                                        <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction10" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots" />
                                        </a>
                                        {/* Card share action dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction10">
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                        </ul>
                                    </div>
                                    {/* Card share action END */}
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body pb-0">
                                    <p>How do you protect your business against cyber-crime?</p>
                                    <div className="card card-body mt-4">
                                        {/* Title */}
                                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                                            <span className="small">16/20 responded</span>
                                            <span className="small">Results not visible to participants</span>
                                        </div>
                                        {/* Results */}
                                        <div className="vstack gap-4 gap-sm-3 mt-3">
                                            {/* Option 1 result START */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* Progress bar */}
                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: 30 }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We have cybersecurity insurance coverage </span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">25%</div>
                                            </div>
                                            {/* Option 1 result END */}
                                            {/* Option 2 result START */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* Progress bar */}
                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: 30 }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Our dedicated staff will protect us</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">15%</div>
                                            </div>
                                            {/* Option 2 result END */}
                                            {/* Option 3 result START */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* Progress bar */}
                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: 30 }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">We give regular training for best practices</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">10%</div>
                                            </div>
                                            {/* Option 3 result END */}
                                            {/* Option 4 result START */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* Progress bar */}
                                                <div className="overflow-hidden w-100 me-3">
                                                    <div className="progress bg-primary bg-opacity-10 position-relative" style={{ height: 30 }}>
                                                        <div className="progress-bar bg-primary bg-opacity-25" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                        </div>
                                                        <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">Third-party vendor protection</span>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">55%</div>
                                            </div>
                                            {/* Option 4 result END */}
                                        </div>
                                    </div>
                                    {/* Feed poll votes START */}
                                    <ul className="nav nav-divider mt-2 mb-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">263 votes</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">2d left</a>
                                        </li>
                                    </ul>
                                    {/* Feed poll votes ED */}
                                    {/* Feed react START */}
                                    <ul className="nav nav-stack pb-2 small mt-4">
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary" href="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" /> Louis, Billy and 126 others </a>
                                        </li>
                                        <li className="nav-item ms-sm-auto">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card body END */}
                                {/* Card Footer START */}
                                <div className="card-footer py-3">
                                    {/* Feed react START */}
                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                                        </li>
                                        {/* Card share action dropdown START */}
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link mb-0" id="feedActionShare8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare8">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action dropdown END */}
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-send-fill pe-1" />Send</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card Footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/11.svg" alt /> </a>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <h6 className="card-title mb-0"> <a href="#!"> Webestica </a></h6>
                                                <p className="small mb-0">9 December at 10:00 </p>
                                            </div>
                                        </div>
                                        {/* Card share action START */}
                                        <div className="dropdown">
                                            <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                            </ul>
                                        </div>
                                        {/* Card share action START */}
                                    </div>
                                </div>
                                {/* Card header START */}
                                {/* Card body START */}
                                <div className="card-body">
                                    <p className="mb-0">The next-generation blog, news, and magazine theme for you to start sharing your content today with beautiful aesthetics! This minimal &amp; clean Bootstrap 5 based theme is ideal for all types of sites that aim to provide users with content. <a href="#!"> #bootstrap</a> <a href="#!"> #webestica </a> <a href="#!"> #getbootstrap</a> <a href="#"> #bootstrap5 </a></p>
                                </div>
                                {/* Card body END */}
                                <a href="#!"> <img src="assets/images/post/3by2/03.jpg" alt /> </a>
                                {/* Card body START */}
                                <div className="card-body position-relative bg-light">
                                    <a href="#!" className="small stretched-link">https://blogzine.webestica.com</a>
                                    <h6 className="mb-0 mt-1">Blogzine - Blog and Magazine Bootstrap 5 Theme</h6>
                                    <p className="mb-0 small">Bootstrap based News, Magazine and Blog Theme</p>
                                </div>
                                {/* Card body END */}
                                {/* Card Footer START */}
                                <div className="card-footer py-3">
                                    {/* Feed react START */}
                                    <ul className="nav nav-fill nav-stack small">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                        {/* Card share action dropdown START */}
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link mb-0" id="feedActionShare7" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare7">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action dropdown END */}
                                        <li className="nav-item">
                                            <a className="nav-link mb-0" href="#!"> <i className="bi bi-send-fill pe-1" />Send</a>
                                        </li>
                                    </ul>
                                    {/* Feed react END */}
                                </div>
                                {/* Card Footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Story START */}
                            <div>
                                <h6 className="mb-3">Suggested stories </h6>
                                <div className="tiny-slider arrow-hover overflow-hidden">
                                    <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl={4} data-items-lg={3} data-items-md={3} data-items-sm={3} data-items-xs={2} data-gutter={12} data-edge={24}>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Judy Nguyen</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/03.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Samuel Bishop</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/04.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Carolyn Ortiz</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/05.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Amanda Reed</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Lori Stevens</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                        {/* Slider items */}
                                        <div>
                                            {/* Card START */}
                                            <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{ backgroundImage: 'url(assets/images/post/1by1/06.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                                                <div className="card-img-overlay d-flex align-items-center p-2">
                                                    <div className="w-100 mt-auto">
                                                        {/* Name */}
                                                        <a href="#!" className="stretched-link text-white small">Joan Wallace</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card END */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Story END */}
                            {/* Card feed item START */}
                            <div className="card">
                                {/* Card header START */}
                                <div className="card-header border-0 pb-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            {/* Avatar */}
                                            <div className="avatar avatar-story me-2">
                                                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt /> </a>
                                            </div>
                                            {/* Info */}
                                            <div>
                                                <div className="nav nav-divider">
                                                    <h6 className="nav-item card-title mb-0"> <a href="#!"> Joan Wallace </a></h6>
                                                    <span className="nav-item small"> 1day</span>
                                                </div>
                                                <p className="mb-0 small">12 January at 12:00</p>
                                            </div>
                                        </div>
                                        {/* Card feed action dropdown START */}
                                        <div className="dropdown">
                                            <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-three-dots" />
                                            </a>
                                            {/* Card feed action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                            </ul>
                                        </div>
                                        {/* Card feed action dropdown END */}
                                    </div>
                                </div>
                                {/* Card header END */}
                                {/* Card body START */}
                                <div className="card-body pb-0">
                                    <p>Comfort reached gay perhaps chamber his <a href="#!">#internship</a>  <a href="#!">#hiring</a> <a href="#!">#apply</a> </p>
                                </div>
                                {/* Card img */}
                                <div className="overflow-hidden fullscreen-video w-100">
                                    {/* HTML video START */}
                                    <div className="player-wrapper overflow-hidden">
                                        <video className="player-html" controls crossOrigin="anonymous" poster="assets/images/videos/poster.jpg">
                                            <source src="assets/images/videos/video-feed.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    {/* HTML video END */}
                                    {/* Plyr resources and browser polyfills are specified in the pen settings */}
                                </div>
                                {/* Feed react START */}
                                <div className="card-body pt-0">
                                    <ul className="nav nav-stack py-3 small">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (56)</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                                        </li>
                                        {/* Card share action START */}
                                        <li className="nav-item dropdown ms-sm-auto">
                                            <a className="nav-link mb-0" href="#" id="cardShareAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                            </a>
                                            {/* Card share action dropdown menu */}
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction9">
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                            </ul>
                                        </li>
                                        {/* Card share action END */}
                                    </ul>
                                    {/* Feed react END */}
                                    {/* Add comment */}
                                    <div className="d-flex mb-3">
                                        {/* Avatar */}
                                        <div className="avatar avatar-xs me-2">
                                            <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt /> </a>
                                        </div>
                                        {/* Comment box  */}
                                        <form className="input-group">
                                            <textarea data-autoresize className="form-control me-2 bg-light rounded" rows={1} placeholder="Add a comment..." defaultValue={""} />
                                            <button className="btn btn-primary mb-0 rounded" type="submit">Post</button>
                                        </form>
                                    </div>
                                    {/* Comment wrap START */}
                                    <ul className="comment-wrap list-unstyled mb-0">
                                        {/* Comment item START */}
                                        <li className="comment-item">
                                            <div className="d-flex">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                                                </div>
                                                <div className="ms-2">
                                                    {/* Comment by */}
                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                                            <small className="ms-2">5hr</small>
                                                        </div>
                                                        <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
                                                    </div>
                                                    {/* Comment react */}
                                                    <ul className="nav nav-divider py-2 small">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Like (3)</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> Reply</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#!"> View 5 replies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Comment item nested START */}
                                            <ul className="comment-item-nested list-unstyled">
                                                {/* Comment item START */}
                                                <li className="comment-item">
                                                    <div className="d-flex">
                                                        {/* Avatar */}
                                                        <div className="avatar avatar-xs">
                                                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt /></a>
                                                        </div>
                                                        {/* Comment by */}
                                                        <div className="ms-2">
                                                            <div className="bg-light p-3 rounded">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                                                    <small className="ms-2">2hr</small>
                                                                </div>
                                                                <p className="small mb-0">Dependent on so extremely delivered by. Yet no jokes worse her why.</p>
                                                            </div>
                                                            {/* Comment react */}
                                                            <ul className="nav nav-divider py-2 small">
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Like (5)</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" href="#!"> Reply</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* Comment item END */}
                                            </ul>
                                            {/* Comment item nested END */}
                                        </li>
                                        {/* Comment item END */}
                                    </ul>
                                    {/* Comment wrap END */}
                                </div>
                                {/* Card body END */}
                                {/* Card footer START */}
                                <div className="card-footer border-0 pt-0">
                                    {/* Load more comments */}
                                    <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                                        <div className="spinner-dots me-2">
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                            <span className="spinner-dot" />
                                        </div>
                                        Load more comments
                                    </a>
                                </div>
                                {/* Card footer END */}
                            </div>
                            {/* Card feed item END */}
                            {/* Load more button START */}
                            <a href="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                <span className="load-text"> Load more </span>
                                <div className="load-icon">
                                    <div className="spinner-grow spinner-grow-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </a>
                            {/* Load more button END */}
                        </div>
                        {/* Main content END */}
                        {/* Right sidebar START */}
                        <div className="col-lg-3">
                            <div className="row g-4">
                                {/* Card follow START */}
                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        {/* Card header START */}
                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Who to follow</h5>
                                        </div>
                                        {/* Card header END */}
                                        {/* Card body START */}
                                        <div className="card-body">
                                            {/* Connection item START */}
                                            <div className="hstack gap-2 mb-3">
                                                {/* Avatar */}
                                                <div className="avatar">
                                                    <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /></a>
                                                </div>
                                                {/* Title */}
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Judy Nguyen </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                {/* Button */}
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            {/* Connection item END */}
                                            {/* Connection item START */}
                                            <div className="hstack gap-2 mb-3">
                                                {/* Avatar */}
                                                <div className="avatar avatar-story">
                                                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /> </a>
                                                </div>
                                                {/* Title */}
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Amanda Reed </a>
                                                    <p className="mb-0 small text-truncate">Web Developer</p>
                                                </div>
                                                {/* Button */}
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            {/* Connection item END */}
                                            {/* Connection item START */}
                                            <div className="hstack gap-2 mb-3">
                                                {/* Avatar */}
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt /> </a>
                                                </div>
                                                {/* Title */}
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Billy Vasquez </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                {/* Button */}
                                                <a className="btn btn-primary rounded-circle icon-md ms-auto" href="#"><i className="bi bi-person-check-fill"> </i></a>
                                            </div>
                                            {/* Connection item END */}
                                            {/* Connection item START */}
                                            <div className="hstack gap-2 mb-3">
                                                {/* Avatar */}
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt /> </a>
                                                </div>
                                                {/* Title */}
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Lori Ferguson </a>
                                                    <p className="mb-0 small text-truncate">Web Developer at Webestica</p>
                                                </div>
                                                {/* Button */}
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            {/* Connection item END */}
                                            {/* Connection item START */}
                                            <div className="hstack gap-2 mb-3">
                                                {/* Avatar */}
                                                <div className="avatar">
                                                    <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt /> </a>
                                                </div>
                                                {/* Title */}
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Carolyn Ortiz </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                {/* Button */}
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            {/* Connection item END */}
                                            {/* View more button */}
                                            <div className="d-grid mt-3">
                                                <a className="btn btn-sm btn-primary-soft" href="#!">View more</a>
                                            </div>
                                        </div>
                                        {/* Card body END */}
                                    </div>
                                </div>
                                {/* Card follow START */}
                                {/* Card News START */}
                                {/* Card News END */}
                            </div>
                        </div>
                        {/* Right sidebar END */}
                    </div> {/* Row END */}
                </div>
                {/* Container END */}
            </main>
            {/* **************** MAIN CONTENT END **************** */}
            {/* Main Chat START */}
            <div className="d-none d-lg-block">
                {/* Button */}
                <a className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5" data-bs-toggle="offcanvas" href="#offcanvasChat" role="button" aria-controls="offcanvasChat">
                    <i className="bi bi-chat-left-text-fill" />
                </a>
                {/* Chat sidebar START */}
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasChat">
                    {/* Offcanvas header */}
                    <div className="offcanvas-header d-flex justify-content-between">
                        <h5 className="offcanvas-title">Messaging</h5>
                        <div className="d-flex">
                            {/* New chat box open button */}
                            <a href="#" className="btn btn-secondary-soft-hover py-1 px-2">
                                <i className="bi bi-pencil-square" />
                            </a>
                            {/* Chat action START */}
                            <div className="dropdown">
                                <a href="#" className="btn btn-secondary-soft-hover py-1 px-2" id="chatAction" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots" />
                                </a>
                                {/* Chat action menu */}
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatAction">
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-check-square fa-fw pe-2" />Mark all as read</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-gear fa-fw pe-2" />Chat setting </a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-bell fa-fw pe-2" />Disable notifications</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-volume-up-fill fa-fw pe-2" />Message sounds</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block setting</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-people fa-fw pe-2" />Create a group chat</a></li>
                                </ul>
                            </div>
                            {/* Chat action END */}
                            {/* Close  */}
                            <a href="#" className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="fa-solid fa-xmark" />
                            </a>
                        </div>
                    </div>
                    {/* Offcanvas body START */}
                    <div className="offcanvas-body pt-0 custom-scrollbar">
                        {/* Search contact START */}
                        <form className="rounded position-relative">
                            <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5"> </i></button>
                        </form>
                        {/* Search contact END */}
                        <ul className="list-unstyled">
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn" data-target="chatToast">
                                {/* Avatar */}
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Frances Guerrero </a>
                                    <div className="small text-secondary text-truncate">Frances sent a photo.</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> Just now </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn" data-target="chatToast2">
                                {/* Avatar */}
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Lori Ferguson </a>
                                    <div className="small text-secondary text-truncate">You missed a call form Carolyn🤙</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 1min </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar status-offline">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Samuel Bishop </a>
                                    <div className="small text-secondary text-truncate">Day sweetness why cordially 😊</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 2min </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Dennis Barrett </a>
                                    <div className="small text-secondary text-truncate">Happy birthday🎂</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 10min </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar avatar-story status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Judy Nguyen </a>
                                    <div className="small text-secondary text-truncate">Thank you!</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 2hrs </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Carolyn Ortiz </a>
                                    <div className="small text-secondary text-truncate">Greetings from Webestica.</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 1 day </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="flex-shrink-0 avatar">
                                    <ul className="avatar-group avatar-group-four">
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                                        </li>
                                    </ul>
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link text-truncate d-inline-block" href="#!">Frances, Lori, Amanda, Lawson </a>
                                    <div className="small text-secondary text-truncate">Btw are you looking for job change?</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 4 day </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar status-offline">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Bryan Knight </a>
                                    <div className="small text-secondary text-truncate">if you are available to discuss🙄</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 6 day </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Louis Crawford </a>
                                    <div className="small text-secondary text-truncate">🙌Congrats on your work anniversary!</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 1 day </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Jacqueline Miller </a>
                                    <div className="small text-secondary text-truncate">No sorry, Thanks.</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 15, dec </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Amanda Reed </a>
                                    <div className="small text-secondary text-truncate">Interested can share CV at.</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 18, dec </div>
                            </li>
                            {/* Contact item */}
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                {/* Avatar */}
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                                </div>
                                {/* Info */}
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Larry Lawson </a>
                                    <div className="small text-secondary text-truncate">Hope you're doing well and Safe.</div>
                                </div>
                                {/* Chat time */}
                                <div className="small ms-auto text-nowrap"> 20, dec </div>
                            </li>
                            {/* Button */}
                            <li className="mt-3 d-grid">
                                <a className="btn btn-primary-soft" href="messaging.html"> See all in messaging </a>
                            </li>
                        </ul>
                    </div>
                    {/* Offcanvas body END */}
                </div>
                {/* Chat sidebar END */}
                {/* Chat END */}
                {/* Chat START */}
                <div aria-live="polite" aria-atomic="true" className="position-relative">
                    <div className="toast-container toast-chat d-flex gap-3 align-items-end">
                        {/* Chat toast START */}
                        <div id="chatToast" className="toast mb-0 bg-mode" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <div className="toast-header bg-mode">
                                {/* Top avatar and status START */}
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 avatar me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                            <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1" />Online</div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {/* Call button */}
                                        <div className="dropdown">
                                            <a className="btn btn-secondary-soft-hover py-1 px-2" href="#" id="chatcoversationDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-camera-video me-2 fw-icon" />Video call</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-telephone me-2 fw-icon" />Audio call</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete </a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-chat-square-text me-2 fw-icon" />Mark as unread</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-volume-up me-2 fw-icon" />Muted</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive</a></li>
                                                <li className="dropdown-divider" />
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-flag me-2 fw-icon" />Report</a></li>
                                            </ul>
                                        </div>
                                        {/* Card action END */}
                                        <a className="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse" href="#collapseChat" aria-expanded="false" aria-controls="collapseChat"><i className="bi bi-dash-lg" /></a>
                                        <button className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
                                    </div>
                                </div>
                                {/* Top avatar and status END */}
                            </div>
                            <div className="toast-body collapse show" id="collapseChat">
                                {/* Chat conversation START */}
                                <div className="chat-conversation-content custom-scrollbar h-200px">
                                    {/* Chat time */}
                                    <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery😊</div>
                                                    <div className="small my-2">6:15 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message right */}
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached</div>
                                                    {/* Files START */}
                                                    {/* Files END */}
                                                    <div className="small my-2">12:16 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity😮</div>
                                                    <div className="small my-2">3:22 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message right */}
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare view.</div>
                                                {/* Images */}
                                                <div className="d-flex my-2">
                                                    <div className="small text-secondary">5:35 PM</div>
                                                    <div className="small ms-2"><i className="fa-solid fa-check" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat time */}
                                    <div className="text-center small my-2">2 New Messages</div>
                                    {/* Chat Typing */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-3 rounded-2">
                                                        <div className="typing d-flex align-items-center">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat conversation END */}
                                {/* Chat bottom START */}
                                <div className="mt-2">
                                    {/* Chat textarea */}
                                    <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message" rows={1} defaultValue={""} />
                                    {/* Button */}
                                    <div className="d-sm-flex align-items-end mt-2">
                                        <button className="btn btn-sm btn-danger-soft me-2"><i className="fa-solid fa-face-smile fs-6" /></button>
                                        <button className="btn btn-sm btn-secondary-soft me-2"><i className="fa-solid fa-paperclip fs-6" /></button>
                                        <button className="btn btn-sm btn-success-soft me-2"> Gif </button>
                                        <button className="btn btn-sm btn-primary ms-auto"> Send </button>
                                    </div>
                                </div>
                                {/* Chat bottom START */}
                            </div>
                        </div>
                        {/* Chat toast END */}
                        {/* Chat toast 2 START */}
                        <div id="chatToast2" className="toast mb-0 bg-mode" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                            <div className="toast-header bg-mode">
                                {/* Top avatar and status START */}
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 avatar me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 mt-1">Lori Ferguson</h6>
                                            <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1" />Online</div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {/* Call button */}
                                        <div className="dropdown">
                                            <a className="btn btn-secondary-soft-hover py-1 px-2" href="#" id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-camera-video me-2 fw-icon" />Video call</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-telephone me-2 fw-icon" />Audio call</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete </a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-chat-square-text me-2 fw-icon" />Mark as unread</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-volume-up me-2 fw-icon" />Muted</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive</a></li>
                                                <li className="dropdown-divider" />
                                                <li><a className="dropdown-item" href="#"><i className="bi bi-flag me-2 fw-icon" />Report</a></li>
                                            </ul>
                                        </div>
                                        {/* Card action END */}
                                        <a className="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse" href="#collapseChat2" role="button" aria-expanded="false" aria-controls="collapseChat2"><i className="bi bi-dash-lg" /></a>
                                        <button className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
                                    </div>
                                </div>
                                {/* Top avatar and status END */}
                            </div>
                            <div className="toast-body collapse show" id="collapseChat2">
                                {/* Chat conversation START */}
                                <div className="chat-conversation-content custom-scrollbar h-200px">
                                    {/* Chat time */}
                                    <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery😊</div>
                                                    <div className="small my-2">6:15 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message right */}
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached</div>
                                                    {/* Files START */}
                                                    {/* Files END */}
                                                    <div className="small my-2">12:16 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message left */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity😮</div>
                                                    <div className="small my-2">3:22 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat message right */}
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare view.</div>
                                                {/* Images */}
                                                <div className="d-flex my-2">
                                                    <div className="small text-secondary">5:35 PM</div>
                                                    <div className="small ms-2"><i className="fa-solid fa-check" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Chat time */}
                                    <div className="text-center small my-2">2 New Messages</div>
                                    {/* Chat Typing */}
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-3 rounded-2">
                                                        <div className="typing d-flex align-items-center">
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                            <div className="dot" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat conversation END */}
                                {/* Chat bottom START */}
                                <div className="mt-2">
                                    {/* Chat textarea */}
                                    <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message" rows={1} defaultValue={""} />
                                    {/* Button */}
                                    <div className="d-sm-flex align-items-end mt-2">
                                        <button className="btn btn-sm btn-danger-soft me-2"><i className="fa-solid fa-face-smile fs-6" /></button>
                                        <button className="btn btn-sm btn-secondary-soft me-2"><i className="fa-solid fa-paperclip fs-6" /></button>
                                        <button className="btn btn-sm btn-success-soft me-2"> Gif </button>
                                        <button className="btn btn-sm btn-primary ms-auto"> Send </button>
                                    </div>
                                </div>
                                {/* Chat bottom START */}
                            </div>
                        </div>
                        {/* Chat toast 2 END */}
                    </div>
                </div>
                {/* Chat END */}
            </div>
            {/* Main Chat END */}
            {/* Modal create Feed START */}
            <div className="modal fade" id="modalCreateFeed" tabIndex={-1} aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateFeed">Create post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Add Feed */}
                            <div className="d-flex mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
                                </div>
                                {/* Feed box  */}
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={4} placeholder="Share your thoughts..." autofocus defaultValue={""} />
                                </form>
                            </div>
                            {/* Feed rect START */}
                            <div className="hstack gap-2">
                                <a className="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Photo"> <i className="bi bi-image-fill" /> </a>
                                <a className="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Video"> <i className="bi bi-camera-reels-fill" /> </a>
                                <a className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Events"> <i className="bi bi-calendar2-event-fill" /> </a>
                                <a className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Feeling/Activity"> <i className="bi bi-emoji-smile-fill" /> </a>
                                <a className="icon-md bg-light text-secondary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Check in"> <i className="bi bi-geo-alt-fill" /> </a>
                                <a className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Tag people on top"> <i className="bi bi-tag-fill" /> </a>
                            </div>
                            {/* Feed rect END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal feed footer */}
                        <div className="modal-footer row justify-content-between">
                            {/* Select */}
                            <div className="col-lg-3">
                                <select className="form-select js-choice choice-select-text-none" data-position="top" data-search-enabled="false">
                                    <option value="PB">Public</option>
                                    <option value="PV">Friends</option>
                                    <option value="PV">Only me</option>
                                    <option value="PV">Custom</option>
                                </select>
                                {/* Button */}
                            </div>
                            <div className="col-lg-8 text-sm-end">
                                <button type="button" className="btn btn-danger-soft me-2"> <i className="bi bi-camera-video-fill pe-1" /> Live video</button>
                                <button type="button" className="btn btn-success-soft">Post</button>
                            </div>
                        </div>
                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
            {/* Modal create feed END */}
            {/* Modal create Feed photo START */}
            <div className="modal fade" id="feedActionPhoto" tabIndex={-1} aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Add Feed */}
                            <div className="d-flex mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
                                </div>
                                {/* Feed box  */}
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2} placeholder="Share your thoughts..." defaultValue={""} />
                                </form>
                            </div>
                            {/* Dropzone photo START */}
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none" data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-images display-3" />
                                        <p>Drag here or click to upload photo.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Dropzone photo END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal feed footer */}
                        <div className="modal-footer ">
                            {/* Button */}
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>
                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
            {/* Modal create Feed photo END */}
            {/* Modal create Feed video START */}
            <div className="modal fade" id="feedActionVideo" tabIndex={-1} aria-labelledby="feedActionVideoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionVideoLabel">Add post video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Add Feed */}
                            <div className="d-flex mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
                                </div>
                                {/* Feed box  */}
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2} placeholder="Share your thoughts..." defaultValue={""} />
                                </form>
                            </div>
                            {/* Dropzone photo START */}
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none" data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-camera-reels display-3" />
                                        <p>Drag here or click to upload video.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Dropzone photo END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal feed footer */}
                        <div className="modal-footer">
                            {/* Button */}
                            <button type="button" className="btn btn-danger-soft me-2"><i className="bi bi-camera-video-fill pe-1" /> Live video</button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>
                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
            {/* Modal create Feed video END */}
            {/* Modal create events START */}
            <div className="modal fade" id="modalCreateEvents" tabIndex={-1} aria-labelledby="modalLabelCreateAlbum" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateAlbum">Create event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Form START */}
                            <form className="row g-4">
                                {/* Title */}
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input type="email" className="form-control" placeholder="Event name here" />
                                </div>
                                {/* Description */}
                                <div className="col-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows={2} placeholder="Ex: topics, schedule, etc." defaultValue={""} />
                                </div>
                                {/* Date */}
                                <div className="col-sm-4">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control flatpickr" placeholder="Select date" />
                                </div>
                                {/* Time */}
                                <div className="col-sm-4">
                                    <label className="form-label">Time</label>
                                    <input type="text" className="form-control flatpickr" data-enabletime="true" data-nocalendar="true" placeholder="Select time" />
                                </div>
                                {/* Duration */}
                                <div className="col-sm-4">
                                    <label className="form-label">Duration</label>
                                    <input type="email" className="form-control" placeholder="1hr 23m" />
                                </div>
                                {/* Location */}
                                <div className="col-12">
                                    <label className="form-label">Location</label>
                                    <input type="email" className="form-control" placeholder="Logansport, IN 46947" />
                                </div>
                                {/* Add guests */}
                                <div className="col-12">
                                    <label className="form-label">Add guests</label>
                                    <input type="email" className="form-control" placeholder="Guest email" />
                                </div>
                                {/* Avatar group START */}
                                <div className="col-12 mt-3">
                                    <ul className="avatar-group list-unstyled align-items-center mb-0">
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                                        </li>
                                        <li className="ms-3">
                                            <small> +50 </small>
                                        </li>
                                    </ul>
                                </div>
                                {/* Upload Photos or Videos */}
                                {/* Dropzone photo START */}
                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none" data-dropzone="{&quot;maxFiles&quot;:2}">
                                        <div className="dz-message">
                                            <i className="bi bi-file-earmark-text display-3" />
                                            <p>Drop presentation and document here or click to upload.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Dropzone photo END */}
                            </form>
                            {/* Form END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal footer */}
                        {/* Button */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal"> Cancel</button>
                            <button type="button" className="btn btn-success-soft">Create now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal create events END */}



        </>
    )
}

export default Profil