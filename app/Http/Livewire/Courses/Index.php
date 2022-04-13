<?php

namespace App\Http\Livewire\Courses;

use App\Models\Course;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.courses.index',['courses'=>Course::get(['name','link'])])->extends('layouts.app')->section('content');
    }
}
