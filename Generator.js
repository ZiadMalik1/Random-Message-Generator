

function createMessage () {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

 switch (Math.floor((Math.random() * 10) + 1)) {

    case 1: 
    return "Lebron James Is the Greatest Basketball Player Of All Time";
    break;

    case 2: 
    return "Tomatoes Are Considered A Fruit";
    break;

    case 3: 
    return `Todays Date is ${today}`;
    break;

    case 4: 
    return "This Site was Writtin in HTML and JavaScript";
    break;

    case 5:
        return "Styled in CSS";
        break;

    case 6:
        return "Site is Under Construction Being writting in React.JS";    
        break;

    case 7:
        return "Author of the Site is Ziad Malik";
        break;
    
    case 8:
        return "Inspired by CodeAcademy";
        break;
    
    case 9:
        return "Version Control By GitHub";
        break;

    default:
        return "What's Up";
}
}

function newQuote () {

    document.getElementById('quoteDisplay').innerHTML = createMessage();

}