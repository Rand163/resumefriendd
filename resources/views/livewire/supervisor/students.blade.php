<div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Students </h1>
    </div>

    <div class="row">
        @forelse($students as $student)
        <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <img class=" " src="{{asset('undraw_profile.svg')}}" width="50px">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2 px-5">
                            <div class="h3 font-weight-bold text-primary text-uppercase mb-1 ">
                                {{$student->name}}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{$student->id}}</div>
                        </div>
                        <a href="{{route('user.profile',$student)}}" class="btn btn-light btn-icon-split">
                                        <span class="icon text-gray-600">
                                            <i class="fas fa-arrow-right"></i>
                                        </span>
                            <span class="text">Details</span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
        @empty

        @endforelse
    </div>
</div>
