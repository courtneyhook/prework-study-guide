var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log(topics);

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
if (topics === 'HTML') {
    console.log("Let's study HTML!");
} else if (topics === 'CSS') {
    console.log("Let's study CSS!");
} else if (topics === 'Git') {
    console.log("Let's study Git!");
} else if (topics === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log("Please try again!");
}

function listTopics() {
    for (var x = 0; x <topics.length; x++) {
        console.log(topics[x]);
    }
}
console.log("Here are the topics we have learned through the Prework:");
listTopics();

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}

console.log("Which topic should we study first?");
selectTopic();
