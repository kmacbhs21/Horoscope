var signs = ["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Libra","Scorpio","Sagittarius","Virgo", "N/A","Happy Birthday"];
var messages = [" You are ambitious, organized, practical, goal-oriented, and they don't mind the hustle",
    "Every Aquarian is a rebel at heart, Free-spirited and eccentric.",
    "Everyone loves having a Pisces pal because it's like having your own personal therapist. ",
    "Your zodiac sign is “the ram,” you're creative, fiery, independent and stylish.",
    "The Earth sign collective are practical, stoic, determined, ambitious and materialistic.",
    "Geminis are the liveliest of the Air sign gang - versatile, youthful, curious and fun.",
    "Cancer is ruled by the moon, the celestial body that represents comfort, self-care, and maternal energies.",
    "They're delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.",
    "Libra's are highly intuitive, although they often ignore their own inner voice and must live with the regrets of such actions.",
    "Scorpio is a water sign that derives its strength from the psychic, emotional realm.",
    "Sagittarians are born to explore, and it is critical that these archers have the freedom to roam.",
    "Virgos are logical, practical, and systematic in their approach to life.","That is a false date","OMG its B-Day"];
var images = ["Img/capricorn.jpeg","Img/aquarius.jpeg","Img/pisces.jpeg","Img/aries.jpeg","Img/taurus.jpeg","Img/gemini.jpeg","Img/cancer.jpeg","Img/leo.jpeg","Img/libra.jpeg","Img/scorpio.jpeg","Img/sagittarius.jpeg","Img/virgo.jpeg","Img/erorr.png"];
function go() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("Username").value;
    var signNum = determineSign(month,day);
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    if((day == currentDay) && (month == currentMonth)){
        document.getElementById("sign").innerHTML = signs[13];
        document.getElementById("sign1").innerHTML = messages[13] + "Oh, and you are a " + signs[signNum];
        document.getElementById("sign2").src = images[signNum];
        document.getElementById("signN").innerHTML = "Hey " + name;
        return;
    }
    //write to page: signs[signNum]
    document.getElementById("sign").innerHTML = signs[signNum];
    document.getElementById("sign1").innerHTML = messages[signNum];
    document.getElementById("sign2").src = images[signNum];
    document.getElementById("signN").innerHTML = "Hey " + name + " you are a"
}

function determineSign(month,day) {

    if(month == 3 && day >=21 && day<=31 || month == 4 && day >= 1 && day  <= 19  ){
        return 3;
    }
    if(month == 4 && day >=20 && day<=30 || month == 5 && day >= 1 && day <= 20  ){
        return 4;
    }
    if(month == 5 && day >=21 && day<=31 || month == 6 && day >= 1 && day <= 20  ){
        return 5;
    }
    if(month == 6 && day >=21 && day<=30 || month == 7 && day >= 1 && day <= 22  ){
        return 6;
    }
    if(month == 7 && day >=23 && day<=31 || month == 8 && day >= 1 && day <= 22  ){
        return 7;
    }
    if(month == 8 && day >=23 && day<=31 || month == 9 && day >= 1 && day <= 22  ){
        return 11;
    }
    if(month == 9 && day >=23 && day<=30 || month == 10 && day >= 1 && day <= 22  ){
        return 8;
    }
    if(month == 10 && day >=23 && day<=30 || month == 11 && day >= 1 && day <= 21 ){
        return 9;
    }
    if(month == 11 && day >=22 && day<=30 || month == 12 && day >= 1 && day <= 21 ){
        return 10;
    }
    if(month == 12 && day >=22 && day<=31 || month == 1 && day >= 1 && day <= 19  ){
        return 0;
    }
    if(month == 1 && day >=20 && day<=31 || month == 2  && day >= 1 && day <= 18  ){
        return 1
    }
    if(month == 2 && day >=21 && day<=28 || month == 3 && day >= 1 && day <= 19  ){
        return 2;
    }
    if(month == 2 && day >28 || month ==4 && day >30 || month ==6 && day >30 || month ==9 && day>30 || month ==10 && day>30 || month ==11 && day>30){
        return 12;
    }
}



