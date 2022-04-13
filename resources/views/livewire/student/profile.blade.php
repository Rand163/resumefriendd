<div>

    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Profile</h1>
    <!-- ============================================================================ -->


    <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img class="rounded-circle mt-5" width="150px" <img class=" " src="{{asset('undraw_profile.svg')}}">
                    <span class="h2 mt-2">{{$user->name}}</span>

                </div>
            </div>

            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Full Name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {{$user->name}}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {{$user->email}}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Collage</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {{$user->collage}}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Supervisor</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {{$supervisor}}
                            </div>
                        </div>
                        <hr>

                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Company</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                {{$user->company}}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Progress Bar</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="card mb-4">

                                    <div class="progress progress-sm mb-2">
                                        <div class="progress-bar" role="progressbar" style="width:{{$user->progress}}%"
                                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</div>
