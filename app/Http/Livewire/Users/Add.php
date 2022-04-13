<?php

namespace App\Http\Livewire\Users;

use App\Models\Students;
use App\Models\User;
use App\Traits\WithAlert;
use Livewire\Component;

class Add extends Component
{
    use WithAlert;

    public $name, $email, $role, $supervisor;

    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'role' => 'required',
        ];
    }

    public function render()
    {
        return view('livewire.users.add', ['supervisors' => User::where('role', 'supervisor')->get(['id', 'name'])])->extends('layouts.app')->section('content');
    }

    public function add(): void
    {
        $this->validate();
        try {
            $user = User::create([
                'name' => $this->name,
                'email' => $this->email,
                'password' => bcrypt(123456),
                'supervisor_id' => $this->supervisor,
                'role' => $this->role,
            ]);
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'User']));
            $this->reset();

        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'User']));
        }
    }
}
