<?php

namespace App\Http\Livewire\Users;

use App\Models\Students;
use App\Models\User;
use App\Traits\WithAlert;
use Livewire\Component;

class Edit extends Component
{
    use WithAlert;
    public $name, $email, $role, $supervisor;

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'supervisor' => 'required',
            'role' => 'required',
        ];
    }
    public function render()
    {
        return view('livewire.users.edit',['supervisors'=>User::where('role','supervisor')->get(['id','name'])])->extends('layouts.app')->section('content');
    }

    public function add(): void
    {
        $this->validate();
        try {
            $user = User::update([
                'name' => $this->name,
                'role' => $this->role,
            ]);

            Students::create([
                'student_id' => $user->id,
                'supervisor_id' => $this->supervisor,
            ]);
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'Message']));
            $this->reset();
        } catch (\Exception $exception) {
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'Message']));
        }
    }
}
