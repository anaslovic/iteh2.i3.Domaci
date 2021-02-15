<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('agents')->insert([
            ['ime_Prezime'=>'Miša Pavlović',
            'naziv_agencije'=>'AS Model Agency Crna Gora'],
            ['ime_Prezime'=>'Alex Johnson',
            'naziv_agencije'=>'AS Model Agency USA'],
            ['ime_Prezime'=>'Giovanni Cincciarini',
            'naziv_agencije'=>'AS Model Agency Italija'],
            ['ime_Prezime'=>'Tom Levy',
            'naziv_agencije'=>'AS Model Agency Australija'],
        ]);
    }
}
