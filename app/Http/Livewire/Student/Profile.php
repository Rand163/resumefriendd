<?php

namespace App\Http\Livewire\Student;

use App\Models\User;
use Livewire\Component;

class Profile extends Component
{
    public $supervisor='',$email,$name,$progress,$company,$collage,$user=[];
    public function render()
    {
        return view('livewire.student.profile')->extends('layouts.app')->section('content');
    }

    public function mount(User $user){
        $this->user=$user;
        $supervisor=User::where('id',$user->supervisor_id)->first(['name']);
        if (!is_null($supervisor) ){
            $this->supervisor=$supervisor->name;
        }
     }
}
