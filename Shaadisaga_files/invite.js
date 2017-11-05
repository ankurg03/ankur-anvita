/**
 * Created with IntelliJ IDEA.
 * User: prashant
 * Date: 1/9/13
 * Time: 5:12 PM
 * To change this template use File | Settings | File Templates.
 */


function sendRequestViaFriendSelector() {
    FB.ui({method: 'apprequests',
        message: 'My Great Request',
        max_recipients:50
    }, requestCallback);
}

function requestCallback(response){
    var request_ids = [];
    var heading = $("#headingFbShare").val() ;
    var caption = $("#captionFbShare").val();
    var description =$("#descriptionFbShare").val() ;
    var link=$("#websiteLinkFbShare").val();

    if (response.request && response.to) {
        for(i=0; i<response.to.length; i++) {
        FB.ui(
            {
                method: 'feed',
                name: heading,
                to:response.to[i],
                caption:caption,
                description: (description),
                link: link,
                picture: 'https://s3-us-west-2.amazonaws.com/shaadisaga/images/fbPost.jpg'
            },function(response) {
                if (response && response.post_id) {
                    alert('Post published.');
                } else {
                    alert('Post was not published.');
                }
            }
        );
        }
    }
}

function sendRequest(){
    var heading = $("#headingFbShare").val() ;
    var caption = $("#captionFbShare").val();
    var description =$("#descriptionFbShare").val() ;
    var link=$("#websiteLinkFbShare").val();
    FB.ui(
        {
            method: 'feed',
            name: heading,
            caption:caption,
            description: (description),
            link: link,
            picture: 'https://s3-us-west-2.amazonaws.com/shaadisaga/images/fbPost.jpg'
        },function(response) {
            if (response && response.post_id) {
                alert('Post was published.');

            } else {
                alert('Post was not published.');

            }
        }
    );
}

function resetMessage(){
    $("#headingFbShare").val('');
    $("#captionFbShare").val('');
    $("#descriptionFbShare").val('') ;
}

function createPreview(){
   var x =  $("#headingFbShare").val();
   var y =  $("#captionFbShare").val();
   var z =  $("#descriptionFbShare").val() ;
    $("#headingPreview").html(x);
    $("#captionPreview").html(y);
    $("#descriptionPreview").html(z) ;
    $("#previewModal").modal('show');
    return true;
}

