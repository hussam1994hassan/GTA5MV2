<x-guest-layout>
    <h1>LOGIN WITH DISCORD</h1>
    <a class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex flex-row gap-2 justify-center items-center" href="https://discord.com/oauth2/authorize?client_id={{ config('app.discord_client_id') }}&response_type=code&redirect_uri={{ urlencode(config('app.discord_redirect_uri')) }}&scope=identify+email"><ion-icon name="logo-discord"></ion-icon> Login With Discord</a>
</x-guest-layout>
