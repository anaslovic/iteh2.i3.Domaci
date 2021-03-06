<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Models;

class Agents extends Model
{
    use HasFactory;

    public function models()
    {
        return $this->hasMany(Models::class);
    }
}
