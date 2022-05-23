$(document).ready(function () {
    $('#sub').validate({
        rules: {
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10
            }
        }
    })
})