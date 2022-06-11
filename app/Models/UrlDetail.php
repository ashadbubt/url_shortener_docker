<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UrlDetail extends Model
{

    protected $primaryKey = 'id_url_details';

    protected $fillable = [
        'long_url',
        'short_url',
    ];

}
