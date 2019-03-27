$(function () {
    getRandomUser();
}); // ready

// En funtkion som hämtar en random user från https://randomuser.me/api/
function getRandomUser(){
    $.ajax({
        url: "https://randomuser.me/api/", 
        dataType: "json",
        success: function (data){
            showUser(data.results[0]);
        }
    });
}

// En funtkion som visar en user i en Bootstrap-Card

function showUser(user){
    console.log(user);
    $('.card-img-top').attr('src', user.picture.large);
    $('.card-title').text(user.name.first + ' ' + user.name.last);
    $('.card-text').html(`Age: ${user.dob.age} <br> 
        City: ${user.location.city} `);
    $('#contact').attr('href', 'mailto:' + user.email);
    
    $('.card-body').css('text-transform', 'capitalize');
    $('.card').fadeIn(1000);
}

$('#get-user').on('click', 'a', function(e){ 
    e.preventDefault();
})
