<div>
<div>
    <div>
        @section("breadcrumb")
            <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
                <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Welcome</h1>

                <ul class="breadcrumb fw-bold fs-base mb-1">
                    <li class="breadcrumb-item text-muted">
                        <a  class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="{{route('welcome')}}" class="text-muted text-hover-primary">welcome</a>
                    </li>
                </ul>
            </div>
    @endsection
    <!-- Page Heading -->
    <h1 class="h2 mb-4 font-weight-bolder text-primary"> &nbsp Welcome to the Studnets Training System</h1>




    <div class="card mb-4 py-3 border-left-primary">
        <div class="card-body">
            <h6 class=" h4 m-0 font-weight-bold text-primary">What Is This System Used For</h6>
            <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width:50%;"
                     src="{{asset('undraw_personal_info.svg')}}" alt="...">
            </div>
            <div class="card-body">
                The Students Training System is used for manging the whole procedure of students training after completing their 90 credited hours!
                The main purpose of this system is to help the studnet find approved companies,and courses.Also, facilitate the communication between the student and supervisor where you can easily submit your reports, and monitor your progres.
            </div>
        </div>
    </div>

    <div class="card mb-4 py-3 border-left-primary">
        <div class="card-body">
            <h6 class="h4 m-0 font-weight-bold text-primary">What Is Expected From You </h6>
            <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width:40%;"
                     src="{{asset('undraw_file_manager.svg')}}" alt="picture">
            </div>
            <div class="card-body">
                <h6 class="h4 m-0 font-weight-bold text-primary mb-4">Firstly, you should download the following attachments:</h6>



                <a href="https://cdn.asas4edu.com/uploads/files/Training_Site.pdf" download="Training_Site" class="btn btn-primary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-paperclip"></i>
                                </span>
                    <span class="text">Training Site Approval Form </span>
                </a>



                <a href="https://cdn.asas4edu.com/uploads/files/Training_Report.pdf" download="Training_Report" class="btn btn-primary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-paperclip"></i>
                                </span>
                    <span class="text">Training Report </span>
                </a>
                <hr class="sidebar-divider">


                <h6 class="h6 m-0 font-weight-bold text-primary"> Training Site Approval Form:</h6>Is used to get the final approval of the company you would like to train at from your supervisor.
                <h6 class="h6 m-0 font-weight-bold text-primary"> Training Report: </h6>Is used so the company you train at can fill and let the supervisor monitor what you have achived. This report should be filled periodically and uploaded using this site.
                <h6 class="h4 m-0 font-weight-bold text-primary">Secondly,</h6> You will have you upload the training report periodically to your supervisor using the "Upload Forms" window.

                If you are taking courses instead you will have to upload your course certificate.
            </div>




        </div>

    </div>

    </div>
</div>
</div>
