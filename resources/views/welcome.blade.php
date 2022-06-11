<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>URL Shortener</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <main class="py-3">
            <div class="container">
                <h1>Paste the URL to be shortened</h1>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter the link here">
                    <div class="input-group-append">
                        <!-- <span class="input-group-btn btn-primary" id="basic-addon2">Shorten URL</span> -->
                        <button class="btn btn-primary" type="button">Shorten URL</button>
                    </div>
                </div>
                <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
            </div>
            <router-view></router-view>
        </main>
    </div>
</body>

</html>