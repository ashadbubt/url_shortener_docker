<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;

use App\Models\UrlDetail;

class UrlShortenerController extends Controller
{

    public function urlShortener(Request $request)
    {
        // validation
        $rules = [
            'longUrl' => 'required|url'
        ];
        $messages = [
            'longUrl.required' => 'Please enter a valid URL',
            'longUrl.url' => 'Please enter a valid URL'
        ];
        $validation = Validator::make($request->all(), $rules, $messages);
        if ($validation->fails()) {
            $errorMsgString = implode("<br/>", $validation->messages()->all());
            return Response::json(['success' => false, 'data' => $errorMsgString], 400);
        }

        // Recognize duplicate URL
        $hasUrl = UrlDetail::where('long_url', $request->longUrl)->first();
        if($hasUrl !== null) {
            return Response::json(['success' => true, 'data' => $hasUrl], 200);
        }        

        // Check safe URL
        if($this->checkSafeUrl($request->longUrl)) {
            return Response::json(['success' => false, 'data' => "Unsafe URL"], 400);
        }

        // Generate short URL and save
        $urlData = UrlDetail::create([
            'long_url' => $request->longUrl,
            'short_url' => $this->generateRandomAlphaNumeric()
        ]);

        return Response::json(['success' => true, 'data' => $urlData], 200);
                  
    }

    private function checkSafeUrl($longUrl) {
        $response = Http::post('https://safebrowsing.googleapis.com/v4/threatMatches:find?key='.env('MIX_GOOGLE_API_KEY', 'AIzaSyD5wyzU7z5zjHFqKd3ChuzMIh-rvzKzi_E'), [
                'client' =>[
                  'clientId' => 'url_shortner',
                  'clientVersion' => '1.0.0',
                ],
                'threatInfo' => [
                  'threatTypes' => ['MALWARE', 'SOCIAL_ENGINEERING'],
                  'platformTypes' => ["WINDOWS"],
                  'threatEntryTypes' => ["URL"],
                  'threatEntries' =>  [
                    [
                      'url' => $longUrl,
                    ],
                  ],
                 ]
              
        ]);
        
        return $response->failed();
    }

    private function generateRandomAlphaNumeric($length = 6)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }

    public function urlRedirect(Request $request)
    {
        $hash = $request->hash;
        if (strlen($hash) == 6) {
            $urlDetail = UrlDetail::where('short_url', $hash)->first();
            if ($urlDetail) {
                return redirect($urlDetail->long_url);
            } else {
                abort(404);
            }
        } else {
            abort(404);
        }
    }

}
