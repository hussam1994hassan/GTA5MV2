<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Guest Routes
Route::controller(AuthController::class)->middleware('guest:discord')->group(function () {
    Route::get('/login-with-discord', 'loginWithDiscord')->name('loginWithDiscord');
    Route::get('/discord/callback', 'discordCallback')->name('discordCallback');
});

// Auth Routes
Route::controller(HomeController::class)->middleware('auth:discord')->group(function () {
    Route::get('/home', 'home')->name('home');
    Route::get('/logout' , 'logout')->name('logout');
});

// ReactJS Routes
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '(.*)');