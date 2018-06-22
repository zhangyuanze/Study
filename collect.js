    // 获取class
    function getClass(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp("(^| )" + sClass + "( |$)");
        var aElem = (oParent || document).getElementsByTagName("*");
        for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass
    }
    // class是否存在
    function hasClass(obj, sClass) {
        var reg = new RegExp("(^|\\s)" + sClass + "(\\s|$)");
        return reg.test(obj.className)
    }
    // 添加class
    function addClass(obj, sClass) {
        hasClass(obj, sClass) || (obj.className += " " + sClass)
    }
    // 删除class
    function removeClass(obj, sClass) {
        if (hasClass(obj, sClass)) {
            var reg = new RegExp("(^|\\s)" + sClass + "(\\s|$)");
            obj.className = obj.className.replace(reg, "");
        }
    }
    // 上一个元素
    function prevElement(obj) {
        return obj.previousSibling || obj.previousElementSibling || null
    }
    // 下一个元素
    function nextElement(obj) {
        return obj.nextSibling || obj.nextElementSibling || null
    }