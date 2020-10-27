function composeMessage(){
    event.preventDefault();
    var tname =document.getElementById('tname').value;
    var sname = document.getElementById('sname').value;
    var topic = document.getElementById('topic').value;
    var topicSentence;
    var gender = document.getElementsByName('gender');
    var genderValue;
    var subjectPronoun;
    var objectPronoun;
    var possPronoun;
    var compliment = "";
    var criticism = "";
    var positives = [];
    var negatives = [];
    var enthusiasm = document.getElementById('enthusiasm');
    var grammar = document.getElementById('grammar');
    var reading = document.getElementById('reading');
    var workEthic = document.getElementById('work-ethic');
    var output = document.getElementById('output');
    var focus = document.getElementById('focus');
    var respect = document.getElementById('respect');
    var followDirections = document.getElementById('followdirections');
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            } 
        }
    if (genderValue == "female") {
        subjectPronoun = "She";
            objectPronoun = "her";
            possPronoun = "her";
            
            
    } else if (genderValue == "male") {
        
        subjectPronoun = "He";
        objectPronoun = "him";
        possPronoun = "his";
            
    }
        else if (genderValue =="other") {
            subjectPronoun = "They";
            objectPronoun = "them";
            possPronoun ="their";
            
        }
        else { 
            subjectPronoun = "They";
            objectPronoun = "them";
            possPronoun ="their";
            
    }
     
    if (enthusiasm.checked) {
        positives.push("enthusiasm");
    }
    if (grammar.checked) {
        positives.push("attention to grammar");
    }
    if (reading.checked) {
        positives.push("reading");
    }
    if (workEthic.checked) {
        positives.push("work-ethic");
    }

    if (focus.checked){
        negatives.push("focusing")
    }
    if (respect.checked){
        negatives.push("respecting the teacher")
    }
    if (followDirections.checked){
        negatives.push("followingDirections")
    }
    let negativeString = negatives.join(" and ")
    if (negatives.length > 0) {
        criticism = "We are working on " + negativeString + "."
    } else {
        criticism = "";
    }

    var positiveString = positives.join(" and ");
    // vocab
    var vocabMessage;
    var vocab = document.getElementById('vocab').value;
    
    if (vocab !== null) {
        vocabMessage = sname + " should review " + vocab + ". ";
    } else {
        vocabMessage = "";
    }

    // see again
    var seeAgainMessage = "";
    var seeAgain = document.getElementById("see-again");
    if (seeAgain.checked) {
        seeAgainMessage ="I hope to see " + sname + " in class again soon! "
    };

    // review
    var reviewMessage = "";
    var review = document.getElementById("review");
    if (review.checked) {
        reviewMessage =" and for the kind review "
    };


    
    if(topic !== null) {
        topicSentence = ' We learned about ' + topic + ' in class today.';
    } else {
        topicSentence = "";
    }
    output.innerHTML = 'It was great seeing ' + sname + ' today! ' + subjectPronoun + ' did well. ' + topicSentence + ' ' + vocabMessage + criticism + ' I liked ' + possPronoun + ' ' + positiveString + ' in class today. ' + seeAgainMessage + 'Thank you very much for booking' + reviewMessage + ', and have a great day! Best, ' + tname;
}

document.getElementById('submit').addEventListener('click', composeMessage);