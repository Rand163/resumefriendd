<?php

namespace App\Http\Livewire\Supervisor;

use App\Models\Reports;
use Livewire\Component;

class History extends Component
{
    public function render()
    {
        return view('livewire.supervisor.history',['users'=>Reports::with('user:id,name')->where('supervisor_id',auth()->id())->get()])
            ->extends('layouts.app')->section('content');
    }
}
