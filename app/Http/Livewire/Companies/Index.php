<?php

namespace App\Http\Livewire\Companies;

use App\Models\Company;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.companies.index',['companies'=>Company::get(['name','link'])])->extends('layouts.app')->section('content');
    }
}
