// Показывает скрытое, скрывает видимое
function flipflop(id) {

	// id -- идентификатор элемента, который надо скрыть или показать

	// получаем этот элемент
	element = document.getElementById(id);

	// если таковой в документе существует
	if (element)
		// меняем ему видимость
		element.style.display = element.style.display == "none" ? "block" : "none";
}
// Smoth scroll and page up
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

