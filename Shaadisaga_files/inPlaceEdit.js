/**
 * Created with IntelliJ IDEA.
 * User: Himanshu
 * Date: 7/14/13
 * Time: 9:08 PM
 * To change this template use File | Settings | File Templates.
 */

$.fn.editable.defaults.mode = 'inline';
$(document).ready(function () {
    $('#aboutBrideData').editable({
        type: 'wysihtml5',
        url: urlInPlaceEdit,
        pk: 1,
        name: 'aboutBride',
        tpl:'<textarea style="width:300px;height:145px;"></textarea>'
    });
    $('#aboutBrideEdit').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#aboutBrideData').editable('toggle');
    });

    $('#aboutGroomData').editable({
        type: 'wysihtml5',
        url: urlInPlaceEdit,
        pk: 1,
        name: 'aboutGroom',
        tpl:'<textarea style="width:300px;height:145px;"></textarea>'
    });
    $('#aboutGroomEdit').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#aboutGroomData').editable('toggle');
    });

    $('#howWeMetData').editable({
        type: 'wysihtml5',
        url: urlInPlaceEdit,
        pk: 1,
        name: 'howWeMet',
        tpl:'<textarea style="width:300px;height:145px;"></textarea>'
    });
    $('#howWeMetEdit').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#howWeMetData').editable('toggle');
    });

    $('#proposalData').editable({
        type: 'wysihtml5',
        url: urlInPlaceEdit,
        pk: 1,
        name: 'proposal',
        tpl:'<textarea style="width:300px;height:145px;"></textarea>'
    });
    $('#proposalEdit').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#proposalData').editable('toggle');
    });
});