<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Agents;

class Models extends Model
{
    use HasFactory;

    public function agents()
    {
        return $this->belongsTo(Agents::class);
        $timestamps = false;
    }

}
