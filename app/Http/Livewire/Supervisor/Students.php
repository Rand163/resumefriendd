<?php

namespace App\Http\Livewire\Supervisor;

use App\Models\Reports;
use App\Models\User;
use Livewire\Component;

class Students extends Component
{
    public function render()
    {
           return view('livewire.supervisor.students',['students'=>User::where('supervisor_id',auth()->id())->get(['id','name'])])
            ->extends('layouts.app')->section('content');
    }
}
