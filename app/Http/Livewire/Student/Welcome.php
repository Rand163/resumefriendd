<?php

namespace App\Http\Livewire\Student;

use Livewire\Component;

class Welcome extends Component
{
    public function render()
    {
        return view('livewire.student.welcome')->extends('layouts.app')->section('content');
    }
}
