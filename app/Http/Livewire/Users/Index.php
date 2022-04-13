<?php

namespace App\Http\Livewire\Users;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $students=User::where('role','student')->count();
        $supervisors=User::where('role','Supervisor')->count();

        return view('livewire.users.index', ['users' => User::paginate(10),'students'=>$students,'supervisors'=>$supervisors])
            ->extends('layouts.app')->section('content');
    }
}
