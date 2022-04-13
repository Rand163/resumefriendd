<?php

namespace App\Traits;

use Jantinnerezo\LivewireAlert\LivewireAlert;

trait WithAlert
{
    use LivewireAlert;
    public function makeAlert($type, $message)
    {
        $this->alert($type, $message, [
            'position' => 'top-end',
            'timer' => '2000',
            'toast' => true,
            'width' => '500',
        ]);

    }
}
