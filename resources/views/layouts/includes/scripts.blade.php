<script>var hostUrl = "assets/";</script>

<script src="{{ asset('js/plugins.bundle.js') }}"></script>
<script src="{{ asset('js/scripts.bundle.js') }}"></script>
<script src="{{ asset('js/custom/widgets.js') }}"></script>

@livewireScripts
<x-livewire-alert::scripts/>
@stack('scripts')
