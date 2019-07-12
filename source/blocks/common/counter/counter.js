module.exports = {

    counter: function (idCounter, maxVal = 0) {
        var eCounterInput = document.getElementById(idCounter);
        var eCounterDisplay = document.querySelector("#"+idCounter+" ~ .counter__value");
        var eCounterMoreButton = document.querySelector("#"+idCounter+" ~ .counter__more");
        var eCounterLessButton = document.querySelector("#"+idCounter+" ~ .counter__less");

        function more () {
            var currentValue = +eCounterDisplay.innerHTML;
            if (maxVal && currentValue>=maxVal)
                return;
            if (currentValue===0)
                eCounterLessButton.classList.remove("counter__less_disabled");
            eCounterDisplay.innerHTML=(++currentValue);
            eCounterInput.value = currentValue;
            if (currentValue>=maxVal)
                eCounterMoreButton.classList.add("counter__more_disabled");
        }

        function less () {
            var currentValue = +eCounterDisplay.innerHTML;
            if (currentValue<=0)
                return;
            if (maxVal && currentValue===maxVal)
                eCounterMoreButton.classList.remove("counter__more_disabled");
            eCounterDisplay.innerHTML=(--currentValue);
            eCounterInput.value = currentValue;
            if (currentValue<=0)
                eCounterLessButton.classList.add("counter__less_disabled");
        }

        eCounterMoreButton.addEventListener("click", more);
        eCounterLessButton.addEventListener("click", less);
    }
};