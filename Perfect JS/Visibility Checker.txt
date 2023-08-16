function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return !1;
    if (style.visibility !== 'visible') return !1;
    if (style.opacity < 0.1) return !1;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 0) {
        return !1
    }
    const elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return !1;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return !1;
    if (elemCenter.y < 0) return !1;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return !1;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return !0
    } while (pointContainer = pointContainer.parentNode);
    return !1
}