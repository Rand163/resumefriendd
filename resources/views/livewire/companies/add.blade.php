@section("breadcrumb")
    <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
        <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Company</h1>

        <ul class="breadcrumb fw-bold fs-base mb-1">
            <li class="breadcrumb-item text-muted">
                <a  class="text-muted text-hover-primary">Dashboard</a>
            </li>
            <li class="breadcrumb-item text-muted">
                <a href="{{route('companies.add')}}" class="text-muted text-hover-primary">Add Company</a>
            </li>
        </ul>
    </div>
@endsection

<div class="card mb-5 mb-xl-10">
    <!--Card header-->
    <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
         data-bs-target="#add_user" aria-expanded="true" aria-controls="add_country">
        <div class="card-title m-0">
            <h3 class="fw-bolder m-0">Add Company</h3>
        </div>
    </div>
    <!--Content-->
    <div id="add_user" class="collapse show">
        <form wire:submit.prevent="add">
            <!--Card body-->
            <div class="card-body border-top p-9">
                <div class="row mb-6">
                    <label for="name" class="col-lg-2 col-form-label required fw-bold fs-6">Full Name</label>

                    <div class="col-lg-10 fv-row">
                        <input type="text" wire:model.defer="name"
                               class="form-control form-control-lg form-control-solid @error('name') border-danger @enderror"
                               placeholder="Name" autofocus required/>
                        @error('name') <small class="text-danger p-lg-4">{{ $message }}</small> @enderror
                    </div>
                </div>
                <div class="row mb-6" >
                    <label for="Link" class="col-lg-2 col-form-label required fw-bold fs-6">Email</label>

                    <div class="col-lg-10 fv-row">
                        <input type="text"  wire:model.defer="link" id="Link"
                               class="form-control form-control-lg form-control-solid @error('link') border-danger @enderror"
                               placeholder="Link" />
                        @error('link') <small class="text-danger p-lg-4">{{ $message }}</small> @enderror
                    </div>
                </div>
            </div>

            <div class="card-footer d-flex justify-content-end py-6 px-9">
                <button type="submit" class="btn btn-primary">Save
                    <span wire:loading wire:target="add"><i
                            class="loading-icon far fa-spinner-third fa-spin"></i></span>
                </button>
            </div>
        </form>
    </div>
</div>
