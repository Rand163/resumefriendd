<?php
use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Auth\Login;
use App\Http\Controllers\Controller;


Route::get('/login',Login::class)->middleware('guest')->name('login');
Route::post('/logout',[\App\Http\Controllers\AuthController::class,'logout'])->name('logout');


