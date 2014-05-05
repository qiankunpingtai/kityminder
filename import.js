/**
 * 开发版本的文件导入
 */
(function (){
    var paths  = new Array(
            'core/kityminder.js'
            ,'core/utils.js'
            ,'core/command.js'
            ,'core/node.js'
            ,'core/module.js'
            ,'core/event.js'
            ,'core/minder.js'
            ,'core/minder.data.js'
            ,'core/minder.event.js'
            ,'core/minder.module.js'
            ,'core/minder.command.js'
            ,'core/minder.node.js'
            ,'core/keymap.js'
            ,'core/minder.lang.js'
            ,'core/minder.defaultoptions.js'
            ,'core/minder.preference.js'
            ,'core/browser.js'
            ,'module/geometry.js'
            ,'module/history.js'
            ,'module/icon.js'
            ,'module/layout.js'
            ,'module/layout.default.js'
            ,'module/layout.bottom.js'
            ,'core/minder.select.js'
            ,'module/view.js'
            ,'module/dragtree.js'
            ,'module/dropfile.js'
            ,'module/keyboard.js'
            ,'module/select.js'
            ,'module/history.js'
            ,'module/editor.js'
            ,'module/editor.range.js'
            ,'module/editor.receiver.js'
            ,'module/editor.selection.js'
            ,'module/basestyle.js'
            ,'module/font.js'
            ,'module/zoom.js'
            ,'module/nodetext.js'
            ,'module/hyperlink.js'
            ,'ui/jquery-ui-1.10.4.custom.min.js'
            ,'ui/widget.js'
            ,'ui/button.js'
            ,'ui/toolbar.js'
            ,'ui/menu.js'
            ,'ui/dropmenu.js'
            ,'ui/splitbutton.js'
            ,'ui/colorsplitbutton.js'
            ,'ui/popup.js'
            ,'ui/scale.js'
            ,'ui/colorpicker.js'
            ,'ui/combobox.js'
            ,'ui/buttoncombobox.js'
            ,'ui/modal.js'
            ,'ui/tooltip.js'
            ,'ui/tab.js'
            ,'ui/separator.js'
            ,'ui/scale.js'
            ,'adapter/utils.js'
            ,'adapter/adapter.js'
            ,'adapter/button.js'
            ,'adapter/combobox.js'
            ,'adapter/saveto.js'
            ,'adapter/view.js'
            ,'adapter/tooltips.js'
            ,'adapter/layout.js'
            ,'adapter/node.js'
            ,'adapter/contextmenu.js'
            ,'adapter/dialog.js'
            ,'protocal/xmind.js'
            ,'protocal/freemind.js'
            ,'protocal/mindmanager.js'
            ,'protocal/plain.js'
            ,'protocal/json.js'
            ,'protocal/png.js'
            ,'protocal/svg.js'

        ),
        baseURL = 'src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="'+ baseURL + pi +'"></script>');
    }
})();
