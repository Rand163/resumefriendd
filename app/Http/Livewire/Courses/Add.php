<?php

namespace App\Http\Livewire\Courses;

use App\Models\Course;
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
            'link' => 'required',
        ];
    }
    public function render()
    {
        return view('livewire.courses.add')->extends('layouts.app')->section('content');
    }

    public function add(): void
    {
        $validated = $this->validate();
        try {
            Course::create($validated);
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'Course']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Course']));
        }
    }
}
