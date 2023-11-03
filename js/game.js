$(document).ready(function() {
    $(".letter").draggable({
        revert: "invalid"
    });
    $(".letter-slot").droppable({
        accept: ".letter",
        drop: function(event, ui) {
            var letter = ui.helper.data("letter");
            var slotLetter = $(this).data("letter");
            if (letter === slotLetter) {
                ui.helper.draggable("disable");
                $(this).droppable("disable");
                ui.helper.position({ of: $(this), my: "left top", at: "left top" });
            }
        }
    });
});

// После проверки, добавьте следующий код в ваш JavaScript: