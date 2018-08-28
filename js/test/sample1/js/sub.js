$(document).ready(function(){
    // $('#table_id').DataTable({
    //  "language": {
    //   "url": "//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Japanese.json"
    //  },
    // });
    $('#open').click(function() {

        console.log('hello');
        $('#overlay, #modalWindow').fadeIn();
    });
    
    $('#close').on('click', function() {
        $('#overlay, #modalWindow').fadeOut();
    });
    
    // locateCenter();
    // $(window).resize(locateCenter);
    
    function locateCenter() {
        let w = $(window).width();
        let h = $(window).height();
        
        let cw = $('#modalWindow').outerWidth();
        let ch = $('#modalWindow').outerHeight();
        
        $('#modalWindow').css({
            'left': ((w - cw) / 2) + 'px',
            'top': ((h - ch) / 2) + 'px'
        });
    }

});