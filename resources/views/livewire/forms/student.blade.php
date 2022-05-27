<div>
<div>
      @section("breadcrumb")
        <div class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 mb-5 mb-lg-0 cursor-default">
            <h1 class="text-dark fw-bolder mt-1 mb-1 fs-2">Upload Forms</h1>

            <ul class="breadcrumb fw-bold fs-base mb-1">
                <li class="breadcrumb-item text-muted">
                    <a  class="text-muted text-hover-primary">Dashboard</a>
                </li>
                <li class="breadcrumb-item text-muted">
                    <a href="{{route('students.forms')}}" class="text-muted text-hover-primary">Upload Forms</a>
                </li>
            </ul>
        </div>
    @endsection
    <div class="card-body">
             <form wire:submit.prevent="trainingApproved">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead> <p class="h3 mt-4 mb-5">- Upload training site approval form</p> </thead>
                <tbody>

                <tr>
                    <th>
                        <input wire:model.defer="company" type="text"
                               class="form-control w-500px @error('company') is-invalid @enderror" id="name"
                               placeholder="Company Name" maxlength="64" required>
                        @error('company') <span
                            class="error small form-text invalid-feedback">{{ $message }}</span> @enderror
                    </th>
                </tr>

                <tr>
                    <th class="d-flex">
                      <div>
                          <label for="trainingApproved" class="btn btn-primary btn-icon-split">
                              <span class="text ">Upload File</span>
                          </label>
                          <input type="file" wire:model.defer="training_file" id="trainingApproved" hidden>
                          @error("training_file")
                          <small class="text-danger">{{$message}}</small>
                          @enderror
                      </div>
                        <div class="ml-3">
                            <button type="submit" class="btn btn-success btn-icon-split ms-3">
                                <span class="text">Send To Supervisor</span>
                            </button>
                        </div>
                    </th>

                </tr>
                </tbody>
            </table>
             </form>


        <form wire:submit.prevent="trainingReport">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead><p class="h3 mt-15 mb-7">- Upload training report</p></thead>
                <tbody>

                <tr>
                    <th class="d-flex">
                        <div>
                            <label for="trainingReport" class="btn btn-primary btn-icon-split">
                                <span class="text">Upload File</span>
                            </label>
                            <input type="file" wire:model.defer="report_file" id="trainingReport" hidden>
                            @error("report_file")
                            <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                        <div class="ml-3">
                            <button type="submit" class="btn btn-success btn-icon-split ms-3">
                                <span class="text">Send To Supervisor</span>
                            </button>
                        </div>
                    </th>
                </tr>
                </tbody>
            </table>
        </form>

        <hr>
        <form wire:submit.prevent="trainingCourse">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead><p class="h3 my-7">- Upload courses certificates</p></thead>
                <tbody>

                <tr>
                    <th class="d-flex">
                        <div>
                            <label for="trainingCourse" class="btn btn-primary btn-icon-split">
                                <span class="text">Upload File</span>
                            </label>
                            <input type="file" wire:model.defer="course_file" id="trainingCourse" hidden>
                        </div>
                        <div class="ml-3">
                            <button type="submit" class="btn btn-success btn-icon-split ms-3">
                                <span class="text">Send To Supervisor</span>
                            </button>
                        </div>
                        <div>
                            @error("course_file")
                            <small class="text-danger">{{$message}}</small>
                            @enderror
                        </div>
                    </th>
                </tr>
                </tbody>
            </table>
        </form>
        </div>
    </div>
</div>
