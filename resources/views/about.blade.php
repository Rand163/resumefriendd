<!DOCTYPE html>

<html lang="en">
<head>
    <base href="">
    <title>Resume Friend | About us</title>
    <meta charset="utf-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon shortcut" href="{{ asset('logo.ico') }}">
    {{--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />--}}
    <link href="{{ asset('assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('assets/css/style.bundle.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>

    <script src="https://cdn.asas4edu.com/fontAwsome.js"></script>
    <script src="//unpkg.com/alpinejs" defer></script>
    @livewireStyles
    @stack('styles')
</head>

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed">
<div class="content d-flex flex-column flex-column-fluid mt-5" id="kt_content">
    <div class="container-xxl" id="kt_content_container">
        <div class="card">
            <div class="card-body p-lg-17">
                <div class="mb-18">
                    <div class="mb-10">
                        <div class="text-center mb-15">
                            <h3 class="fs-2hx text-dark mb-5">About Us</h3>
                            <div class="fs-5 text-muted fw-bold">Within the last few years, we have helped over 3,000 student start their journy of their dream career path
                                <br />successfully by finding the right internship. </div>
                        </div>

                            <img class="w-100 card-rounded" src="assets/img/searching.jpg" alt="" />

                    </div>



                    <div class="fs-5 fw-bold text-gray-600">

                        <p class="mb-8">After the student finishes 90 credited hours of their study plan, they are required to engage in practical training within an IT institution,
                            company or organization for not less than 6 weeks to attain the practical experience they need upon graduation,
                            or have a specialized certificate in one of the technological information subjects that are considered and published by a certified organization.
                            The assessment of the training requirement fulfilment is approved by the training committee in the department.</p>

                        <p class="mb-8">And this is exactly why we came up with this website
                            ; to help our dear students by facilitating the whole process from the very beginning of communicating with their supervisors and choosing the right internship
                            to the very end of submitting the last report required.</p>


                    </div>
                </div>

                <div class="card bg-light mb-18">
                    <div class="card-body py-15">
                        <div class="d-flex flex-center">
                            <div class="d-flex justify-content-between mb-10 mx-auto w-xl-900px">
                                <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                    <div class="text-center">
                                        <span class="svg-icon svg-icon-3tx svg-icon-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
															</span>

                                        <div class="mt-1">
                                            <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                <div class="min-w-70px" data-kt-countup="true" data-kt-countup-value="3"></div>K+</div>
                                            <span class="text-gray-600 fw-bold fs-5 lh-0">Students</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                    <div class="text-center">

                                        <span class="svg-icon svg-icon-3tx svg-icon-success">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                                  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                                </svg>
															</span>

                                        <div class="mt-1">
                                            <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                <div class="min-w-50px" data-kt-countup="true" data-kt-countup-value="5"></div>K+</div>
                                            <span class="text-gray-600 fw-bold fs-5 lh-0"> Reports</span>

                                        </div>
                                    </div>
                                </div>
                                <div class="octagon d-flex flex-center h-200px w-200px bg-body mx-2">
                                    <div class="text-center">
                                        <span class="svg-icon svg-icon-3tx svg-icon-info">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                                </svg>
															</span>

                                        <div class="mt-1">
                                            <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center">
                                                <div class="min-w-50px" data-kt-countup="true" data-kt-countup-value="50">0</div>+</div>
                                            <span class="text-gray-600 fw-bold fs-5 lh-0">Companies</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fs-2 fw-bold text-muted text-center mb-3">
                            <span class="fs-1 lh-1 text-gray-700">“</span>Arriving at one goal
                            <br />
                            <span class="text-gray-700 me-1">is the starting point</span> to another.
                            <span class="fs-1 lh-1 text-gray-700">“</span></div>
                        <div class="fs-2 fw-bold text-muted text-center">
                            <a href="../dist/account/security.html" class="link-primary fs-4 fw-bolder">John Dewey</a>
                            <span class="fs-4 fw-bolder text-gray-600">,leader of the progressive movement in education.</span>
                        </div>
                    </div>
                </div>


                <div class="mb-18">
                    <div class="text-center mb-12">
                        <h3 class="fs-2hx text-dark mb-5">Our Great Team</h3>
                        <div class="fs-5 text-muted fw-bold">Alone we can do so little, together we can do so much.</div>
                    </div>
                    <div class="tns tns-default mb-10">
                        <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="18000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev" data-tns-next-button="#kt_team_slider_next" data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}">
                            <div class="text-center">
                                <div class="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style="background-image:url('assets/img/dalia.jpg')"></div>
                                <div class="mb-0">
                                    <a href="../dist/account/overview.html" class="text-dark fw-bolder text-hover-primary fs-3">Dalia Alqadi</a>
                                    <div class="text-muted fs-6 fw-bold mt-1">Developer</div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style="background-image:url('assets/img/haneen.jpg')"></div>
                                <div class="mb-0">
                                    <a href="../dist/account/overview.html" class="text-dark fw-bolder text-hover-primary fs-3">Haneen Abusharar</a>
                                    <div class="text-muted fs-6 fw-bold mt-1">Developer</div>
                                </div>
                            </div>

                            <div class="text-center">
                                <div class="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style="background-image:url('assets/img/rand.jpg')"></div>

                                <div class="mb-0">
                                    <a href="../dist/account/overview.html" class="text-dark fw-bolder text-hover-primary fs-3">Rand Altal</a>
                                    <div class="text-muted fs-6 fw-bold mt-1">Developer</div>
                                </div>
                            </div>

                            <div class="text-center">
                                <div class="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center" style="background-image:url('assets/img/sara.jpg')"></div>
                                <div class="mb-0">
                                    <a href="../dist/account/overview.html" class="text-dark fw-bolder text-hover-primary fs-3">Sara Shalout</a>
                                    <div class="text-muted fs-6 fw-bold mt-1">Developer</div>
                                </div>
                            </div>

                        </div>

                        <button class="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev">
                            <span class="svg-icon svg-icon-3x">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="black" />
													</svg>
												</span>
                        </button>
                        <button class="btn btn-icon btn-active-color-primary" id="kt_team_slider_next">
                            <span class="svg-icon svg-icon-3x">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="black" />
													</svg>
												</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!--begin::Footer-->
<div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <div class="container-xxl d-flex flex-column flex-md-row flex-stack">
        <div class="text-dark order-2 order-md-1">	</div>
        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">

            <li class="menu-item">
                <a href="{{route('login')}}" target="_blank" class="menu-link px-2">log in</a>
            </li>
        </ul>
    </div>
</div>
</div>
</div>
</div>


<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
    <span class="svg-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
					<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
				</svg>
			</span>
</div>



<script>var hostUrl = "assets/";</script>
<!--begin::Javascript-->
<script src="{{ asset('assets/plugins/global/plugins.bundle.js') }}"></script>
<script src="{{ asset('js/plugins.bundle.js') }}"></script>
<script src="{{ asset('js/scripts.bundle.js') }}"></script>
<script src="{{ asset('js/custom/widgets.js') }}"></script>


</body>
</html>
