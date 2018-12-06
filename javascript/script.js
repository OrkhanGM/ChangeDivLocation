$(document).ready(function () {


    // RUN DIV WITH BUTTON CONTROLLER    
    // ----------------------------------------------------------- RUN RIGHT    
    $("#right").click(function () {
        var snakePos = $(".snake").position();
        $(".snake").css("left", snakePos.left + 10);
        if (snakePos.left + 70 > window.innerWidth) {
            $(".snake").css("left", "0px");
        }
    });

    // ----------------------------------------------------------- RUN LEFT
    $("#left").click(function (e) {
        var snakePos = $(".snake").position();
        $(".snake").css("left", snakePos.left - 10);
        if (snakePos.left < 20) {
            $(".snake").css("left", window.innerWidth - 65);
        }
    });

    // ----------------------------------------------------------- RUN UP    
    $("#top").click(function () {
        var snakePos = $(".snake").position();
        $(".snake").css("top", snakePos.top - 10);
        if (snakePos.top < 10) {
            $(".snake").css("top", window.innerHeight - 65);
        }
    });

    // ----------------------------------------------------------- RUN DOWN    
    $("#bottom").click(function () {
        var snakePos = $(".snake").position();
        $(".snake").css("top", snakePos.top + 10);
        if (snakePos.top > window.innerHeight - 62) {
            $(".snake").css("top", "0px");
        }
    });


    // RUN DIV WITH KEY CONTROLLER
    $(document).on('keydown', function (e) {
        // ----------------------------------------------------------- RUN LEFT
        if (e.keyCode == 37) // left
        {
            var snakePos = $(".snake").position();
            $(".snake").css("left", snakePos.left - 10);
            if (snakePos.left < 20) {
                $(".snake").css("left", window.innerWidth - 65);
            }
        }

        // ----------------------------------------------------------- RUN RIGHT    
        else if (e.keyCode == 39) // right
        {
            var snakePos = $(".snake").position();
            $(".snake").css("left", snakePos.left + 10);
            if (snakePos.left + 70 > window.innerWidth) {
                $(".snake").css("left", "0px");
            }
        }

        // ----------------------------------------------------------- RUN DOWN     
        else if (e.keyCode == 40)// down
        {
            var snakePos = $(".snake").position();
            $(".snake").css("top", snakePos.top + 10);
            if (snakePos.top > window.innerHeight - 62) {
                $(".snake").css("top", "0px");
            }
        }

        // ----------------------------------------------------------- RUN UP   
        else if (e.keyCode == 38)// up
        {
            var snakePos = $(".snake").position();
            $(".snake").css("top", snakePos.top - 10);
            if (snakePos.top < 10) {
                $(".snake").css("top", window.innerHeight - 65);
            }
        }
        else { }
    });
});