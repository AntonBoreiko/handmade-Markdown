
export class Mark {
  constructor() {
    this.textElement = document.querySelector('#textArea')

    this.buttonElement = document.querySelector('#btn')
    this.divElement = document.querySelector('#card')

    this._init()
  }

  _init() {
    this.buttonElement.addEventListener('click', this._handleClickButton.bind(this))
  }

  _createText(element) {
    const text = element.value
    const newText = text
      .replace(/^# (.+)$/gim, '<h1>$1</h1>')
      .replace(/^#{2,2} (.+)$/gim, '<h2>$1</h2>')
      .replace(/^#{3,3} (.+)$/gim, '<h3>$1</h3>')
      .replace(/^#{4,4} (.+)$/gim, '<h4>$1</h4>')
      .replace(/^#{5,5} (.+)$/gim, '<h5>$1</h5>')
      .replace(/^#{6,6} (.+)$/gim, '<h6>$1</h6>')
      // # заголовки
      .replace(/^>{1,4} (.+)$/gim, '<div>> $1</div>')
      // >  text блочные цитаты
      .replace(/\ {3,3}/gim, '<br>')
      // 3 пробела перенос строки
      .replace(/!\[[^\[\]]*?\]\(.*?\)/gim, '<img src="$2" alt="$1">')
      // картинки [img alt](https://goo.gl/pEbAzK)


      .replace(/(^(\*|\+|-) .*$)+/gim, '<li>$1</li>')
      // * text ненумероманный список

      .replace(/(^\d{1,3}\. .*$)+/gim, '<li>$1</li>')
      // 1. text нумероманный список

      .replace(/\*\*(.+)\*\*/gim, '<strong>$1</strong>')
      // **text** жирный
      .replace(/\~\~(.+)\~\~/gim, '<strike>$1</strike>')
      // ~~text~~  зачерктнутый
      .replace(/\[(.+)\]\((.+)\)/gim, ' <a href="$2" target="_blank" rel="noopener">$1</a>')
      // [google](https://www.google.com\)  ссылка
      .replace(/^\-{2}/gim, '<hr>')
      // -- hr
      .replace(/\[\+\+(.+)\+\+\]/gim, '<span class="text-success">$1</span>')
      // [++text++] выделение зеленым цветом
      .replace(/\[\-\-(.+)\-\-]/gim, '<span class="text-danger">$1</span>')
    // [--text--] выделение красным цветом
    this.divElement.innerHTML = newText
  }

  _handleClickButton(event) {
    this._createText(this.textElement)
  }
}
