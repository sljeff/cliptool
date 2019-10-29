$(document).ready(function(){
    // refresh tab
    var hash = '#preference'
    $(location).attr('hash', hash)
    switchTab(hash)

    // register setting form

    // register clipboard
})

$(window).on('hashchange', function(e){
    var hash = $(location).attr('hash')
    switchTab(hash)
})

function switchTab(hash){
    $('div#mainpage>div').hide()
    $(`div#mainpage>div${hash}`).show()

    $('#menu>ul>li').removeClass('is-active')
    var liSelected = $(`#menu>ul>li>a[href="${hash}"]`).parent()
    liSelected.addClass('is-active')
}

function chooseDir(){
    const { dialog  } = require('electron').remote
    var path = dialog.showOpenDialog({
        properties: ['openDirectory']
    })
}
