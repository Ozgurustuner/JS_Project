
const createAutoComplete = (
    { root,
        renderOptinon,
        onOptionSelect,
        inputValue
    }

) => {
    const dataGetir = async (searhTerm) => {
        const response = await axios.get("http://www.omdbapi.com/",
            {
                params: {
                    apikey: "7cde167a",
                    s: searhTerm
                }
            });
        return response.data.Search;
    }





    //const root = document.querySelector('.autocomplete')
    root.innerHTML = `
     <label> <b> Film aramak için yazınız </b> </label>
     <input class='input'>
     <div class = "dropdown">
     <div class="dropdown-menu">
     <div class= "dropdown-content results">
     
     </div>
     </div>
     </div>
     
     `
    const input = root.querySelector('.input')
    const dropdown = root.querySelector('.dropdown')
    const resultsWrapper = root.querySelector('.results')
    let timeoutID;
    const onInputChange = event => {

        if (timeoutID) {
            clearTimeout(timeoutID)
        }

        timeoutID = setTimeout(async () => {
            const items = await dataGetir(event.target.value)
            console.log(items);
            resultsWrapper.innerHTML = "";
            dropdown.classList.add('is-active')
            for (const item of items) {
                //const div = document.createElement('div')
                const option = document.createElement('a');
                option.classList.add('dropdown-item');
                option.innerHTML = renderOptinon(item)
                option.addEventListener('click', () => {
                    input.value = inputValue(item)
                    dropdown.classList.remove('is-active')
                    // Film detaylı özelliklerini getirelim
                    onOptionSelect(item)
                })
                resultsWrapper.appendChild(option)
                //document.querySelector('#target').appendChild(div)
            }



        }, 1000);
        console.log(timeoutID);
    }

    input.addEventListener('input', onInputChange)


    // Dropdown dışına tıkladığımızda ilgili alanın kaptılması 

    document.addEventListener('click', event => {
        if (!root.contains(event.target)) {
            console.log(event.target);
            dropdown.classList.remove('is-active')
        }
    })
}