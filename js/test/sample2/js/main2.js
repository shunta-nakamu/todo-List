$(document).ready(function () {
    $('#table_id').css('display', 'none');


    $('button').click(function () {
        $('#table_id').dataTable();
        $('#table_id').fadeIn(1000);
    })


    $("#btn1").click(function(){
        // ダイアログ用のボタン（配列）
        var buttons = [
            {
                text: "OK",
                click: function () { alert("OK!!"); }
            },
            {
                text: "閉じる",
                click: function () { $(this).dialog('close'); }
            }
        ];
        // ダイアログを表示
        showDialog("たいとる", "めっせーじ", buttons);
    });
});