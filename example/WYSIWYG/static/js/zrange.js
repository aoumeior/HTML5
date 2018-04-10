function zrange (e){
  this.edit = e
  this.currentRange = null
}

// 在按按钮之前都需要保存好选区，完成操作后回恢复选区
zrange.prototype = {
	constructor:Person,
	getCurrentRange: function () {
  	this.currentRange = Selection.getRangeAt(0)
  },
  setCurrentRange: function (R) {
  	this.currentRange = R
  	const selection = window.getSelection()
		selection.removeAllRanges()
		selection.addRange(this.currentRange)
  },
  recoverCurrentRange: function () {
  	const selection = window.getSelection()
		selection.removeAllRanges()
		selection.addRange(this.currentRange)
  },
  setRangeByElem: function ($elem, toStart, isContent) {
		// $elem - 经过封装的 elem
		// toStart - true 开始位置，false 结束位置
		// isContent - 是否选中Elem的内容
    if (!$elem.length) {
        return;
    }

    var elem = $elem[0];
    var range = document.createRange()

    if (isContent) {
        range.selectNodeContents(elem)
    } else {
        range.selectNode(elem);
    }

    if (typeof toStart === 'boolean') {
        range.collapse(toStart)
    }
    this.setCurrentRange(range)
  },
  isContent: function () {
  	
  	return true
  }

}

Object.freeze(zrange)