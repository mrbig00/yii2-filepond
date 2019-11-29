<?php
/**
 * MailChimp
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Commercial License
 * you can't distribute, modify or sell this code
 *
 * @author    Zoltan Szanto <zoli@prestachamps.com>
 * @copyright Mailchimp
 * @license   commercial
 */

namespace vkabachenko\filepond\assets;

use yii\web\AssetBundle;

/**
 * Class FilepondConfigAsset
 *
 * @package vkabachenko\filepond\assets
 */
class FilepondConfigAsset extends AssetBundle
{
    public $js = [
        'js/filepond.js'
    ];

    public function init()
    {
        $this->sourcePath = dirname(__DIR__) .'/../assets';
        parent::init();
    }
}
