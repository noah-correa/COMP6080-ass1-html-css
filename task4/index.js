// Get elements
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const dob = document.getElementById("dob");
const animal = document.getElementById("animal");
const sydneyBox = document.getElementById("sydney");
const melbourneBox = document.getElementById("melbourne");
const adelaideBox = document.getElementById("adelaide");
const removeButton = document.getElementById("remove");
const output = document.getElementById("output");

const cities = [sydneyBox, melbourneBox, adelaideBox];

// Render function
const render = () => {
    // Reformat age
    let newDob = undefined;
    if (dob.value) {
        const [day, month, year] = dob.value.split("/");
        newDob = [month, day, year].join("/");
    }
    const test = '28/02/2000';
    console.log(typeof test);
    console.log(typeof newDob);
    console.log(Date.parse());

    if (firstName.value < 3 || firstName.value > 50) {
        output.value = "Please input a valid firstname";
    } else if (lastName.value < 3 || lastName.value > 50) {
        output.value = "Please input a valid lastname";
    } else if (!(/[0-9]{2}[/][0-9]{2}[/][0-9]{4}/.test(newDob)) || isNaN(Date.parse(newDob))) {
        output.value = "Please input a valid date of birth";
    } else {


        // Calculate age
        const diffMS = new Date(Date.now() - new Date(newDob).getTime());
        const age = Math.abs(diffMS.getUTCFullYear() - 1970);
        
        // Get selected animal
        console.log(animal.options);
        const selectedAnimal = animal.options[animal.selectedIndex].value;
        
        // Get selected cities
        const checkedCities = cities.filter((city) => { return city.checked });
        const checkedCityStrings = checkedCities.map((city) => { return city.value });
        
        // Form city string
        let citiesString = "no cities";
        if (checkedCityStrings.length === 1) {
            citiesString = checkedCityStrings[0];
        } else if (checkedCityStrings.length > 1) {
            citiesString = checkedCityStrings.join(", ");
        }
        
        output.value = `Hello ${firstName.value} ${lastName.value}, you are ${age} years old, your favourite animal is ${selectedAnimal} and you've lived in ${citiesString}.`;
    }
};

// Name and DOB blur listener
firstName.addEventListener('blur', render);
lastName.addEventListener('blur', render);
dob.addEventListener('blur', render);

// Animal changed listener
animal.addEventListener('change', render);

// Cities changed listener
sydneyBox.addEventListener('change', render);
melbourneBox.addEventListener('change', render);
adelaideBox.addEventListener('change', render);

// Remove Button listener
removeButton.addEventListener('click', () => {
    firstName.value = "";
    lastName.value = "";
    dob.value = "";
    animal.selectedIndex = 0;
    cities.forEach((city) => { city.checked = false })
    output.value = "";
});