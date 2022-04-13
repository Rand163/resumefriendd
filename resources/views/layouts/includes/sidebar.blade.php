<div id="kt_aside" class="aside aside-extended bg-white" data-kt-drawer="true" data-kt-drawer-name="aside"
     data-kt-drawer-activate="{default: true, lg: false}"
     data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start"
     data-kt-drawer-toggle="#kt_aside_toggle">
    <div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
        <div class="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10"
             id="kt_aside_logo">
            <a href="/">
                <img alt="Resume Friend Logo" src="{{asset('logo.ico')}}" class="h-50px"/>
            </a>
        </div>
        <div class="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0"
             id="kt_aside_nav">
            <div class="hover-scroll-y mb-10" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                 data-kt-scroll-height="auto"
                 data-kt-scroll-wrappers="#kt_aside_nav" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                 data-kt-scroll-offset="0px">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right"
                        data-bs-dismiss="click" title="Menu">
                        <a class="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#side-menu">
                            <span class="svg-icon svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="black"/>
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black"/>
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black"/>
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black"/>
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
            <div class="d-flex align-items-center mb-10" id="kt_header_user_menu_toggle">
                <div class="cursor-pointer symbol symbol-40px" data-kt-menu-trigger="click" data-kt-menu-overflow="true"
                     data-kt-menu-placement="top-start">
                    <img src="{{ auth()->user()->userAvatar()}}" alt="{{ Auth::user()->name }}"/>
                </div>
                <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                    data-kt-menu="true">
                    <div class="menu-item px-3">
                        <div class="menu-content d-flex align-items-center px-3">
                            <div class="symbol symbol-50px me-5">
                                <img alt="{{ Auth::user()->name }}" src="{{ auth()->user()->userAvatar()}}" />
                            </div>
                            <div class="d-flex flex-column">
                                <div class="fw-bolder d-flex align-items-center fs-5"> {{ Auth::user()->name }}
                                    <span
                                        class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">{{ Auth::user()->role }}</span>
                                </div>
                                <a href="#"
                                   class="fw-bold text-muted text-hover-primary fs-7">{{ Auth::user()->email }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="separator my-2"></div>
                    <div class="menu-item px-5">
                        <a href="{{route('user.profile',auth()->user())}}" class="menu-link px-5">Profile</a>
                    </div>
                    <div class="menu-item px-5">
                        <a href="{{ route('logout') }}" class="menu-link px-5"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                              style="display: none;">@csrf</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="aside-secondary d-flex flex-row-fluid">
        <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
            <div class="d-flex h-100 flex-column">
                <div class="flex-column-fluid hover-scroll-y" data-kt-scroll="true" data-kt-scroll-activate="true"
                     data-kt-scroll-height="auto"
                     data-kt-scroll-wrappers="#kt_aside_wordspace"
                     data-kt-scroll-dependencies="#kt_aside_secondary_footer" data-kt-scroll-offset="0px">
                    <div class="tab-content">
                        <div class="tab-pane active show" id="side-menu" role="tabpanel">
                            <!--begin::Menu-->
                            <div
                                class="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
                                id="kt_aside_menu" data-kt-menu="true">
                                <div id="kt_aside_menu_wrapper" class="menu-fit">
                                    <div class="menu-item">
                                        <div class="menu-content pb-2">
                                            <span
                                                class="menu-section text-muted text-uppercase fs-8 ls-1">Main</span>
                                        </div>
                                    </div>
                                    @student
                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('welcome')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Welcome</span>
                                        </a>
                                    </div>

                                    <div class="menu-item">
                                        <div class="menu-content pb-2">
                                            <span
                                                class="menu-section text-muted text-uppercase fs-8 ls-1">Approved</span>
                                        </div>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('courses.index')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Courses</span>
                                        </a>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('companies.index')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Companies</span>
                                        </a>
                                    </div>

                                    <div class="menu-item">
                                        <div class="menu-content pb-2">
                                            <span
                                                class="menu-section text-muted text-uppercase fs-8 ls-1"> Upload Forms</span>
                                        </div>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('students.forms')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Forms</span>
                                        </a>
                                    </div>
                                    @endstudent

                                    @supervisor
                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('supervisor.students')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                     <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                                     <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Students</span>
                                        </a>
                                    </div>

                                    <div class="menu-item">
                                        <div class="menu-content pb-2">
                                            <span
                                                class="menu-section text-muted text-uppercase fs-8 ls-1">Forms</span>
                                        </div>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('supervisor.pending')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass" viewBox="0 0 16 16">
  <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Pending</span>
                                        </a>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link" href="{{route('supervisor.history')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">History</span>
                                        </a>
                                    </div>
                                    @endsupervisor

                                    @admin
                                    <div class="menu-item mb-1">
                                        <a class="menu-link"  href="{{route('user.index')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                     <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                                     <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Users</span>
                                        </a>
                                    </div>


                                    <div class="menu-item mb-1">
                                        <a class="menu-link"  href="{{route('companies.add')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Add Company</span>
                                        </a>
                                    </div>

                                    <div class="menu-item mb-1">
                                        <a class="menu-link"  href="{{route('courses.add')}}">
                                            <span class="menu-icon">
                                                <span class="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="menu-title">Add Course</span>
                                        </a>
                                    </div>
                                    @endadmin
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button
        class="btn btn-sm btn-icon bg-body btn-color-gray-600 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex"
        data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
        data-kt-toggle-name="aside-minimize" style="margin-bottom: 1.35rem">
        <span class="svg-icon svg-icon-2 rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black"/>
                <path
                    d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                    fill="black"/>
            </svg>
        </span>
    </button>
</div>
