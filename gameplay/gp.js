//hello from gp.js

$Traliva.$debug = {
    $state: true
};
var $o = {
    $target: 'web',
    $get_layout:function($w, $h, $target){
        return '$lay_1';
    },
    $layouts:{
        $lay_1:{
            $type: $TralivaKit.$Strip,
            $orient: 'v',
            $items:[
                'dd',
                'aa',
                {
                    $_widget: 'qwe',
                    $size: '32px'
                }
            ]
        }
    }
};
$Traliva.$init($o);
