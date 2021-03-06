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

    //gender
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

    //compliment
     
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

    var positiveString = positives.join(" and ");
    if (positiveString !== "") {
        if (positives.length > 1) {
        compliment = "I liked " + possPronoun + " " + positiveString + ". These are important for success.";
        } else if (positiveString.length === 1){
            compliment = "I liked " + possPronoun + " " + positiveString + ". This is important for success.";
        }
    }

    //criticism

    if (focus.checked){
        negatives.push("focusing")
    }
    if (respect.checked){
        negatives.push("showing respect to the teacher")
    }
    if (followDirections.checked){
        negatives.push("following directions")
    }
    let negativeString = negatives.join(" and ")
    if (negatives.length > 0) {
        criticism = "We are working on " + negativeString + " so that " + sname + " can benefit from the lessons as much as possible."
    } else {
        criticism = "";
    }

    
    // vocab
    var vocabMessage = "";
    var vocab = document.getElementById('vocab').value;
    
    if (vocab !== "") {
        vocabMessage = sname + " should review " + vocab.toLowerCase() + " so that " + subjectPronoun.toLowerCase() + ' remembers in the next lesson!';
    } 

    // see again
    var seeAgainMessage = "";
    var seeAgain = document.getElementById("see-again");
    if (seeAgain.checked) {
        seeAgainMessage ="I hope to see " + objectPronoun + " in class again soon! "
    };

    // review
    var reviewMessage = "";
    var review = document.getElementById("review");
    if (review.checked) {
        reviewMessage =" and for the kind review";
    };

//topic
    
    if(topic !== "") {
        topicSentence = ' We learned about ' + topic.toLowerCase() + ' in class today.';
    } else {
        topicSentence = "";

//OUTPUT
    }
    if (tname === "" || sname === "") {
        output.innerHTML = "Names?";
    } else {
    output.innerHTML = 'It was great seeing ' + sname + ' today! ' + subjectPronoun + ' did well. ' + topicSentence + ' ' + vocabMessage + ' ' + criticism + ' ' + compliment + ' ' + sname + '\'s good work earned ' + objectPronoun + ' 5 stars. ' +  seeAgainMessage + 'Thank you very much for booking' + reviewMessage + ', and have a great day! Best, Teacher ' + tname;
    }     
}


document.getElementById('submit').addEventListener('click', composeMessage);