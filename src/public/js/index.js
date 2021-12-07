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


