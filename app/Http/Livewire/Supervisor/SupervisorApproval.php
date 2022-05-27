<?php

namespace App\Http\Livewire\Supervisor;

use App\Models\Reports;
use App\Models\User;
use App\Traits\WithAlert;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;

class SupervisorApproval extends Component
{
    use WithAlert;

    public function render()
    {
        return view('livewire.supervisor.supervisor-approval', ['files' => Reports::with('user')->where([['supervisor_id', auth()->id()], ['status', 0]])->get()])
            ->extends('layouts.app')->section('content');
    }

    public function delete($id)
    {

        try {
            $report = Reports::findOrFail($id);

            $report->update([
                'status' => '1',
            ]);

            if ($report->type == "1" || $report->type == "2") {
                $report->user->update([
                    'company' => '',
                ]);
            }

            $this->makeAlert('success', __('alert.successfully_delete', ['model' => 'Report']));
        } catch (\Exception $exception) {
            $this->makeAlert('success', __('alert.successfully_delete', ['model' => 'Report']));
        }
    }

    public function approve($id, $user, $type, $company)
    {
        try {
            $user = User::findOrFail($user);

            $user->update([
                "company" => $company,
            ]);

            if ($type == 3) {
                if ($user->progress < 85) {
                    $user->increment('progress', 16.66);
                } else {
                    $user->update([
                        "progress" => 100,
                    ]);
                }
            }
            Reports::findOrFail($id)->update([
                'status' => '2',
            ]);
            $this->makeAlert('success', __('alert.successfully_add', ['model' => 'Report']));
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Report']));
        }
    }

    public function download($path, $name)
    {
        try {
            return Storage::download($path, $name);
        } catch (\Exception $exception) {
            $this->makeAlert('error', __('alert.error', ['model' => 'Report']));
        }
    }
}
