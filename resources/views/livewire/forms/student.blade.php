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
                <thead> <p class="h6 mb-0">- Upload training site approved form</p> </thead>
                <tbody>
                <tr>
                    <th>Uploads status</th>
                    <th>No Attempts</th>
                </tr>
                <tr>
                    <th>Due date</th>
                    <th>Sunday, 16 Jan 2022, 12:00 AM</th>
                </tr>
                <tr>
                    <th>Course Name</th>
                </tr>
                <tr>
                    <th>
                        <input wire:model.defer="company" type="text"
                               class="form-control @error('company') is-invalid @enderror" id="name"
                               placeholder="Company Name" maxlength="64" required>
                        @error('company') <span
                            class="error small form-text invalid-feedback">{{ $message }}</span> @enderror
                    </th>
                </tr>
                <tr>
                    <th>Uploaded file</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th class="d-flex">
                      <div>
                          <label for="trainingApproved" class="btn btn-primary btn-icon-split">
                              <span class="text ">Upload File</span>
                          </label>
                          <input type="file" wire:model.defer="file" id="trainingApproved" hidden>
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

        <form wire:submit.prevent="trainingReport">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead><p class="h6 mb-0">- Upload training report</p></thead>
                <tbody>
                <tr>
                    <th>Uploads status</th>
                    <th>No Attempts</th>
                </tr>
                <tr>
                    <th>Due date</th>
                    <th>Sunday, 16 Jan 2022, 12:00 AM</th>
                </tr>
                <tr>
                    <th>Uploaded file</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th class="d-flex">
                        <div>
                            <label for="trainingApproved" class="btn btn-primary btn-icon-split">
                                <span class="text">Upload File</span>
                            </label>
                            <input type="file" wire:model.defer="file" id="trainingApproved" hidden>
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
                <thead><p class="h6 mb-0">- Upload courses certificates</p></thead>
                <tbody>
                <tr>
                    <th>Uploads status</th>
                    <th>No Attempts</th>
                </tr>
                <tr>
                    <th>Due date</th>
                    <th>Sunday, 16 Jan 2022, 12:00 AM</th>
                </tr>
                <tr>
                    <th>Course Name</th>
                </tr>
                <tr>
                    <th>
                        <input wire:model.defer="company" type="text"
                               class="form-control @error('company') is-invalid @enderror" id="name"
                               placeholder="Course Name" maxlength="64" required>
                        @error('company') <span
                            class="error small form-text invalid-feedback">{{ $message }}</span> @enderror
                    </th>
                 </tr>
                <tr>
                    <th>Uploaded file</th>
                    <th>-</th>
                </tr>
                <tr>
                    <th class="d-flex">
                        <div>
                            <label for="trainingApproved" class="btn btn-primary btn-icon-split">
                                <span class="text">Upload File</span>
                            </label>
                            <input type="file" wire:model.defer="file" id="trainingApproved" hidden>
                        </div>
                        <div class="ml-3">
                            <button type="submit" class="btn btn-success btn-icon-split ms-3">
                                <span class="text">Send To Supervisor</span>
                            </button>
                        </div>
                        <div>
                            @error("file")
                            <small>{{$message}}</small>
                            @enderror
                        </div>
                    </th>
                </tr>
                </tbody>
            </table>
        </form>
        </div>
    </div>

