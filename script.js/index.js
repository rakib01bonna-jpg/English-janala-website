const loadLessons = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((json) => console.log(json));
};


const displayLessons = (Lessons) => {
    // console.log(Lessons);


    //1. get the conteiner & empty
    const LevelConteiner = document.getElementById("level-conteiner");
    LevelConteiner.innerHTML = "";
    
    //2. get into every lessson
    for(let lesson of lesson) {
      //3. crate Elment
         const btnDiv = document.createElement("div");
         btnDiv.document.createElement("div");
         btnDiv.innerHTML = `

        <button ">
             <i class="fa-solid fa-arrow-right-from-bracket"></i>FAG</=>

            
         `

         // 4. append into container
         LevelConteiner.append(btnDiv);
    }
    
    
};
loadLessons();