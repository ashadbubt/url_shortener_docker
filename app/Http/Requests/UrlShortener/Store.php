<?php

namespace App\Http\Requests\UrlShortener;

use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $regex = '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/';
        return [
            'longUrl' => 'required|regex:'.$regex.'|unique:url_details,long_url'
            // 'longUrl' => 'required|url|unique:url_details,long_url'
        ];
    }

    public function messages()
    {
        return [
            'longUrl.required' => 'Please enter a valid URL',
            'longUrl.regex' => 'Please enter a valid URL',
            'longUrl.unique' => 'This URL has already been shortened',
        ];
    }
    
}
