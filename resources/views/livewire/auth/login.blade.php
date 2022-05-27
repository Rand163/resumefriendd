<div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url(assets/sigma-1/14.png)">
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">

        <!--begin::Logo-->
        <img
            alt="Logo"
            src="assets/img/cv.png"
            class="h-90px "
        />


        <!--begin::Wrapper-->
        <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">

            <!--begin::Form-->
            <form class="form w-100" wire:submit.prevent="check">
                <!--begin::Heading-->
                <div class="text-center mb-8">
                    <!--begin::Title-->
                    <h1 class="text-dark mb-3">Sign In <span class="text-primary">Resume</span> <span
                            class="text-secondary">Friend</span></h1>

                </div>

                @if (session()->has('message'))
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        {{ session('message') }}
                    </div>
                @endif
                <!--begin::Input group-->
                <div class="fv-row mb-8">

                    <label class="form-label fs-6 fw-bolder text-dark" for="email">Email</label>

                    <input
                        class="form-control form-control-lg form-control-solid @error('email')border-danger @enderror"
                        type="email" wire:model.defer="email"
                        id="email" autocomplete="off" required/>
                    @error('email')
                    <small class="text-danger ml-3">{{$message}}</small>
                    @enderror
                </div>

                <!--begin::Input group-->
                <div class="fv-row mb-10">
                    <div class="d-flex flex-stack mb-2">
                        <label class="form-label fw-bolder text-dark fs-6 mb-0" for="password">Password</label>
                    </div>
                    <input
                        class="form-control form-control-lg form-control-solid  @error('password')border-danger @enderror"
                        type="password" id="password" wire:model.defer="password" autocomplete="off" required/>
                    @error('password')
                    <small class="text-danger ml-3">{{$message}}</small>
                    @enderror
                </div>

                <!--begin::Submit button-->
                <div class="text-center">
                    <!--begin::Submit button-->
                    <button
                        type="submit"
                        id="kt_sign_in_submit"
                        class="btn btn-lg btn-primary w-100 mb-5"
                    >
                        <span class="indicator-label">Sign in</span>
                        <span class="indicator-progress"
                        >Please wait...
                    <span
                        class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span
                    ></span>
                    </button>
                </div>
            </form>

        </div>


        <div class="d-flex align-items-center fw-bold fs-6">
            <a href="{{route('about')}}" class="text-muted text-hover-primary pt-10">About Us</a>

        </div>
    </div>


</div>

