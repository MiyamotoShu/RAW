document.addEventListener("DOMContentLoaded", function () {
    // 获取所有问题的答案元素
    var questionInputs = document.querySelectorAll('input[type="radio"]');
    
    // 获取提交按钮元素
    var submitButton = document.querySelector('#submit-button');
    
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
        
        // 更新显示总分数的元素
        totalScoreElement.textContent = totalScore;
        passScoreElement.textContent = passScore;
    }
    
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


