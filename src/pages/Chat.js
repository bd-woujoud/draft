import React from 'react'
import TopBar from '../Layouts/TopBar'

function Chat() {
    return (

        <div>

            <TopBar />

            <main>
                {/* Container START */}
                <div className="container">
                    <div className="row gx-0">
                        {/* Sidebar START */}
                        <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
                            {/* Divider */}
                            <div className="d-flex align-items-center mb-4 d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h" /></span>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
                                </button>
                            </div>
                            {/* Advanced filter responsive toggler END */}
                            <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <h1 className="h5 mb-0">Active chats <span className="badge bg-success bg-opacity-10 text-success">6</span></h1>
                                    {/* Chat new create message item START */}
                                    <div className="dropend position-relative">
                                        <div className="nav">
                                            <a className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn" data-target="chatToast" href="#"> <i className="bi bi-pencil-square" /> </a>
                                        </div>
                                    </div>
                                    {/* Chat new create message item END */}
                                </div>
                            </div>
                            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
                                    {/* Offcanvas header */}
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" />
                                    </div>
                                    {/* Offcanvas body */}
                                    <div className="offcanvas-body p-0">
                                        <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
                                            {/* Search chat START */}
                                            <form className="position-relative">
                                                <input className="form-control py-2" type="search" placeholder="Search for chats" aria-label="Search" />
                                                <button className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                                                    <i className="bi bi-search fs-5" />
                                                </button>
                                            </form>
                                            {/* Search chat END */}
                                            {/* Chat list tab START */}
                                            <div className="mt-4 h-100">
                                                <div className="chat-tab-list custom-scrollbar">
                                                    <ul className="nav flex-column nav-pills nav-pills-soft">
                                                        <li data-bs-dismiss="offcanvas">
                                                            {/* Chat user tab item */}
                                                            <a href="#chat-1" className="nav-link active text-start" id="chat-1-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar avatar-story me-2 status-online">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                                                        <div className="small text-secondary">Frances sent a photo.</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* Chat user tab item */}
                                                        <li data-bs-dismiss="offcanvas">
                                                            <a href="#chat-2" className="nav-link text-start" id="chat-2-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2 status-offline">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                                                                        <div className="small text-secondary">You missed a call form🤙</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* Chat user tab item */}
                                                        <li data-bs-dismiss="offcanvas">
                                                            <a href="#chat-3" className="nav-link text-start" id="chat-3-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar avatar-story me-2">
                                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                                                                        <div className="small text-secondary">Day sweetness 😊</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* Chat user tab item */}
                                                        <li data-bs-dismiss="offcanvas">
                                                            <a href="#chat-4" className="nav-link text-start" id="chat-4-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
                                                                        <ul className="avatar-group avatar-group-two">
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                                                                        <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* Chat user tab item */}
                                                        <li data-bs-dismiss="offcanvas">
                                                            <a href="#chat-5" className="nav-link text-start" id="chat-5-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
                                                                        <ul className="avatar-group avatar-group-three">
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                                                            </li>
                                                                            <li className="avatar avatar-xs">
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block">
                                                                        <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                                                                        <div className="small text-secondary">Billy: Thank you!</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        {/* Chat user tab item */}
                                                        <li data-bs-dismiss="offcanvas">
                                                            <a href="#chat-6" className="nav-link text-start" id="chat-6-tab" data-bs-toggle="pill" role="tab">
                                                                <div className="d-flex">
                                                                    <div className="flex-shrink-0 avatar me-2">
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
                                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="avatar" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="flex-grow-1 d-block overflow-hidden">
                                                                        <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                                                                        <div className="small text-secondary">You: Okay thanks, everyone.</div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* Chat list tab END */}
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* Sidebar START */}
                        {/* Chat conversation START */}
                        <div className="col-lg-8 col-xxl-9">
                            <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                                <div className="card-body h-100">
                                    <div className="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Judy Nguyen</h6>
                                                        <div className="small text-secondary"><i className="fa-solid fa-circle text-success me-1" />Online</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content custom-scrollbar">
                                                {/* Chat time */}
                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😊</div>
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
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward subject my cottage Mr be.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated files</div>
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
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity yet attempted happiness Gay prosperous impression😮</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
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
                                        </div>
                                        {/* Conversation item END */}
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane h-100" id="chat-2" role="tabpanel" aria-labelledby="chat-2-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                                                        <div className="small text-secondary"><i className="fa-solid fa-circle text-danger me-1" />Last active 2 days</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">
                                                {/* Chat time */}
                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green Seasons.</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Creeping earth under was You're without which image.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't also. </div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Moving living second beast Over fish place beast.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">5:35 PM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat time */}
                                                <div className="text-center small my-2">2 New Messages</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth day.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                                    Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Chat conversation END */}
                                        </div>
                                        {/* Conversation item END */}
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane h-100" id="chat-3" role="tabpanel" aria-labelledby="chat-3-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                                                    </div>
                                                    <div className="d-block flex-grow-1">
                                                        <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                                                        <div className="small text-secondary">Last active a month</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown3" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown3">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">
                                                {/* Chat time */}
                                                <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Hello</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Made and For saw Creepeth place shall Moving.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
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
                                        </div>
                                        {/* Conversation item END */}
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane h-100" id="chat-4" role="tabpanel" aria-labelledby="chat-4-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <ul className="avatar-group avatar-group-two">
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block">
                                                        <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                                                        <div className="small text-secondary">Ortiz: I'm adding jhon</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown4" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown4">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Firmament day life also let subdue.</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Yes</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Hold do at tore in park feet near my case.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">6:20 AM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check-double text-info" /></div>
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">78958642-589</div>
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Void Fowl greater upon moveth bring gathering.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message right */}
                                                <div className="d-flex justify-content-end text-end mb-1">
                                                    <div className="w-100">
                                                        <div className="d-flex flex-column align-items-end">
                                                            <div className="bg-primary text-white p-2 px-3 rounded-2">Kind had stars cattle Good fill divide Multiply.</div>
                                                            <div className="d-flex my-2">
                                                                <div className="small text-secondary">5:35 PM</div>
                                                                <div className="small ms-2"><i className="fa-solid fa-check" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat time */}
                                                <div className="text-center small my-2">2 New Messages</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">She'd Darkness beast don't deep One above.</div>
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Signs creepeth replenish which fourth may Seasons.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Chat conversation END */}
                                        </div>
                                        {/* Conversation item END */}
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane h-100" id="chat-5" role="tabpanel" aria-labelledby="chat-5-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
                                                        <ul className="avatar-group avatar-group-three">
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                                                            </li>
                                                            <li className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block">
                                                        <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                                                        <div className="small text-secondary">Billy: Thank you!</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown5" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown5">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content overflow-auto custom-scrollbar">
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green Seasons.</div>
                                                                <div className="small my-2">6:15 AM</div>
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                                                                <div className="small my-2">12:16 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't also. </div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat time */}
                                                <div className="text-center small my-2">2 New Messages</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth day.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">
                                                                    Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                                                                <div className="small my-2">9:30 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Chat conversation END */}
                                        </div>
                                        {/* Conversation item END */}
                                        {/* Conversation item START */}
                                        <div className="fade tab-pane h-100" id="chat-6" role="tabpanel" aria-labelledby="chat-6-tab">
                                            {/* Top avatar and status START */}
                                            <div className="d-sm-flex justify-content-between align-items-center">
                                                <div className="d-flex mb-2 mb-sm-0">
                                                    <div className="flex-shrink-0 avatar me-2">
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
                                                                <img className="avatar-img rounded-circle" src="assets/images/avatar/placeholder.jpg" alt="avatar" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex-grow-1 d-block overflow-hidden">
                                                        <h6 className="mb-0 mt-1 text-truncate w-75">Webestica crew </h6>
                                                        <div className="small text-secondary">You: Okay thanks, everyone.</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {/* Call button */}
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Audio call"><i className="bi bi-telephone-fill" /></a>
                                                    <a href="#!" className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Video call"><i className="bi bi-camera-video-fill" /></a>
                                                    {/* Card action START */}
                                                    <div className="dropdown">
                                                        <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown6" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>
                                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown6">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-mic-mute me-2 fw-icon" />Mute conversation</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-2 fw-icon" />Delete chat</a></li>
                                                            <li className="dropdown-divider" />
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-archive me-2 fw-icon" />Archive chat</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* Card action END */}
                                                </div>
                                            </div>
                                            {/* Top avatar and status END */}
                                            <hr />
                                            {/* Chat conversation START */}
                                            <div className="chat-conversation-content custom-scrollbar">
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
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😍</div>
                                                                <div className="small my-2">6:15 AM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated files</div>
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
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent 🥰 curiosity yet attempted happiness Gay prosperous impression.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat time */}
                                                <div className="text-center small my-2">2 New Messages</div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Traveling alteration impression six all uncommonly Chamber hearing inhabit joy highest privat.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="w-100">
                                                            <div className="d-flex flex-column align-items-start">
                                                                <div className="bg-light text-secondary p-2 px-3 rounded-2">Attempted happiness Gay prosperous impression.</div>
                                                                <div className="small my-2">3:22 PM</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Chat message left */}
                                                <div className="d-flex mb-1">
                                                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt />
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
                                        </div>
                                        {/* Conversation item END */}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-sm-flex align-items-end">
                                        <textarea className="form-control mb-sm-0 mb-3" data-autoresize placeholder="Type a message" rows={1} defaultValue={""} />
                                        <button className="btn btn-sm btn-danger-soft ms-sm-2"><i className="fa-solid fa-face-smile fs-6" /></button>
                                        <button className="btn btn-sm btn-secondary-soft ms-2"><i className="fa-solid fa-paperclip fs-6" /></button>
                                        <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Chat conversation END */}
                    </div> {/* Row END */}
                    {/* =======================
    Chat END */}
                </div>
                {/* Container END */}
            </main>
            {/* **************** MAIN CONTENT END **************** */}
            {/* Chat START */}
            <div className="position-fixed bottom-0 end-0 p-3">
                {/* Chat toast START */}
                <div id="chatToast" className="toast bg-mode" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                    <div className="toast-header bg-mode d-flex justify-content-between">
                        {/* Title */}
                        <h6 className="mb-0">New message</h6>
                        <button className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
                    </div>
                    {/* Top avatar and status END */}
                    <div className="toast-body collapse show" id="collapseChat">
                        {/* Chat conversation START */}
                        {/* Form */}
                        <form>
                            <div className="input-group mb-3">
                                <span className="input-group-text border-0">To</span>
                                <input className="form-control" type="text" placeholder="Type a name or multiple names" />
                            </div>
                        </form>
                        {/* Chat conversation END */}
                        {/* Extra space */}
                        <div className="h-200px" />
                        {/* Button  */}
                        <div className="d-sm-flex align-items-end">
                            <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message" rows={1} spellCheck="false" defaultValue={""} />
                            <button className="btn btn-sm btn-danger-soft ms-sm-2"><i className="fa-solid fa-face-smile fs-6" /></button>
                            <button className="btn btn-sm btn-secondary-soft ms-2"><i className="fa-solid fa-paperclip fs-6" /></button>
                            <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6" /></button>
                        </div>
                    </div>
                </div>
                {/* Chat toast END */}
            </div>
            {/* Chat END */}
        </div>



    )
}

export default Chat