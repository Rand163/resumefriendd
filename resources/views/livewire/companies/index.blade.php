<!-- Page Heading -->
<div>
@section("breadcrumb")
    <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
        <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Approved Companies</h1>

        <ul class="breadcrumb fw-bold fs-base mb-1">
            <li class="breadcrumb-item text-muted">
                <a  class="text-muted text-hover-primary">Dashboard</a>
            </li>
            <li class="breadcrumb-item text-muted">
                <a href="{{route('companies.index')}}" class="text-muted text-hover-primary">Approved Companies</a>
            </li>
        </ul>
    </div>
@endsection

<div class="card mb-4 py-3 border-left-primary">
    <div class="card-body">
        <h6 class=" h4 m-0 font-weight-bold text-primary">What is this page for?</h6>

        <div class="card-body">
            This page's purpose is to list down all the <strong>approved companies, available intership there and the
                link to apply for them</strong> that our students can train in.
            We will provide a list for different type of companies and different kind of positions.
        </div>
    </div>
</div>
<!-- Collapse Card-->
<div class="card shadow mb-4">
    <!-- Card Header - Accordion -->
    <a href="#collapseCardExample" class="d-block card-header py-3" data-toggle="collapse"
       role="button" aria-expanded="true" aria-controls="collapseCardExample">
        <div class="card-body py-3">
            <h6 class="m-0 font-weight-bold text-primary">Approved Companies</h6>
        </div>
    </a>
    <!-- Card Content - Collapse -->
    <div class="collapse show" id="collapseCardExample">

        @foreach($companies as $company)
            <div class="card-body">
                {{$company->name}}

                @if( ! is_null($company->link))
                    <a href="{{$company->link}}" target="_blank" class="btn btn-info">
                        Click Here
                    </a>
                @endif
            </div>
        @endforeach

    </div>
</div>
</div>
