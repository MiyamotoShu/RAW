document.addEventListener("DOMContentLoaded", function () {
    // 获取所有问题的答案元素
    var questionInputs = document.querySelectorAll('input[type="radio"]');
    var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');

    // 獲取用於顯示答案的表格元素
    var answerTableBody = document.querySelector("#answer-table tbody");

    // 获取提交按钮元素
    var submitButton = document.querySelector('#submit-button');

    // 當用戶點擊提交按鈕時，計算分數並顯示答案
    submitButton.addEventListener("click", function () {
        // 清空表格內容
        answerTableBody.innerHTML = "";

        // 創建一個包含所有選中答案的數組
        var selectedAnswers = [];

        // 遍歷所有問題的答案，根據用戶的選擇將答案添加到表格中
        questionInputs.forEach(function (input) {
        if (input.checked) {
            var answerContent = input.parentElement.textContent.trim();
            var value1 = input.getAttribute("value1");
            var value2 = input.getAttribute("value2");

            selectedAnswers.push([answerContent, value1, value2]);
        }
        });

        // 遍歷所有複選題的答案，同樣將答案添加到表格中
        checkboxInputs.forEach(function (checkbox) {
        if (checkbox.checked) {
            var answerContent = checkbox.parentElement.textContent.trim();
            var value1 = checkbox.getAttribute("value1");
            var value2 = checkbox.getAttribute("value2");

            selectedAnswers.push([answerContent, value1, value2]);
        }
        });

        // 將所選答案添加到表格
        selectedAnswers.forEach(function (answer) {
        var row = document.createElement("tr");
        answer.forEach(function (cellData) {
            var cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        answerTableBody.appendChild(row);
        });
    });
    
    // 获取显示总分数的元素
    var totalScoreElement = document.getElementById("total-score");
    var passScoreElement = document.getElementById("pass-score");
    
    // 当用户点击提交按钮时，调用计算分数的函数
    submitButton.addEventListener("click", calculateScore);
    
    // 计算分数的函数
    function calculateScore() {
        var totalScore = 0;
        var passScore = 0;
        
        // 遍历所有问题的答案，根据用户选择的答案来计算总分数和总扣分
        questionInputs.forEach(function (input) {
            if (input.checked) {
                // 根据问题的value1和value2属性来计算分数
                totalScore += parseInt(input.getAttribute("value1"));
                passScore += parseInt(input.getAttribute("value2"));
            }
        });

        // 遍历所有复选题答案
        checkboxInputs.forEach(function (input) {
            if (input.checked) {
                // 根据问题的value1和value2属性来计算分数
                totalScore += parseInt(input.getAttribute("value1"));
                passScore += parseInt(input.getAttribute("value2"));
            }
        });

        // 更新显示总分数的元素
        totalScoreElement.textContent = totalScore;
        passScoreElement.textContent = passScore;
    }

     // 处理复选题选项的颜色变化
     checkboxInputs.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            // 如果选中了复选框，改变其背景颜色
            if (checkbox.checked) {
                checkbox.parentElement.style.backgroundColor = "#6ca0e6";
            } else {
                // 如果取消选中，恢复默认背景颜色
                checkbox.parentElement.style.backgroundColor = "#e6f0ff";
            }
        });
    });

    
    
});

        // 获取所有具有类名 "question-box" 的问题容器
    const questionContainers = document.querySelectorAll('.question-box');

    // 遍历每个问题容器并处理单选按钮组
    questionContainers.forEach((container) => {
        // 获取问题容器的类名，用于标识该问题的单选按钮组
        const questionId = container.getAttribute('data-question');
        
        // 获取该问题容器中的单选按钮组元素
        const radioButtons = container.querySelectorAll('.radio-button');
        
        // 添加事件处理程序来处理该问题的单选按钮组
        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('click', () => {
                // 清除同一问题的其他单选按钮的背景颜色
                radioButtons.forEach((btn) => {
                    btn.parentElement.style.backgroundColor = '#e6f0ff';
                });
                // 设置选中的单选按钮的背景颜色
                radioButton.parentElement.style.backgroundColor = '#6ca0e6';
            });
        });
    });

