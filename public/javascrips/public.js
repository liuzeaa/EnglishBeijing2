
var title = localStorage.getItem('title');
var index = title.indexOf('=');
if(index>-1){
    title = title.slice(index+1);
    $('#title').html(title);
}

layui.use(['layer'], function(){
    var index = parent.layer.getFrameIndex(window.name),layer = layui.layer,$ = layui.jquery;
    $('#cancel').click(function(){
        parent.layer.close(index); //再执行关闭
    })
});



