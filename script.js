
document.getElementById('main-form').addEventListener('submit', function(event){
    event.preventDefault();
    let question = ["question_one", "question_two", "question_three", "question_four","question_five", "question_six", "question_seven", "question_eight"];
    let sum = 0;

    questions.forEach(question => {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected){
            sum += parseInt(this.selected.value);
        }

    });

    const average = sum / 8 ;

    console.log("Average Rating:", average);

    
});


