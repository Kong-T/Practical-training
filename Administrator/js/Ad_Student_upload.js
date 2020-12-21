// function file() {
$('#file').fileinput({

    'theme': 'explorer',

    // uploadUrl: 'http://localhost:8080/sign',

    language: 'zh',
    dropZoneEnabled: true,//是否显示拖拽区域
    browseOnZoneClick: true,

    showUpload: true, //是否显示上传按钮

    showRemove: true,//是否显示删除按钮

    showClose: true,//是否显示关闭按钮

    // uploadUrl: '<%=path%>/uploadMultipleFile.do',

    showPreview: true,//是否显示预览

    allowedPreviewTypes: ['image', 'html', 'text', 'video', 'audio', 'flash'],

    maxFileCount: 3,// 表示允许同时上传的最大文件个数

    // previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",

    /*不同文件图标配置*/
    previewFileIconSettings: {
        'docx': '<i class="fa fa-file-word-o text-primary" ></i>',
        'xlsx': '<i class="fa fa-file-excel-o text-success"></i>',
        'pptx': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
        'jpg': '<i class="fa fa-file-photo-o text-warning"></i>',
        'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
        'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
        'doc': '<i class="fa fa-file-word-o text-primary"></i>',
        'xls': '<i class="fa fa-file-excel-o text-success"></i>',
        'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
        'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
        'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
        'htm': '<i class="fa fa-file-code-o text-info"></i>',
        'txt': '<i class="fa fa-file-text-o text-info"></i>',
        'mov': '<i class="fa fa-file-movie-o text-warning"></i>',
        'mp3': '<i class="fa fa-file-audio-o text-warning"></i>',
        'jpg': '<i class="fa fa-file-photo-o text-danger"></i>',
        'gif': '<i class="fa fa-file-photo-o text-muted"></i>',
        'png': '<i class="fa fa-file-photo-o text-primary"></i>'
    },
})

// }
// $(function () {
//     var path = "${base}/admin/product/upload.htm";
//     file("file", path);

// })

function postData() {
    $("#file").change(function eventStart() {
        console.log("上传了" + this.files.length + "个文件")
        var ss = this.files; //获取当前选择的文件对象
        for (var m = 0; m < ss.length; m++) { //循环添加进度条
            efileName = ss[m].name;
            if (ss[m].size > 1024 * 1024) {
                sfileSize = (Math.round(ss[m].size / (1024 * 1024))).toString() + 'MB';
            } else {
                sfileSize = (Math.round(ss[m].size / 1024)).toString() + 'KB';
            }

            $("#test").append("<li  id=" + m + "file><div class='progress'><div id=" + m + "barj class='progressbar'></div></div><span class='filename'>" + efileName + "</span><span id=" + m + "pps class='progressnum'>" + (sfileSize) + "</span></li>");
        }
    })
}