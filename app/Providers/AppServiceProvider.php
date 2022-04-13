<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::if('admin', function () {
            return auth()->user()->role == "admin";
        });
        Blade::if('student', function () {
            return auth()->user()->role == "student";
        });
        Blade::if('supervisor', function () {
            return auth()->user()->role == "supervisor";
        });
    }
}
