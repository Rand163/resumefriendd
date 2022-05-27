<div>
@section("breadcrumb")
    <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
        <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Users</h1>

        <ul class="breadcrumb fw-bold fs-base mb-1">
            <li class="breadcrumb-item text-muted">
                <a  class="text-muted text-hover-primary">Dashboard</a>
            </li>
            <li class="breadcrumb-item text-muted">
                <a href="{{route('user.index')}}" class="text-muted text-hover-primary">Users</a>
            </li>
        </ul>
    </div>
@endsection

<div class="main-content">
    <div class="header-body">
        <div class="row">
            <div class="col-xxl-4 col-xl-4 col-md-6 mb-6">
                <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-4">All Students</h5>
                                <span class="h2 font-weight-bold mb-0">{{$students}}</span>
                            </div>
                            <div class="col-auto">
                                <div
                                    class="bg-warning text-white rounded-circle shadow d-flex justify-content-center align-items-center h-50px w-50px">
                                    <i class="fad fa-users" style="font-size: 1.6rem;color: white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-md-6 mb-6">
                <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h5 class="card-title text-uppercase text-muted mb-4">All Supervisors</h5>
                                <span class="h2 font-weight-bold mb-0">{{$supervisors}}</span>
                            </div>
                            <div class="col-auto">
                                <div
                                    class=" bg-info text-white rounded-circle shadow d-flex justify-content-center align-items-center h-50px w-50px">
                                    <i class="bi bi-person-workspace" style="font-size: 1.8rem;color: white"></i>
{{--                                    <i class="bi bi-person-workspace"></i>--}}
                                    {{--                                    <i class="fa-solid fa-chalkboard-user"></i>--}}
{{--                                    <i class="fa-duotone fa-chalkboard-user"></i>--}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-header border-0 pt-6">
        <div class="card-toolbar">
            <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">

                <a href="{{route('user.add')}}" class="btn btn-primary">
                                 <span class="svg-icon svg-icon-2">
                                     <i class="fas fa-plus fs-3"></i>
                                 </span>
                    Add User
                </a>
            </div>
        </div>
    </div>

    <div class="card-body pt-0">
        <table id="kt_table_users"  class="table table-rounded table-striped border gy-7 gs-7">

            <thead>
            <tr class="text-start text-muted fw-bolder fs-7   gs-0">
                <th class="min-w-125px">#id</th>
                <th class="min-w-125px">Name</th>
                <th class="min-w-125px">Email</th>
                <th class="min-w-125px">Role</th>
                <th class="min-w-100px">Company</th>
            </tr>
            </thead>

            <tbody class="text-gray-600 fw-bold">
            @forelse($users as $user)
                <tr>
                    <td>{{$user->id}}</td>
                    <td><a href="{{route('user.profile',$user)}}">{{$user->name}}</a></td>
                    <td>{{$user->email}}</td>
                    <td>{{$user->role}}</td>
                    <td>{{$user->company}}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" class="text-center fs-2">There are no users &nbsp; <i
                            class="fad fa-meh fs-1"></i></td>
                </tr>
            @endforelse

            </tbody>

        </table>
        <div class="dataTables_paginate paging_simple_numbers">
            {{$users->links()}}
        </div>
    </div>
</div>
</div>
