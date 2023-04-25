const initQuickSearch = () => {

  const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

  const selectors = {
    root: '[data-js-quick-search]',
    toggleMenuButton: '[data-js-quick-search-toggle-menu-button]',
    menu: '[data-js-quick-search-menu]',
    form: '[data-js-quick-search-form]',
    input: '[data-js-quick-search-input]',
    result: '[data-js-quick-search-result]',
  }

  const stateClasses = {
    isActive: 'is-active',
    isVisible: 'is-visible',
  }

  const rootNode = document.querySelector(selectors.root)
  if (!rootNode) return

  const toggleMenuButtonNode = rootNode.querySelector(selectors.toggleMenuButton)
  const menuNode = rootNode.querySelector(selectors.menu)
  const formNode = rootNode.querySelector(selectors.form)
  const inputNode = rootNode.querySelector(selectors.input)
  const resultNode = rootNode.querySelector(selectors.result)

  const manageResult = (items = []) => {
    const hasItems = items.length > 0

    resultNode.classList.toggle(stateClasses.isVisible, hasItems)
    resultNode.innerHTML = ''

    if (hasItems) {
      const itemsMarkup = items.map(({ label, href }) => `
        <li class="quick-search__result-item">
          <a class="quick-search__result-link" href="${href}">
            ${label}
          </a>
        </li>
      `).join('')

      const markup = `<ul class="quick-search__result-list">${itemsMarkup}</ul>`

      resultNode.innerHTML = markup
    }
  }

  toggleMenuButtonNode.addEventListener('click', () => {
    toggleMenuButtonNode.classList.toggle(stateClasses.isActive)
    menuNode.classList.toggle(stateClasses.isVisible)
  })

  formNode.addEventListener('submit', (event) => {
    event.preventDefault()
  })

  inputNode.addEventListener('input', ({ target }) => {
    const { value } = target
    const cleanValue = value.trim()
    const urlFormatted = `${BASE_URL}&query=${cleanValue}`

    fetch(urlFormatted).then((response) => {
      console.log(response)
      manageResult(response.items)
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initQuickSearch()
})