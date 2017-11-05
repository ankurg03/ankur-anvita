/**
 * Created with IntelliJ IDEA.
 * User: prashantpal
 * Date: 16/03/14
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    $(".previewTemplate").click(function(e){
        $(".top-bar").toggle()
        $(".top-bar-new").toggle()
        $("#sidebar-wrapper").toggle()
        if($("#sidebar-wrapper").css('display') == 'none'){
            $("#wrapper").css('padding-left',0)
        }else{
            $("#wrapper").css('padding-left',50)
        }
        $(".h-dash-boad").toggle()
        $("#adminBack").toggle();
        $(".editControl").toggle();
        $(".navbar").toggleClass('navbar-fixed-top');
    });
});
