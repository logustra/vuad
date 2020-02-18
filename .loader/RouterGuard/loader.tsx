export default class Loader {
  private LOADING_COLOR: string
  private CONTAINER = document.getElementById('loader')
  private time = 0
  private opacity = 0
  private count

  public constructor (color: string) {
    this.LOADING_COLOR = color
  }

  public render () {
    if (this.CONTAINER) this.CONTAINER
      .setAttribute(
        'style',
        `
          transition: opacity 0.28s;
          opacity: ${this.opacity};
          position: fixed;
          top: 0;
          left: 0;
          width: ${this.time}%;
          height: 0.125rem;
          background-color: ${this.LOADING_COLOR};
          z-index: 3000
        `
      )
  }

  public clear () {
    clearInterval(this.count)

    this.opacity = 0

    setTimeout(() => {
      this.time = 0
      this.render()
    }, 500)
  }

  public start () {
    this.time = 0
    this.opacity = 1

    this.count = setInterval(() => {
      this.time += 1

      if (this.time < 80) {
        this.render()
      } else {
        setTimeout(() => {
          this.clear()
        }, 3000)
      }
    }, 100)
  }

  public stop () {
    this.time = 100

    this.render()

    setTimeout(() => {
      this.clear()
    }, 20)
  }
}
