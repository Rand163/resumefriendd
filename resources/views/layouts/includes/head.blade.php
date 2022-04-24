<head>
    <base href="">
    <title>@yield('title', 'Students')</title>
    <meta charset="utf-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon shortcut" href="{{ asset('logo.ico') }}">
{{--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />--}}
    <link href="{{ asset('assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('assets/css/style.bundle.css') }}" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>

    <script src="https://cdn.asas4edu.com/fontAwsome.js"></script>
    <script src="//unpkg.com/alpinejs" defer></script>
    @livewireStyles
    @stack('styles')
</head>
