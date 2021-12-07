function mainFunc(){}

onmessage = msg => {
    let map = new Map(Object.entries(msg));
    let posAtr = map.get("posAtr");
    let headerMenuNavbar = map.get("headerMenuNavbar");
    let top = -200;
    while (true) {
        if (top !== 51) {
            top++;
            posAtr.nodeValue = top;
            headerMenuNavbar.setAttributeNode(posAtr);
            sleep(10);
        } else {
            break;
        }
    }
}
