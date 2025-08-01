<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Api Guest Routes
Route::controller(ApiController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/create', 'create');

    // Discord Auth Route
    Route::get('/discord/callback', 'discordCallback');
    Route::post('/discord/check', 'discordCheck');
});

// Api Auth Routes
Route::controller(ApiController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/user', 'user');
    Route::post('/logout', 'logout');
});