// =========================
// CAREER ROADMAP VISUALIZER
// =========================

const checkboxes =
document.querySelectorAll(".skill-check");

const progressText =
document.getElementById("progressText");

const readinessScore =
document.getElementById("readinessScore");

loadProgress();

// =========================
// LOAD SAVED DATA
// =========================

function loadProgress(){

    checkboxes.forEach((checkbox,index)=>{

        const saved =
        localStorage.getItem(
            "skill_"+index
        );

        if(saved==="true"){

            checkbox.checked = true;

        }

    });

    // Auto Complete From Learning Pages

    const excelCheck =
    document.getElementById(
        "excelCheck"
    );

    const sqlCheck =
    document.getElementById(
        "sqlCheck"
    );

    const pythonCheck =
    document.getElementById(
        "pythonCheck"
    );

    const statisticsCheck =
    document.getElementById(
        "statisticsCheck"
    );

    const powerbiCheck =
    document.getElementById(
        "powerbiCheck"
    );

    if(
        excelCheck &&
        localStorage.getItem("excel")
        === "completed"
    ){

        excelCheck.checked = true;

    }

    if(
        sqlCheck &&
        localStorage.getItem("sql")
        === "completed"
    ){

        sqlCheck.checked = true;

    }

    if(
        pythonCheck &&
        localStorage.getItem("python")
        === "completed"
    ){

        pythonCheck.checked = true;

    }

    if(
        statisticsCheck &&
        localStorage.getItem("statistics")
        === "completed"
    ){

        statisticsCheck.checked = true;

    }

    if(
        powerbiCheck &&
        localStorage.getItem("powerbi")
        === "completed"
    ){

        powerbiCheck.checked = true;

    }

    updateProgress();

}

// =========================
// SAVE CHECKBOX STATUS
// =========================

checkboxes.forEach((checkbox,index)=>{

    checkbox.addEventListener(
        "change",
        ()=>{

            localStorage.setItem(
                "skill_"+index,
                checkbox.checked
            );

            updateProgress();

        }
    );

});

// =========================
// UPDATE PROGRESS
// =========================

function updateProgress(){

    let completed = 0;

    checkboxes.forEach((checkbox)=>{

        if(
            checkbox.checked
        ){

            completed++;

        }

    });

    let percentage =
    Math.round(
        (completed /
        checkboxes.length)
        * 100
    );

    // Completed Count

    const completedCount =
    document.getElementById(
        "completedCount"
    );

    if(completedCount){

        completedCount.textContent =
        completed;

    }

    // Progress Text

    if(progressText){

        progressText.textContent =
        "Progress : "
        + percentage + "%";

    }

    // Progress Bar

    const progressBar =
    document.getElementById(
        "progressBar"
    );

    if(progressBar){

        progressBar.style.width =
        percentage + "%";

    }

    // Career Score

    if(readinessScore){

        readinessScore.textContent =
        "Career Readiness Score: "
        + percentage + "%";

    }

    // Achievements

    const achievementList =
    document.getElementById(
        "achievementList"
    );

    if(achievementList){

        achievementList.innerHTML = "";

        if(percentage >= 20){

            achievementList.innerHTML +=
            "<li>🏆 First Skill Completed</li>";

        }

        if(percentage >= 50){

            achievementList.innerHTML +=
            "<li>🏆 50% Progress Reached</li>";

        }

        if(percentage >= 80){

            achievementList.innerHTML +=
            "<li>🏆 Advanced Learner</li>";

        }

        if(percentage === 100){

            achievementList.innerHTML +=
            "<li>🚀 Roadmap Completed</li>";

        }

        if(
            achievementList.innerHTML
            === ""
        ){

            achievementList.innerHTML =
            "<li>Start Your Journey</li>";

        }

    }

}

// =========================
// DARK MODE
// =========================

const darkBtn =
document.getElementById(
    "darkModeBtn"
);

if(darkBtn){

    darkBtn.addEventListener(
        "click",
        ()=>{

            document.body.classList.toggle(
                "dark-mode"
            );

        }
    );

}

// =========================
// SEARCH SKILLS
// =========================

const searchBox =
document.getElementById(
    "searchBox"
);

const skillItems =
document.querySelectorAll(
    ".skill-item"
);

if(searchBox){

    searchBox.addEventListener(
        "keyup",
        ()=>{

            const value =
            searchBox.value
            .toLowerCase();

            skillItems.forEach(
                (skill)=>{

                    const text =
                    skill.textContent
                    .toLowerCase();

                    if(
                        text.includes(
                            value
                        )
                    ){

                        skill.style.display =
                        "block";

                    }
                    else{

                        skill.style.display =
                        "none";

                    }

                }
            );

        }
    );

}

// =========================
// MARK SKILL COMPLETE
// =========================

function completeSkill(
    skillName
){

    localStorage.setItem(
        skillName,
        "completed"
    );

    alert(
        skillName +
        " Completed Successfully 🎉"
    );

}

localStorage.clear();