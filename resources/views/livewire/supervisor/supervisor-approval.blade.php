<div>

    @section("breadcrumb")
        <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
            <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Supervisor Approval</h1>

            <ul class="breadcrumb fw-bold fs-base mb-1">
                <li class="breadcrumb-item text-muted">
                    <a  class="text-muted text-hover-primary">Dashboard</a>
                </li>
                <li class="breadcrumb-item text-muted">
                    <a href="{{route('user.index')}}" class="text-muted text-hover-primary">Supervisor Approval</a>
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
                                    <h5 class="card-title text-uppercase text-muted mb-4">Pending Requests</h5>
                                    <span class="h2 font-weight-bold mb-0">{{$files->count()}}</span>
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
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header border-0 pt-6">
            <div class="card-toolbar">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                </div>
            </div>
        </div>

        <div class="card-body pt-0">
            <table id="kt_table_users"  class="table table-rounded table-striped border gy-7 gs-7">

                <thead>
                <tr class="text-start text-muted fw-bolder fs-7   gs-0">
                    <th class="min-w-125px">Name</th>
                    <th class="min-w-125px">#id</th>
                    <th class="min-w-125px">Company</th>
                    <th class="min-w-125px">Report Type</th>
                    <th class="min-w-100px">Report</th>
                    <th class="min-w-100px">Approve</th>
                    <th class="min-w-100px">Decline</th>
                </tr>
                </thead>

                <tbody class="text-gray-600 fw-bold">
                @forelse($files as $file)
                    <tr>
                        <td>{{$file->user->name}}</td>
                        <td>{{$file->user->id}}</td>
                        <td>{{$file->user->company}}</td>
                        @if($file->type == 1)
                            <td><span class="badge badge-success p-2">Training site approved</span></td>
                        @elseif($file->type == 2)
                            <td><span class="badge badge-info p-2">Course certificate</span> </td>
                        @elseif($file->type == 3)
                            <td><span class="badge badge-warning p-2">Training report</span> </td>
                        @endif

                        <td><a wire:click="download('{{$file->path}}','{{$file->name}}')" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a></td>
                        <td><a wire:click="approve('{{$file->id}}','{{$file->user->id}}','{{$file->type}}','{{$file->company}}')" class="btn btn-success btn-circle">
                                <i class="fas fa-check"></i>
                            </a></td>
                        <td><a wire:click="delete('{{$file->id}}')" class="btn btn-danger btn-circle">
                                <i class="fas fa-trash"></i>
                            </a></td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7" class="text-center fs-2">There are no reports &nbsp; <i
                                class="fad fa-meh fs-1"></i></td>
                    </tr>
                @endforelse

                </tbody>

            </table>
            <div class="dataTables_paginate paging_simple_numbers">
            </div>
        </div>
    </div>

</div>
