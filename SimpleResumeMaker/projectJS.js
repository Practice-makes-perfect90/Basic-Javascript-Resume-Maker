



function resumeWindow()
{
    // string values of inputs

    var myEmail = document.getElementById("email").value;
    var isEmailGood = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var fullName = document.getElementById("myName").value;
    var address  = document.getElementById("myAddress").value;
    var phoNum = document.getElementById("phoneNumber").value;
    var perinfo = document.getElementById("personinfo").value;
    var careerObj= document.getElementById("careerObj").value;
    var education = document.getElementById("education").value;

    // time when started employment
    var hire1 = document.getElementById("workDateHire1").value;
    var hire2 = document.getElementById("workDateHire2").value;
    var hire3 = document.getElementById("workDateHire3").value;
    
    // time when left employment 
    var quit1 = document.getElementById("workDateQuit1").value;
    var quit2 = document.getElementById("workDateQuit2").value;
    var quit3 = document.getElementById("workDateQuit3").value;

    // work history in detail 
    var workHis1 = document.getElementById("work1").value;
    var workHis2 = document.getElementById("work2").value;
    var workHis3 = document.getElementById("work3").value;

    var reference = document.getElementById("reference").value;

   
// maybe put the variables in between <p> tags so you can only use one div
    var myResText = ( "<html><head><title>Resume</title> </head> <body> "+ fullName + "</br>" + address + "/" + phoNum + "<hr>"+ "</br>" 
    + "<div style = 'width:200px;float:left;font-family:monospace;word-wrap:break-word;'><p> CAREER OBJECTIVES </p> </br> <p> PERSONAL DATA </p> </br> <p> EDUCATION </p> </br> <p> EMPLOYMENT EXPERIENCE</p> " 
    + "</br>" + "<p>" + hire1 + " - " + quit1 +  "</p></br>" + "<p>"  + hire2 + " - "  + quit2 + "</p></br>" +  "<p>" + hire3 + " - " + quit3 +"</p></br>" +
    "<p> REFERENCES </P></br>" +
    
    "</div>" + 
     
     "<div style = 'width:1000px;padding-right:100px;word-wrap:break-word;float:right;font-family:monospace;'><p>" + careerObj + "</p></br>" + "<p>" + perinfo + "/<p></br>" + "<p>" + education + "</p></br></br></br>" + "<p>" +" "
      + "</p></br>"+ "<p>" + workHis1 + "/<p></br>" + "<p>" + workHis2 +"</p></br>" +  "<p>" + workHis3 + "</p></br>"+ "<p>" + reference + "<p></br>" + "</div>"
     


   
    + "</body></html>");
    
    // email validation
    if (isEmailGood.test(myEmail)== false){
        alert("Enter a proper email address all email addresses have a @ symbol in them")
    }
    else if (isEmailGood.test(myEmail)== true) {

    
    
    var myResumeWindowb = window.open('width=400,height=200,left=200,top=200');
    myResumeWindowb.document.write(myResText);

    }


}

document.write("<h1 style = 'color:red;font-family:Tahoma;text-align:center;'>Joseph Lopez</h1></br>");
document.write("<h2 style = 'color:red;font-family:Garamond;text-align:center;font-style:italic;'>WEB 115</h2>");

// Enter here the code to get name and class name WEB115 to the first page 
// I am thinking it will use the DOM 
// if this does not work put in the top of the page instead. 