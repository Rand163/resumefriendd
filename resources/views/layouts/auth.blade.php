<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Resume Friend | Sign In')</title>

    <link rel="icon shortcut" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
    <link href="{{ asset('assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ asset('assets/css/style.bundle.css') }}" rel="stylesheet" type="text/css"/>
    @livewireStyles
</head>
<body id="kt_body">
<main class="d-flex flex-column flex-root">
@yield('content')
</main>
<script>var hostUrl = "assets/";</script>
<script src="{{ asset('seven/plugins/global/plugins.bundle.js') }}"></script>
<script src="{{ asset('seven/js/scripts.bundle.js') }}"></script>

@livewireScripts
@yield('scripts')
</body>
</html>
