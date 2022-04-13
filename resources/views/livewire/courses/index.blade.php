<!-- Page Heading -->
 @section("breadcrumb")
    <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
        <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Approved Courses</h1>

        <ul class="breadcrumb fw-bold fs-base mb-1">
            <li class="breadcrumb-item text-muted">
                <a  class="text-muted text-hover-primary">Dashboard</a>
            </li>
            <li class="breadcrumb-item text-muted">
                <a href="{{route('courses.index')}}" class="text-muted text-hover-primary">Approved Courses</a>
            </li>
        </ul>
    </div>
@endsection

<div class="card mb-4 py-3 border-left-primary">
    <div class="card-body">
        <h6 class=" h4 m-0 font-weight-bold text-primary">What is this page for?</h6>

        <div class="card-body">
            This page's purpose is to list down all the <strong>approved courses and their link to check them</strong> that our students can train in.
            We will provide a list for different type of courses.
        </div>
    </div>
</div>
<!-- Collapse Card-->
<div class="card shadow mb-4">
    <!-- Card Header - Accordion -->
    <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
       role="button" aria-expanded="true" aria-controls="collapseCardExample">
        <div class="card-body py-3">
            <h6 class="m-0 font-weight-bold text-primary">Approved Courses</h6>
        </div>
    </a>
    <!-- Card Content - Collapse -->
    <div class="collapse show" id="collapseCardExample">

        @foreach($courses as $course)
        <div class="card-body">
            {{$course->name}}
            <a href="{{$course->link}}" target="_blank" class="btn btn-info">
                Click here to go to the course
            </a>
        </div>
        @endforeach

    </div>
    <!-- End of Main Content -->
</div>
<!-- End of Content Wrapper -->
