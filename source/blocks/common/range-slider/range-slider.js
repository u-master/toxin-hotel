
var widthSliderBoarder = 1;
var halfWidthToggler = 8; // for centring


module.exports = {
    rangeSlider: function(idRangeSlider) {
        console.log("Range-slider loaded... Id: " + idRangeSlider);

        var eRangeSlider = document.getElementById(idRangeSlider);
        var eTextLow = eRangeSlider.querySelector(".range-slider__lowvalue");
        var eInputLow = eRangeSlider.querySelector(".range-slider__input-lowvalue");
        var eTextHigh = eRangeSlider.querySelector(".range-slider__highvalue");
        var eInputHigh = eRangeSlider.querySelector(".range-slider__input-highvalue");
        var eAxis = eRangeSlider.querySelector(".range-slider__axis");
        var eTogglerLow = eRangeSlider.querySelector(".range-slider__toggler_left");
        var eTogglerHigh = eRangeSlider.querySelector(".range-slider__toggler_right");
        var eAxisFilling = eRangeSlider.querySelector(".range-slider__axis-filling");

        var minValue = + eRangeSlider.getAttribute("data-min");
        var maxValue = + eRangeSlider.getAttribute("data-max");

        eTogglerLow.percent = +(eTogglerLow.style.left.slice(0,-1));
        eTogglerHigh.percent = +(eTogglerHigh.style.right.slice(0,-1));

        function getLeftPosition(elem) {
            return elem.getBoundingClientRect().left + window.pageXOffset;
        }

        function getRightPosition(elem) {
            return elem.getBoundingClientRect().right + window.pageXOffset;
        }

        function setLeftValues(percent, isSkipSetText) {
            eTogglerLow.style.left = eAxisFilling.style.left = percent+"%";
            eTogglerLow.percent = percent;
            var width = (100-percent-eTogglerHigh.percent);
            eAxisFilling.style.width = (width>0 ? width : 0) +"%";
            eTogglerLow.style.zIndex = (percent===100) ? 3 : 2;
            if (!isSkipSetText)
                eTextLow.innerText = (""+(Math.round(minValue + percent * (maxValue-minValue) * 0.01))).replace(/(\d{1,3})(?=(\d{3})*$)/g,"$1 ").trim();
        }

        function setRightValues(percent, isSkipSetText) {
            eTogglerHigh.style.right = percent+"%";
            eTogglerHigh.percent = percent;
            var width = (100-percent-eTogglerLow.percent);
            eAxisFilling.style.width = (width>0 ? width : 0) +"%";
            eTogglerHigh.style.zIndex = (percent===100) ? 3 : 2;
            if (!isSkipSetText)
                eTextHigh.innerText = (""+(Math.round(maxValue - percent * (maxValue-minValue) * 0.01))).replace(/(\d{1,3})(?=(\d{3})*$)/g," $1");
        }

        /* --- low toggler moving events --- */
        eTogglerLow.addEventListener("touchstart",
            function(event) {
                event.preventDefault();
                eTogglerLow.handlers = handlersTogglerLow(event);

                document.addEventListener("touchmove", eTogglerLow.handlers.handlerMoveToggler);
                document.addEventListener("touchend", eTogglerLow.handlers.handlerTouchEnd);
            });

        eTogglerLow.addEventListener("mousedown",
            function(event) {
                eTogglerLow.handlers = handlersTogglerLow(event);

                document.addEventListener("mousemove", eTogglerLow.handlers.handlerMoveToggler);
                document.addEventListener("mouseup", eTogglerLow.handlers.handlerMouseUp);
            });

        function handlersTogglerLow(event) {
            var positionSlider = getLeftPosition(eRangeSlider) + widthSliderBoarder;
            var positionTogglerLow =
                getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler
            var positionTogglerHigh =
                getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler
            var shiftClick = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - positionTogglerLow;
            var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;

            return {
                handlerMoveToggler: function (event) {
                    var result = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - shiftClick;
                    var percent;
                    if (result < positionSlider)
                        percent = 0;
                    else {
                        if (result > positionTogglerHigh)
                            result = positionTogglerHigh;
                        percent = 100 * (result - positionSlider) / widthSlider;
                    }
                    setLeftValues(percent);
                },

                handlerMouseUp: function () {
                    document.removeEventListener("mousemove", eTogglerLow.handlers.handlerMoveToggler);
                    document.removeEventListener("mouseup", eTogglerLow.handlers.handlerMouseUp);
                },

                handlerTouchEnd: function () {
                    event.preventDefault();
                    document.removeEventListener("touchmove", eTogglerLow.handlers.handlerMoveToggler);
                    document.removeEventListener("touchend", eTogglerLow.handlers.handlerTouchEnd);
                }
            };
        }

        /* --- high toggler moving events --- */
        eTogglerHigh.addEventListener("touchstart",
            function(event) {
                event.preventDefault();
                eTogglerHigh.handlers = handlersTogglerHigh(event);

                document.addEventListener("touchmove", eTogglerHigh.handlers.handlerMoveToggler);
                document.addEventListener("touchend", eTogglerHigh.handlers.handlerTouchEnd);
            });

        eTogglerHigh.addEventListener("mousedown",
            function(event) {
                eTogglerHigh.handlers = handlersTogglerHigh(event);

                document.addEventListener("mousemove", eTogglerHigh.handlers.handlerMoveToggler);
                document.addEventListener("mouseup", eTogglerHigh.handlers.handlerMouseUp);
            });

        function handlersTogglerHigh(event) {
            var positionSlider = getRightPosition(eRangeSlider)-widthSliderBoarder;
            var positionTogglerLow =
                getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler
            var positionTogglerHigh =
                getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler
            var shiftClick = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - positionTogglerHigh;
            var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;

            return {
                handlerMoveToggler: function (event) {
                    var result = (event.pageX ? event.pageX : event.targetTouches[0].pageX) - shiftClick;
                    var percent;
                    if (result > positionSlider)
                        percent = 0;
                    else {
                        if (result < positionTogglerLow)
                            result = positionTogglerLow;
                        percent = 100 * (positionSlider-result) / widthSlider;
                    }
                    setRightValues(percent);
                },

                handlerMouseUp: function () {
                    document.removeEventListener("mousemove", eTogglerHigh.handlers.handlerMoveToggler);
                    document.removeEventListener("mouseup", eTogglerHigh.handlers.handlerMouseUp);
                },

                handlerTouchEnd: function () {
                    event.preventDefault();
                    document.removeEventListener("touchmove", eTogglerHigh.handlers.handlerMoveToggler);
                    document.removeEventListener("touchend", eTogglerHigh.handlers.handlerTouchEnd);
                }
            };
        }

        function handlerInputEnterPressed(event) {
            if (event.which == 13 || event.keyCode == 13) {
                event.preventDefault();
                this.blur();
            }
        }

        function handlerClickTextLow() {
            eInputLow.style.width = `${eTextLow.offsetWidth + 16}px`;
            eInputLow.value = eTextLow.innerText.replace(/\s*/g, "");
            eTextLow.style.visibility = "hidden";
            eInputLow.style.visibility = "visible";
            eInputLow.focus();
            eInputLow.addEventListener("keypress", handlerInputEnterPressed);
        }

        eTextLow.addEventListener ("mouseup", handlerClickTextLow);
        eTextLow.addEventListener ("touchstart", handlerClickTextLow);

        eInputLow.addEventListener("blur",
            function() {
                var textHigh = eTextHigh.innerText.replace(/\s*/g, "");
                var inputLow = +eInputLow.value;
                if (inputLow > +textHigh)
                    eInputLow.value = textHigh;
                if (inputLow < minValue)
                    eInputLow.value = minValue;
                var percent = 100 * (+eInputLow.value-minValue) / (maxValue-minValue);
                setLeftValues(percent, true);
                eTextLow.innerText = eInputLow.value.replace(/(\d{1,3})(?=(\d{3})*$)/g,"$1 ").trim();
                eInputLow.style.visibility = "hidden";
                eTextLow.style.visibility = "visible";
                eInputLow.removeEventListener("keypress", handlerInputEnterPressed);
            });

        function handlerClickTextHigh() {
            eInputHigh.style.width = `${eTextHigh.offsetWidth + 16}px`;
            eInputHigh.value = eTextHigh.innerText.replace(/\s*/g, "");
            eTextHigh.style.visibility = "hidden";
            eInputHigh.style.visibility = "visible";
            eInputHigh.focus();
            eInputHigh.addEventListener("keypress", handlerInputEnterPressed);
        }

        eTextHigh.addEventListener("mouseup", handlerClickTextHigh);
        eTextHigh.addEventListener("touchstart", handlerClickTextHigh);

        eInputHigh.addEventListener("blur",
            function() {
                var textLow = +eTextLow.innerText.replace(/\s*/g, "");
                var inputHigh = +eInputHigh.value;
                if (inputHigh < textLow)
                    eInputHigh.value = textLow;
                if (inputHigh > maxValue)
                    eInputHigh.value = maxValue;
                var percent = 100 * (maxValue-(+eInputHigh.value)) / (maxValue-minValue);
                setRightValues(percent, true);
                eTextHigh.innerText = eInputHigh.value.replace(/(\d{1,3})(?=(\d{3})*$)/g," $1");
                eInputHigh.style.visibility = "hidden";
                eTextHigh.style.visibility = "visible";
                eInputHigh.removeEventListener("keypress", handlerInputEnterPressed);
            });

        function handlerClickAxis(event) {
           if (!event.target.classList.contains("range-slider__toggler")) {
               var positionLeftSlider = getLeftPosition(eRangeSlider)+widthSliderBoarder;
               var positionRightSlider = getRightPosition(eRangeSlider)+widthSliderBoarder;
               var widthSlider = eRangeSlider.offsetWidth - 2 * widthSliderBoarder;
               var positionTogglerLow =
                   getLeftPosition(eTogglerLow) + halfWidthToggler; // center point of low-toggler
               var positionTogglerHigh =
                   getLeftPosition(eTogglerHigh) + halfWidthToggler; // center point of high-toggler


               var pageX=(event.pageX ? event.pageX : event.targetTouches[0].pageX);

               if(pageX<=(positionTogglerLow+positionTogglerHigh)/2) {
                   var percent = 100 * (pageX - positionLeftSlider) / widthSlider;
                   setLeftValues (percent);
               } else {
                   var percent = 100 * (positionRightSlider - pageX) / widthSlider;
                   setRightValues (percent);
               }
           }
        }

        eAxis.addEventListener("click", handlerClickAxis);
        eAxis.addEventListener("touchstart", handlerClickAxis);
    }
};