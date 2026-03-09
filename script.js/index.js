const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/level/5") //promise of respnsive
    .then(res => res.json()) // prmise of json date
    .then((json) => displayLesson.log(json));
};

const  loadLevelWord = (id) => {
   console.log(id);
   const url = 'https://openapi.programming-hero.com/api/level/${id}';
   console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(date => displayLevelWord.log(data.data));

};

const displayLevelWord = (Words) => {
    const wordContainer = document.getElementById("word-container");
    // wordContainer.innerHTML = "";

    

    words.forEach((words) =>{
        console.log(words)
        const card = document.createElement("div");
        card.innerHTML = `
       
        <div class="bg-white-100 rounded-xl shadow-sm text-center py-10 px-5">
      <h2 class="font-bold text-2xl">Eager</h2>
      <p class="font-semibold">Mening /pronounciton</p>
      <div class="text-2xl font-medium font-bangla">অগ্রোহি </div>
      <div class="flex justify-between item-center">
     
        <button class="btn bg-[#1A91FF10] hover:bg-[1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1A91FF10]"><i class="fa-solid fa-volume-high"></i></button>

      </div>
    </div>



        `;

    wordContainer.append(card);
    
    });
    
    
};
 

const displayLesson = (Lessons) => {
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
