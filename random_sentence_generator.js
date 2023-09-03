
$(document).ready(function () {

$("button").on("click", function() {
    var r = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    var names = ["Tommy", "Joseph", "Derrick", "Brandon"];
    var transitiveVerbs = ["punched", "kicked", "threw", "destroyed"];
    var determiners = ["the", "a"];
    var nouns1 = ["monster", "robot", "ghost"];
    var nouns2 = ["boxer", "wrestler", "teacher"];
    var adjectives = ["skilled", "smart", "strong"];
    var intransitiveVerbs = ["sleeps",];
    var adverbs = ["furiously", "reluctantly", "gladly"];

    var NA = names[Math.floor(Math.random() * (3 + 1))];
    var TV = transitiveVerbs[Math.floor(Math.random() * (3 + 1))];
    var D = determiners[Math.floor(Math.random() * (1 + 1))];
    var N1 = nouns1[Math.floor(Math.random() * (2 + 1))];
    var N2 = nouns2[Math.floor(Math.random() * (2 + 1))];
    var ADJ = adjectives[Math.floor(Math.random() * (2 + 1))];
    var IV = intransitiveVerbs[0];
    var ADV = adverbs[Math.floor(Math.random() * (2 + 1))];

    var syn1 = [NA, " ", TV, " ", D, " ", N1, "."];
    var syn2 = [D, " ", N1, " ", TV, " ", D, " ", N2, "."];
    var syn3 = [D, " ", N1, " ", TV, " ", D, " ", ADJ, " ", N2, "."];
    var syn4 = [D, " ", ADJ, " ", N1, " ", TV, " ", D, " ", N2, "."];
    var syn5 = [D, " ", ADJ, " ", N1, " ", IV, " ", ADV, "."];
    var sentence_forms = [syn1, syn2, syn3, syn4, syn5];
    var random_sentence = sentence_forms[r];
    function randomGenerator() {
    return random_sentence.join(" ");
}
    $("#sentenceHere").html(randomGenerator());
});

});
