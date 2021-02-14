<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models;
use App\Models\Agents;

class ModelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $m=Models::all();
        return $m;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $id=$request->agent_id;
        $a = Agents::find($id);
        if($a!=null && $request->cenaIznajmljivanja!=null && $request->agent_id!=null && $request->cenaIznajmljivanja>0
            && $request->godiste!=null && $request->models!=null){
          
                $m = new Models();
                $m->imePrezime=$request->models;
                $m->agent_id=$request->agent_id;
                $m->cenaIznajmljivanja=$request->cenaIznajmljivanja;
                $m->godiste=$request->godiste;
                $m->save();
            
        }
        else{
            echo 'Try again! Invalid!'; 
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $m=Models::find($id);
        $m->delete();
    }
}
