/**
 * Created by ypling on 5/22/15.
 */
require.config({
    paths: {
        'React': '../bower_components/react/react.min',
        'jQuery': '../bower_components/jquery/dist/jquery.min'
    }
});
var dependency = [ 'React', 'jQuery','FAQSection'];
define(dependency, function (React) {
    //Data of content
    var content = {
        main:FAQSection,
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
    };
    React.render(React.createElement(content.main, {content: content}), document.body);
});
