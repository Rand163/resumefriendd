<?php

namespace App\Http\Livewire\Forms;

use App\Models\Reports;
use App\Models\User;
use App\Traits\WithAlert;
use Livewire\Component;
use Livewire\WithFileUploads;

class Student extends Component
{
    use WithFileUploads, WithAlert;

    public $file, $company, $course_file, $report_file, $training_file;


    public function render()
    {
        return view('livewire.forms.student')->extends('layouts.app')->section('content');
    }

    public function trainingApproved()
    {
        $validatedData = $this->validate([
            'training_file' => 'required|mimes:pdf|max:3000000',
            'company' => 'required',
        ]);

        try {
            $path = $this->training_file->store('files');
            $file_name = pathinfo($this->training_file->getClientOriginalName(), PATHINFO_FILENAME);

            Reports::create([
                'user_id' => auth()->id(),
                'supervisor_id' => auth()->user()->supervisor_id,
                'type' => '1',
                'path' => $path,
                'name' => $file_name,
                'company' => $this->company
            ]);
            $this->makeAlert('success', __('alert.successfully_send', ['model' => 'Report']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Report']));
        }
    }

    public function trainingReport()
    {
        $validatedData = $this->validate([
            'report_file' => 'required|mimes:pdf|max:3000000',
        ]);

        try {
            $path = $this->report_file->store('files');
            $file_name = pathinfo($this->report_file->getClientOriginalName(), PATHINFO_FILENAME);

            Reports::create([
                'user_id' => auth()->id(),
                'supervisor_id' => auth()->user()->supervisor_id,
                'type' => '3',
                'path' => $path,
                'name' => $file_name,
            ]);
            $this->makeAlert('success', __('alert.successfully_send', ['model' => 'Report']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Report']));
        }
    }

    public function trainingCourse()
    {
        $validatedData = $this->validate([
            'course_file' => 'required|mimes:pdf|max:3000000',
        ]);

        try {
            $path = $this->course_file->store('files');
            $file_name = pathinfo($this->course_file->getClientOriginalName(), PATHINFO_FILENAME);
            User::where('id', auth()->id())->update([
                'company' => $this->company
            ]);
            Reports::create([
                'user_id' => auth()->id(),
                'supervisor_id' => auth()->user()->supervisor_id,
                'type' => '2',
                'path' => $path,
                'name' => $file_name,
            ]);
            $this->makeAlert('success', __('alert.successfully_send', ['model' => 'Report']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Report']));
        }
    }
}
