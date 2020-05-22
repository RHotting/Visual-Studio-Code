Survey
    .StylesManager
    .applyTheme("darkblue");

var json = {
    "completedHtml": "<h3>Bedankt voor uw feedback.</h3> <h5>Uw feedback gaat ons helpen bij het maken van een mooi product!</h5>",
    "completedHtmlOnCondition": [{
        "expression": "{nps_score} > 7",
        "html": "<h3>Bedankt voor uw feedback.</h3> <h5>Wij zijn blij dat u tevreden bent. Uw mening en suggesties zorgen ervoor dat we het nog beter kunnen gaan doen!</h5>"
    }, {
        "expression": "{nps_score} < 6",
        "html": "<h3>Bedankt voor uw feedback.</h3> <h5> We zijn blij dat u uw feedback met ons deelt. We hechten hoge waarde aan alle suggesties die door onze klanten worden gedaan. Wij doen ons best om het product te verbeteren en te voldoen aan uw vewachtingen.</h5>\n"
    }],
    "pages": [{
        "name": "page1",
        "elements": [{
            "type": "rating",
            "name": "nps_score",
            "title": "Op een schaal van 1 tot 10, hoe waarschijnlijk is het dat u DASC B.V. zal aanraden aan anderen?",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Zeer onwaarschijnlijk)",
            "maxRateDescription": "(Zeer waarschijnlijk)"
        }]
    }],
    "showQuestionNumbers": "off"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function(result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({ model: survey });