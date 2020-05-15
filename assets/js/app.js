$(document).ready(function(){
   
   
    // sideBarToggle
    $('.toggler').click(function(){
        sideBarToggle();
    })
    // searchToggle
    $('.searchX').click(function(){
        searchToggle();
    })
    // right sideBar tab switch
    $('.ui-to').click(function(){
        sideBarToggleTab($(this).attr('data-to'))
    })
    //user profile
    $('.user').click(function(){
        sideBarToggle('uiProfile');
    })
    // overlay controls
    $('.xover').click(function(){
        $('.left').removeClass('smallview')
        $('.xover').fadeToggle();
    })
    //toggle left sidebar for mobile
    $('.filters').click(function(){
        $('.left').toggleClass('smallview');
        $('.xover').fadeToggle();
    })
})

function sideBarToggle(data){
    $('.right').fadeToggle(function(){
        $('.over').fadeToggle();
        if(data){
            sideBarToggleTab(data)
        }else {
            sideBarToggleTab('uiCart')
        }
        
        $('body').toggleClass('barless')
    })
}

function sideBarToggleTab(data){
    $('.ui').hide(function(){
        $('.'+data).show();
    })
}

function searchToggle(){
    $('.searchBar,.over').fadeToggle();
}


//routing pages from url hash
setInterval(function () {
    url = window.location.hash.slice(1).split('#');
    if(jQuery.inArray('item',url) > -1){
        $('#home,#xplore').hide(function(){
            $('#singleton').fadeIn();
        })
    }
    if(jQuery.inArray('explore',url) > -1 || jQuery.inArray('search',url) > -1|| jQuery.inArray('classify',url) > -1){
        $('#home,#singleton').hide(function(){
            $('#xplore').fadeIn();
        })
    }
},1);
