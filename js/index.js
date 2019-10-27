$(document).ready(function(){
    var hash = '#preference'
    $(location).attr('hash', hash)
    switchTab(hash)
})

$(window).on('hashchange', function(e){
    var hash = $(location).attr('hash')
    switchTab(hash)
})

function switchTab(hash){
    $('div#content>div').hide()
    $(`div#content>div${hash}`).show()

    $('#menu>ul>li').removeClass('pure-menu-selected')
    var liSelected = $(`#menu>ul>li>a[href="${hash}"]`).parent()
    liSelected.addClass('pure-menu-selected')
}