Modal.prototype.setScrollbar = function () {
  // var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10) ★コメントアウトする
  this.originalBodyPad = document.body.style.paddingRight || ''
  // if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)　★コメントアウトする
}