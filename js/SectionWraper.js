/** @jsx React.DOM */
define(['react'], function (React) {
    var SectionWraper = React.createClass({displayName: "SectionWraper",
        render: function () {
            return (
            React.createElement("section", {id: "faq", style: this.props.styles.block}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-sx-12"}, 
                            React.createElement("h1", {style: this.props.styles.sectionTitle}, this.props.content, 
                                React.createElement("hr", {style: this.props.styles.topBreaker})
                            )
                        )
                    ), 
                this.props.children
                ), 
                React.createElement("hr", {style: this.props.styles.bottomBreaker})
            )
            )
        }
    });
    return SectionWraper;
});