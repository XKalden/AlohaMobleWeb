
(function($){
    $(document).ready(function(){
        // flickity (aka. Slide bar)
        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true
        });
        
        // Email Sumbit 
        $('#submitButton').on('click',(event)=>{
            event.preventDefault();
            let inputEmail = $('input[type="email"]').val();

            // function to test email validity
            function emailChecker(email){
                const regualExpress = /\w+@\w+\.(net|com|org|es)/;
                return regualExpress.test(email);
             }

            let email = emailChecker(inputEmail);
            console.log(inputEmail);
            console.log(email);
            if (email) {
            alert("Thanks for subscribing!!");
            } else {
            alert("Please include an '@' in the email address");
            }
        });

        // smoothe scrolling
        $(function() {
        $('a[href*="#"]').on('click', function (event) {
            event.preventDefault();
            let target = $(this.hash);
            $('html, body').animate({                
                scrollTop: target.offset().top
                    }, 1200);
                    return false;                                                         
            });
        });
    });
})(jQuery);

// animation
var totalClick = 0;
function onClick() {
    totalClick += 1;
    document.getElementById("spanCart").innerHTML = totalClick;
};








// Checks for valid characters

