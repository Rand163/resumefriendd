<?php

namespace App\Http\Livewire\Auth;

use Livewire\Component;

class Login extends Component
{
    public $email, $password, $remember = false;

    public function rules()
    {
        return [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|min:6|string'
        ];
    }

    public function render()
    {
        return view('livewire.auth.login')->extends('layouts.auth')->section('content');
    }

    public function check()
    {
        $this->validate();
        try {
            $data = [
                'email' => $this->email,
                'password' => $this->password,
            ];
            if (auth()->attempt($data, $this->remember)) {
                $role = auth()->user()->role;
                if ($role == "student") {
                    return redirect()->to('/');
                }
                if ($role == "admin") {
                    return redirect()->to('/user');
                }
                if ($role == "supervisor") {
                    return redirect()->to('/supervisor/students');
                }
            } else {
                session()->flash('message', 'Please verify the information');
            }
        } catch (\Exception $exception) {
            session()->flash('message', 'error !!!');
        }
    }

}
