$(document).ready(function () {
    // $("#form").submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "script/send.php",
    //         data: $("#form").serialize(),
    //         success: function (data) {
    //             $("#wdh_result_form").html(data);
    //         }
    //     });
    // });
    $("#form").submit(function(e) {
        e.preventDefault() //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: 'POST', //Метод отправки
            url: 'script/send.php', //путь до php фаила отправителя
            data: form_data,
            success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                alert('все ок'); // пoкaжeм eё тeкст
            }
        });
    });
});

