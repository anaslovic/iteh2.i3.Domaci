<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ModelsController;
use App\Http\Controllers\Api\AgentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('models',[ModelsController::class, 'index']);
Route::get('agents',[AgentsController::class, 'index']);
Route::get('agentsById/{id}',[AgentsController::class, 'show']);

Route::post('addition/store',[ModelsController::class, 'store']);

Route::delete('allModels/delete/{id}',[ModelsController::class, 'destroy']);
Route::delete('allAgents/delete/{id}',[AgentsController::class, 'destroy']);
