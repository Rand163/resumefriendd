<?php

namespace App\Http\Livewire\Companies;

use App\Models\Company;
use App\Traits\WithAlert;
use Livewire\Component;

class Add extends Component
{
    use WithAlert;

    public $name, $link;

    public function rules()
    {
        return [
            'name' => 'required|string',
            'link' => 'nullable',
        ];
    }

    public function render()
    {
        return view('livewire.companies.add')->extends('layouts.app')->section('content');
    }

    public function add(): void
    {
         $validated = $this->validate();
        try {
            Company::create($validated);
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'Company']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Company']));
        }
    }
}
