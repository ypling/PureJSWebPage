/**
 * Created by ypling on 5/22/15.
 */
/** @jsx React.DOM */
require.config({
    paths: {
        'React': '../bower_components/react/react.min',
        'jQuery': '../bower_components/jquery/dist/jquery.min'
    }
});

var dependencies = ['React', 'jQuery','ControllerView'];
var masterData = [
    {
        sectionName: 'FAQSection',
        content: {
            sectionTitle: "Frequently asked questions",
            questions: [
                {
                    title: "Question 1",
                    text: "test content test content test content test content test content test content test content test content "
                },
                {
                    title: "Question 2",
                    text: "test content test content test content test content test content test content test content test content"
                }
            ]
        }
    },
    {
        sectionName: 'FAQSection',
        content: {
            sectionTitle: "Frequently asked questions 2",
            questions: [
                {
                    title: "Question 1",
                    text: "test content test content test content test content test content test content test content test content "
                },
                {
                    title: "Question 2",
                    text: "test content test content test content test content test content test content test content test content"
                }
            ]
        }
    }
];

//add sections into dependencies
var hashTable = {};
masterData.forEach(function (section) {
    var name = section.sectionName;
    if (hashTable[name] === undefined) {
        dependencies.push('Sections/'+name);
        hashTable[name] = 1;
    }
});

define(dependencies, function (React,$,ControllerView) {
    React.render(React.createElement(ControllerView, {masterData: masterData}), document.body);
});
