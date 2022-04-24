<div>
@section("breadcrumb")
    <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
        <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">History</h1>

        <ul class="breadcrumb fw-bold fs-base mb-1">
            <li class="breadcrumb-item text-muted">
                <a  class="text-muted text-hover-primary">Dashboard</a>
            </li>
            <li class="breadcrumb-item text-muted">
                <a href="{{route('supervisor.history')}}" class="text-muted text-hover-primary">History</a>
            </li>
        </ul>
    </div>
@endsection

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
                <th class="min-w-125px">Status</th>
            </tr>
            </thead>

            <tbody class="text-gray-600 fw-bold">
            @forelse($users as $user)
                <tr>
                    <td>{{$user->user->name}}</td>
                    <td>{{$user->user->id}}</td>
                    <td>{{$user->company}}</td>
                    @if($user->status =="2")
                        <td><span class="badge badge-success p-2">Approved</span></td>
                    @elseif($user->status =="1")
                        <td>
                            <span class="badge badge-danger p-2">Declined</span></td>
                    @elseif($user->status =="0")
                        <td>
                            <span class="badge badge-info p-2">Pending</span></td>
                    @endif
                </tr>
            @empty
                <tr>
                    <td colspan="5" class="text-center fs-2">There are no histories &nbsp; <i
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
