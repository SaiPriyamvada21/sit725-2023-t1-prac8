const cardList = [{
    title: 'Melbourne',
    path: 'images/melbourne.jpg',
    subTitle: 'About Melbourne',
    description: 'Description of Melbourne'
},
{
    title: 'Queensland',
    path: 'images/queensland.jpg',
    subTitle: 'About Queensland',
    description: 'Description of Queensland '
},
{
    title: 'Adelaide',
    path: 'images/adelaide image.jpg',
    subTitle: 'About Adelaide',
    description: 'Description of Adelaide'
}];


const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `<div class="col s4 center-align">
            <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator card-image img" src="${item.path}">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">${item.subTitle}</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;
        $("#card-section").append(itemToAppend);
    });
};


const formSumitted = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log(formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    addCards(cardList);
    $('.modal').modal();
});
