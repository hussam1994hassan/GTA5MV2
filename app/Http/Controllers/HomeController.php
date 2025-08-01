<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function home()
    {
        return view('dashboard.home');
    }

    public function logout()
    {
        Auth::guard('discord')->logout();
        return redirect()->route('loginWithDiscord');
    }

}
