
function checkInfo() {
    var classNum = document.getElementById("classNum");
    var scNum = document.getElementById("scNum");
    var stName = document.getElementById("stName");


    if (classNum.value === "" || scNum.value === "" || stName.value === "") {
        classNum.style.borderColor = "red";
        scNum.style.borderColor = "red";
        stName.style.borderColor = "red";
        alert("请检查并填写必要信息！");

    }
    else {
        var grade = 0;
        var answer1 = document.getElementById("answer1"),
            answer2 = document.getElementById("answer2"),
            answer3 = document.getElementById("answer3"),
            answer4 = document.getElementById("answer4"),
            answer5 = document.getElementById("answer5"),
            answer6 = document.getElementById("answer6"),
            answer7 = document.getElementById("answer7"),
            answer8 = document.getElementById("answer8"),
            answer9 = document.getElementById("answer9"),
            answer10 = document.getElementById("answer10"),
            answer11 = document.getElementById("answer11"),
            answer12 = document.getElementById("answer12"),
            answer13 = document.getElementById("answer13"),
            answer14 = document.getElementById("answer14"),
            answer15 = document.getElementById("answer15");


        if
        (answer1.value == "统一建模语言") {
            grade += 5;
        }

        if (answer2.value == "封装性") {
            grade += 5;
        }
        if (answer3.value == "继承性") {
            grade += 5;
        }
        if (answer4.value == "多态性") {
            grade += 5;
        }

        if (answer5.checked) {
            grade += 10;
        }
        if (answer6.checked) {
            grade += 10;
        }

        if (answer7.checked && answer8.checked && answer9.checked) {
            grade += 10;
        }
        if (answer10.checked && answer11.checked && answer12.checked) {
            grade += 10;
        }

        if (answer13.checked) {
            grade += 10;
        }
        if (answer14.checked) {
            grade += 10;
        }

        if (answer15.value == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
            grade += 20;
        }

        var total = document.getElementById("totalGrade");
        total.innerHTML = "得分：" + grade;

    }

}
