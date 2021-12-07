function onLoad() {
    onReSize();
    const headerNavbar = document.getElementById("header").getElementsByClassName("header-navbar").item(0);
    const atr = headerNavbar.getAttributeNode("hidden");
    headerNavbar.removeAttributeNode(atr);
}

function onReSize(){
    let width = getResolution().height;
    let height = getResolution().width;
    if (width != null && height != null) {
        /** 当页面宽度小于1000时，动态调整导航条左边空隙宽度 **/
        if (width < 1000) {
            const difference = 1000 - width;
            let pctCutNeeded = difference / 40;

            const headerNavbar = document.getElementById("header").getElementsByClassName("header-navbar").item(0);
            const atr = document.createAttribute("style");
            if ((15 - pctCutNeeded) > 0) {
                /** 导航条左边调整 **/
                atr.nodeValue = "left: " + (15 - pctCutNeeded) + "%; " + "width: " + (100 - 2 * (15 - pctCutNeeded)) + "%"
                headerNavbar.setAttributeNode(atr);
            } else {
                atr.nodeValue = "left: 0; " + "width: 100%"
                headerNavbar.setAttributeNode(atr);
            }
        }

        /** 当页面宽度等于1000时，调整导航条左边空隙为默认宽度 **/
        else {
            const headerNavbar = document.getElementById("header").getElementsByClassName("header-navbar").item(0);

            if (headerNavbar.getAttributeNode("style") != null) {
                let atr = headerNavbar.getAttributeNode("style");
                headerNavbar.removeAttributeNode(atr);
            }
        }

        /** 当页面宽带小于500时，显示导航按钮 **/
        if (width < 500) {
            const headerNavbarMenu = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("button-header-navbar-menu").item(0);
            if (headerNavbarMenu.getAttributeNode("hidden")) {
                const atr = headerNavbarMenu.getAttributeNode("hidden");
                headerNavbarMenu.removeAttributeNode(atr);
            }

            const headerNavbarMenuJump = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("header-navbar-jump").item(0);
            const atr = document.createAttribute("hidden");
            atr.nodeValue = "hidden";
            headerNavbarMenuJump.setAttributeNode(atr);

        }

        /** 当页面宽带大于500时，导航按钮隐藏 **/
        else {
            const headerNavbarMenu = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("button-header-navbar-menu").item(0);
            const atr = document.createAttribute("hidden");
            atr.nodeValue = "hidden";
            headerNavbarMenu.setAttributeNode(atr);
            const headerNavbarMenuJump = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("header-navbar-jump").item(0);
            if (headerNavbarMenuJump.getAttributeNode("hidden")) {
                const atr = headerNavbarMenuJump.getAttributeNode("hidden");
                headerNavbarMenuJump.removeAttributeNode(atr);
            }
        }

        /** 当页面宽带小于500时，隐藏Logo标题 **/
        if (width < 216) {
            const headerNavbarTitle = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("text-header-navbar-title").item(0);
            const atr = document.createAttribute("hidden");
            atr.nodeValue = "hidden";
            headerNavbarTitle.setAttributeNode(atr);
        }

        /** 当页面宽带大于500时，显示Logo标题 **/
        else {
            const headerNavbarTitle = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("text-header-navbar-title").item(0);
            if (headerNavbarTitle.getAttributeNode("hidden") != null) {
                const atr = headerNavbarTitle.getAttributeNode("hidden");
                headerNavbarTitle.removeAttributeNode(atr);
            }
        }
    } else {
        throw "Cannot get the window resolution!";
    }
}

function onUserClickJumpButton(name) {
    switch (name) {
        case "首页" :
            window.open("http://www.duskmc.cn");
            break;

        case "关于" :
            window.open("http://www.duskmc.cn/about/");
            break;

        case "文档" :
            window.open("http://doc.duskmc.cn");
            break;

        case "相册" :
            location.reload();
            break;
    }
}

function onUserClickMenuButton() {
    const headerMenuNavbar = document.getElementById("header").getElementsByClassName("menu-navbar").item(0);
    let atr = headerMenuNavbar.getAttributeNode("hidden");
    if (atr != null) {
        headerMenuNavbar.removeAttributeNode(atr);
    } else {
        atr = document.createAttribute("hidden");
        atr.nodeValue = "hidden";
        headerMenuNavbar.setAttributeNode(atr);
    }

    const headerNavbarMenu = document.getElementById("header").getElementsByClassName("header-navbar").item(0).getElementsByClassName("button-header-navbar-menu").item(0);
    const src = headerNavbarMenu.getAttributeNode("src");
    headerNavbarMenu.removeAttributeNode(src);
    if (src.nodeValue === "../public/img/menu.png") {
        src.nodeValue = "../public/img/menu-open.png";
        headerNavbarMenu.setAttributeNode(src);
        const headerMenuNavbar = document.getElementById("header").getElementsByClassName("menu-navbar").item(0);
        let posAtr = document.createAttribute("top");
        let msg = new Map();
        msg.set("headerMenuNavbar",headerMenuNavbar);
        msg.set("posAtr",posAtr);
        //new Worker("../public/js/thread/MenuThread.js").postMessage(msg);
    } else {
        src.nodeValue = "../public/img/menu.png"
        headerNavbarMenu.setAttributeNode(src);
    }


}


