/** @jsx React.DOM */
define(['React', 'SectionWraper'], function (React, SectionWraper) {
    FAQSection = React.createClass({
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
                return <Question key={index} styles={this.styles} content={question} onClick={this.toggleClick.bind(this, index)} displayBody={displayBody} />
            }, this);
            return (
                <SectionWraper content={this.props.content.sectionTitle}>
                        {QuestionRows}
                </SectionWraper>
            )
        }
    });

    var Question = React.createClass({
        componentWillUpdate: function (nextProps) {
            var $el = $(this.getDOMNode()).find('.panel-body');

            if (nextProps.displayBody) {
                $el.slideDown();
            } else {
                $el.slideUp();
            }
        },
        render: function () {
            return (
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading" style={this.props.styles.questionTitlePanel}>
                                    <h4 className="panel-title" style={this.props.styles.questionTitle} onClick={this.props.onClick}>{this.props.content.title}</h4>
                                </div>
                                <div className="panel-body" displayBody={this.props.displayBody} style={this.props.styles.questionBodyPanel}>
                                    <p>{this.props.content.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    });

    return FAQSection;
});