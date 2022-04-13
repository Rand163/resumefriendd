<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Student\{Welcome,Profile};
use App\Http\Livewire\Users\{Index,Add,Edit};
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::group(['middleware'=>['auth']],function (){
     Route::get('/',Welcome::class)->name('welcome')->middleware('student');

    Route::group(['prefix'=>'user','as'=>'user.','middleware'=>'admin'],function(){
        Route::get('/',\App\Http\Livewire\Users\Index::class)->name('index');
        Route::get('/add',\App\Http\Livewire\Users\Add::class)->name('add');
        Route::get('/edit/{user}',\App\Http\Livewire\Users\Edit::class)->name('edit');
    });

    Route::get('/user/profile/{user}',Profile::class)->name('user.profile');

    Route::group(['prefix'=>'companies','as'=>'companies.'],function(){
        Route::get('/',\App\Http\Livewire\Companies\Index::class)->name('index');
        Route::get('/add',\App\Http\Livewire\Companies\Add::class)->name('add')->middleware('admin');
    });

    Route::group(['prefix'=>'courses','as'=>'courses.'],function(){
        Route::get('/',\App\Http\Livewire\Courses\Index::class)->name('index');
        Route::get('/add',\App\Http\Livewire\Courses\Add::class)->name('add')->middleware('admin');
    });

    Route::group(['prefix'=>'supervisor','as'=>'supervisor.','middleware'=>'supervisor'],function(){
        Route::get('/students',\App\Http\Livewire\Supervisor\Students::class)->name('students');
        Route::get('/pending',\App\Http\Livewire\Supervisor\SupervisorApproval::class)->name('pending');
        Route::get('/history',\App\Http\Livewire\Supervisor\History::class)->name('history');
    });

    Route::group(['prefix'=>'students','as'=>'students.','middleware'=>'student'],function(){
        Route::get('/forms',\App\Http\Livewire\Forms\Student::class)->name('forms');
    });
});

require __DIR__.'/auth.php';


