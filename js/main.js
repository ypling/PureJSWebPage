/**
 * Created by ypling on 5/22/15.
 */
require.config({
    paths: {
        'react': '../bower_components/react/react.min',
        'jQuery': '../bower_components/jquery/dist/jquery.min'
    }
});

define(['FAQSection', 'react', 'jQuery'], function (FAQSection, React) {
    var content = {
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
    var styles = {
        sectionHeader: {
            sectionTitle: {
                fontSize: "44px",
                textAlign: "center",
                fontWeight: 300,
                textTransform: "uppercase",
                letterSpacing: '0.1em',
                marginBottom: '90px'
            },
            topBreaker: {
                backgroundColor: '#4294ff',
                display: 'block',
                height: '1px',
                width: '100px',
                position: 'absolute',
                marginLeft: '-50px',
                marginTop: '20px',
                left: '50%'
            },
            bottomBreaker:{
                backgroundColor: '#4294ff',
                display: 'block',
                height: '1px',
                width: '100px',
                position: 'absolute',
                marginLeft: '-50px',
                marginTop: '20px',
                left: '50%'
            },
            block:{
                marginTop:'60px',
                marginButtom:'40px'
            }
        }
    };
    React.render(React.createElement(FAQSection, {content: content, styles: styles}), document.body);
});
