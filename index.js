function introduction(string){
    return "Hi, my name is " + string + ".";
}

function introductionWithLanguage(name, language){
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}

function introductionWithLanguageOptional(name, language){
    if(language === "Python"){
        return "Hi, my name is " + name + " and I am learning to program in Python.";
    }
    return "Hi, my name is " + name + " and I am learning to program in JavaScript.";
}