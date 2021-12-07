<!doctype html>
<html lang="zh_CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>相册 |  DuskMC</title>
    <link rel="shortcut icon" href="../../favicon.ico">
    <link rel="stylesheet" type="text/css" href="../public/css/index.css">
    <link rel="stylesheet" type="text/css" href="../public/css/animation/animation.css">
</head>
<body onresize="onReSize()" onload="onLoad()">

    <!-- import JavaScript File -->
    <script src="../public/js/index.js"></script>
    <script src="../public/js/util/util.js"></script>
    <script src="../public/js/thread/MenuThread.js"></script>

    <div id="container" style="width:500px">

    <div id="header" class="header">
        <div id="navbar" class="header-navbar" hidden="hidden">
            <img class="img-header-navbar-logo" src="../public/img/logo.png" alt="">
            <h1 class="text-header-navbar-title">DuskMC</h1>
            <img class="button-header-navbar-menu" src="../public/img/menu.png" hidden="hidden" onclick="onUserClickMenuButton()" alt="菜单">
            <div id="jump-button" class="header-navbar-jump">
                <button class="button-header-navbar-jump-1" onclick="onUserClickJumpButton('首页')">首页</button>
                <button class="button-header-navbar-jump-2" onclick="onUserClickJumpButton('关于')">关于</button>
                <button class="button-header-navbar-jump-3" onclick="onUserClickJumpButton('文档')">文档</button>
                <button class="button-header-navbar-jump-4" onclick="onUserClickJumpButton('相册')">相册</button>
            </div>
        </div>
        <div id="menu-navbar" class="menu-navbar graduallyDisplay" hidden="hidden">
            <button class="button-header-menu-navbar-jump button-header-menu-navbar-jump-1" onclick="onUserClickJumpButton('首页')">首页</button>
            <button class="button-header-menu-navbar-jump button-header-menu-navbar-jump-2" onclick="onUserClickJumpButton('关于')">关于</button>
            <button class="button-header-menu-navbar-jump button-header-menu-navbar-jump-3" onclick="onUserClickJumpButton('文档')">文档</button>
            <button class="button-header-menu-navbar-jump button-header-menu-navbar-jump-4" onclick="onUserClickJumpButton('相册')">相册</button>
        </div>
    </div>


</body>
</html>