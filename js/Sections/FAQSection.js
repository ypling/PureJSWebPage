/** @jsx React.DOM */
define(['React', 'SectionWraper'], function (React, SectionWraper) {
    FAQSection = React.createClass({displayName: "FAQSection",
        styles: {
            questionTitlePanel: {
                backgroundColor: "white"
            },
            questionTitle: {
                color: "#204d74",
                display: "block",
                padding: "10px 15px",
                margin: "-10px -15px",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "600"
            },
            questionBodyPanel: {
                borderTop: "1px solid lightgray",
                display: 'none'
            }
        },
        getInitialState: function () {
            return {displayIndex: -1};
        },
        toggleClick: function (targetIndex) {
            this.setState({displayIndex: targetIndex});
        },
        render: function () {
            var QuestionRows = this.props.content.questions.map(function (question, index) {
                var displayBody = (this.state.displayIndex === index);
                return React.createElement(Question, {key: index, styles: this.styles, content: question, onClick: this.toggleClick.bind(this, index), displayBody: displayBody})
            }, this);
            return (
                React.createElement(SectionWraper, {content: this.props.content.sectionTitle}, 
                        QuestionRows
                )
            )
        }
    });

    var Question = React.createClass({displayName: "Question",
        componentWillUpdate: function (nextProps) {
            console.log(this);
            var $el = $(this.getDOMNode()).find('.panel-body');

            if (nextProps.displayBody) {
                $el.slideDown();
            } else {
                $el.slideUp();
            }
        },
        render: function () {
            return (
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-10 col-md-offset-1"}, 
                        React.createElement("div", {className: "panel-group"}, 
                            React.createElement("div", {className: "panel panel-default"}, 
                                React.createElement("div", {className: "panel-heading", style: this.props.styles.questionTitlePanel}, 
                                    React.createElement("h4", {className: "panel-title", style: this.props.styles.questionTitle, onClick: this.props.onClick}, this.props.content.title)
                                ), 
                                React.createElement("div", {className: "panel-body", displayBody: this.props.displayBody, style: this.props.styles.questionBodyPanel}, 
                                    React.createElement("p", null, this.props.content.text)
                                )
                            )
                        )
                    )
                )
            )
        }
    });

    return FAQSection;
});