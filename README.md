# 生活圈模板使用说明

## 文件夹结构

 - **lfcenter.html**：六级分类的导航文件
 - **common_res/**：通用库文件
 - **Themes/**：各类模板保存在这里，全部文件包含在一个子文件夹中
 
## 模板编写规则

模板总体来说，除这个提供的通用模板外，各地市自行开发。模板顶部代码统一定义如下

## 模板head部分编写规则

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <script src="../../common_res/arttemplate/template-native.js"></script>
    <script src="../../common_res/jquery/jquery.min.js"></script> 
    <script src="../../common_res/lifecircleapi/common.js"></script>
    <link href="../../common_res/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <!-- 以上为统一引用代码，个性化代码放在下面 -->

## 模板body部分编写规则
    <body id="lifecirclebody">
    <script id="template" type="text/html">
    自定义代码
    </script>
    </body>
