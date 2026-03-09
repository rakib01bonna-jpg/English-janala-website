const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/level/5") //promise of respnsive
    .then(res => res.json()) // prmise of json date
    .then((json) => displayLessons.log(json));
};

const displayLessons = (Lessons) => {
    //1. get the conteiner & empty
         const LevelConteiner = document.getElementById("level-conteiner");
         LevelConteiner.innerHTML = "";
    //.2. get info every lessons
    for (let lesson of Lessons) {
        //3. create Element
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
         <button onclick ="loadLEvelWord&({lesson.Level_no})" class="btn btn-outline btn-primey"> 
            <i class="fa-solid fa-circle-question"></i>
            lesson-${lesson.Level_no}</button>

        `
          //4. append into conteiner
       LevelConteiner.append(btnDiv);
    }
   
};

 loadLessons();

 console.log("all");
