const startWordBtn = document.querySelector("#startWrd")
const searchWordBtn = document.querySelector("#searchWrd")
const sortBtn = document.querySelector("#sortBtn")
const inputBox = document.querySelector('#countryName')
const countryCont = document.querySelector('.country-container')
let arr
let sortDir = true


const info = document.querySelector('#info span')
info.innerHTML = countries.length

function getCountries(countries, delimeter) {
    return countries.filter((country) => country.startsWith(delimeter));
}

function getCountriesContainsChar(countries, delimeter) {
    return countries.filter(country => country.includes(delimeter))
}

startWordBtn.addEventListener('click', () => {
    inputBox.addEventListener('input', () => {
        countryCont.innerHTML = ''
        let array = getCountries(countries, inputBox.value)
        if (inputBox.value === '' || array.length < 1) {
            array = []
            result.innerHTML = `No Search Results found for ${inputBox.value}`
        }
        arr = array
        result.style.color = "white"
        for (const country of array) {
            result.innerHTML = `Here ${array.length} Countries Starting from ${inputBox.value}`
            if (array.length === 0) {
                countryCont.innerHTML = ''
            }
            countryCont.innerHTML += `<div class="clr-wrapper">
			<div class="country-card">
				<h1>${country}</h1>
			</div>
		</div>`
        }
    })
})
searchWordBtn.addEventListener('click', () => {
    inputBox.addEventListener('input', () => {
        countryCont.innerHTML = ''
        let array = getCountriesContainsChar(countries, inputBox.value)
        arr = array
        if (inputBox.value === '' || array.length < 1) {
            array = []
            result.innerHTML = `No Search Results found for ${inputBox.value}`
        }
        result.style.color = "white"
        for (const country of array) {
            result.innerHTML = `Here ${array.length} Countries Starting from ${inputBox.value}`
            if (array.length === 0) {
                countryCont.innerHTML = ''
            }
            countryCont.innerHTML += `<div class="clr-wrapper">
			<div class="country-card">
				<h1>${country}</h1>
			</div>
		</div>`
        }
    })
})
sortBtn.addEventListener('click', () => {
    countryCont.innerHTML = ''
    if (sortDir) {
        sortDir = false
        sortBtn.textContent = " ⬆ z-a "
        arr = arr.sort().reverse()
        for (const country of arr) {
            if (arr.length === 0) {
                countryCont.innerHTML = ''
            }
            countryCont.innerHTML += `<div class="clr-wrapper">
			<div class="country-card">
				<h1>${country}</h1>
			</div>
		</div>`
        }
    } else {
        sortDir = true
        sortBtn.textContent = " ⬇ a-z "
        arr = arr.sort()
        for (const country of arr) {
            if (arr.length === 0) {
                countryCont.innerHTML = ''
            }
            countryCont.innerHTML += `<div class="clr-wrapper">
			<div class="country-card">
				<h1>${country}</h1>
			</div>
		</div>`
        }
    }
})
