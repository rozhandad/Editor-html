﻿week= new Array("يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه")
months = new Array("فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند");
a = new Date();
d= a.getDay();
day= a.getDate();
month = a.getMonth()+1;
year= a.getYear();
year = (year== 0)?2000:year;
(year<1000)? (year += 1900):true;
year -= ( (month < 3) || ((month == 3) && (day < 21)) )? 622:621;
switch (month) {
case 1: (day<21)? (month=10, day+=10):(month=11, day-=20); break;
case 2: (day<20)? (month=11, day+=11):(month=12, day-=19); break;
case 3: (day<21)? (month=12, day+=9):(month=1, day-=20); break;
case 4: (day<21)? (month=1, day+=11):(month=2, day-=20); break;
case 5:
case 6: (day<22)? (month-=3, day+=10):(month-=2, day-=21); break;
case 7:
case 8:
case 9: (day<23)? (month-=3, day+=9):(month-=2, day-=22); break;
case 10:(day<23)? (month=7, day+=8):(month=8, day-=22); break;
case 11:
case 12:(day<22)? (month-=3, day+=9):(month-=2, day-=21); break;
default: break;
}


(function (window, $) {

    function getCurrentQuiz(container) {
        return container.find('.question-pool > .quiz');
    }
    function getAllQuestions(container) {
        return container.find('.question-pool > .quiz .question');
    }
    function getQuestionByIndex(container, index) {
        return container.find('.question-pool > .quiz .question:nth-child(' + index + ')');
    }
    function getNowDateTimeStamp() {
        var dt = new Date();
	return  dt.getHours() + ':' + (dt.getMinutes() >= 10 ? dt.getMinutes() : '0' + dt.getMinutes());
    }

    var ViewModel = function (elem, options) {
        var self = this;
        self.element = $(elem);
        self.options = $.extend({}, engine.defaultOptions, options);

        self.element.find('.question-pool').load(self.options.quizUrl, function () {
            // quiz loaded into browser from HTML file

            getCurrentQuiz(self.element).find('.question').each(function (i, e) {
                var question = $(this),
                    questionIndex = i,
                    answers = question.find('.answer'),
                    correctAnswerCount = question.find('.answer[data-correct]').length;

                question.find('.hint a, .description a').attr('target','_blank');

                answers.each(function (ai, ae) {
                    var answer = $(this),
                        newAnswer = $('<label></label>').addClass('answer').append('<input type=\'checkbox\'/>').append($('<div></div>').html(answer.html()));
                    if (answer.is('[data-correct]')) {
                        newAnswer.attr('data-correct', '1');
                    }
                    if (correctAnswerCount <= 1){
                        newAnswer.find('input').attr('type','radio').attr('name','question' + questionIndex);
                    }
                    answer.replaceWith(newAnswer);
                });
            });


            self.questionCount(getAllQuestions(self.element).length);
            self.quizTitle(getCurrentQuiz(self.element).attr('data-title'));
            self.quizSubTitle(getCurrentQuiz(self.element).attr('data-subtitle'));
        });
        
        self.quizStarted = ko.observable(false);
        self.quizComplete = ko.observable(false);

        self.quizTitle = ko.observable('');
        self.quizSubTitle = ko.observable('');
        self.questionCount = ko.observable(0);

        self.currentQuestionIndex = ko.observable(0);
        self.currentQuestionIndex.subscribe(function (newValue) {
            if (newValue < 1) {
                self.currentQuestionIndex(1);
            } else if(newValue > self.questionCount()) {
                self.currentQuestionIndex(self.questionCount());
            } else {
                getAllQuestions(self.element).hide()
                getQuestionByIndex(self.element, newValue).show();
            }

            if (self.questionCount() !== 0) {
                self.currentProgress(self.currentQuestionIndex() / self.questionCount() * 100);
            }
        });
        self.currentProgress = ko.observable(0);

        self.currentQuestionIsFirst = ko.computed(function () {
            return self.currentQuestionIndex() === 1;
        });
        self.currentQuestionIsLast = ko.computed(function () {
            return self.currentQuestionIndex() === self.questionCount();
        });
        self.currentQuestionHasHint = ko.computed(function () {
            var q = getQuestionByIndex(self.element, self.currentQuestionIndex());
            return (q.find('.hint').length > 0);
        });

        self.startQuiz = function () {
            // reset quiz to start state
            self.currentQuestionIndex(0);
            self.currentQuestionIndex(1);

            self.quizStarted(true);
        }

        self.moveNextQuestion = function () {
            self.currentQuestionIndex(self.currentQuestionIndex() + 1);
        };
        self.movePreviousQuestion = function () {
            self.currentQuestionIndex(self.currentQuestionIndex() - 1);
        };
        self.showCurrentQuestionHint = function () {
            var q = getQuestionByIndex(self.element, self.currentQuestionIndex());
            q.find('.hint').slideDown();
        };
        self.showCurrentQuestionAnswer = function () {
            var q = getQuestionByIndex(self.element, self.currentQuestionIndex());
            q.find('.answer[data-correct]').addClass('highlight');
            q.find('.description').slideDown();
        };

        

        self.calculateScore = function () {
            var correctQuestions = [];
            getAllQuestions(self.element).each(function (i, e) {
                var q = $(this);
                if (q.find('.answer').length === (
                    q.find('.answer[data-correct] > input:checked').length + q.find('.answer:not([data-correct]) > input:not(:checked)').length
                    )) {
                    correctQuestions.push(q);
                }
            });
            self.totalQuestionsCorrect(correctQuestions.length);

            if (self.questionCount() !== 0) {
                self.calculatedScore( Math.round( (self.totalQuestionsCorrect() / self.questionCount() * 100) * 10 ) / 10 );
            }

            self.calculatedScoreDate(getNowDateTimeStamp());

            self.quizComplete(true);
        };
        self.totalQuestionsCorrect = ko.observable(0);
        self.calculatedScore = ko.observable(0);
        self.calculatedScoreDate = ko.observable('');
        self.quizPassed = ko.computed(function () {
            return self.calculatedScore() >= 50;
        });
    };


    var engine = window.jsQuizEngine = function (elem, options) {
        return new engine.fn.init(elem, options);
    };
    engine.defaultOptions = {
        quizUrl: 'original.htm'
    };
    engine.fn = engine.prototype = {
        version: 0.2,
        init: function (elem, options) {
            var vm = new ViewModel(elem[0], options);
            ko.applyBindings(vm, elem[0]);
        }
    };
    engine.fn.init.prototype = engine.fn;


})(window, jQuery);
