/** @jsx React.DOM */
define(['React'], function (React) {
    var SectionWraper = React.createClass({displayName: "SectionWraper",
        styles: {
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
            bottomBreaker: {
                width: '80%',
                height: '1px',
                marginBottom: '5px',
                position: 'absolute',
                left: '50%',
                marginLeft: '-40%',
                background: '-webkit-linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)'
            },
            block: {
                marginTop: '60px',
                marginButtom: '40px'
            }
        },
        render: function () {
            return (
                React.createElement("section", {id: "faq", style: this.styles.block}, 
                    React.createElement("div", {className: "container"}, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-sx-12"}, 
                                React.createElement("h1", {style: this.styles.sectionTitle}, this.props.content, 
                                    React.createElement("hr", {style: this.styles.topBreaker})
                                )
                            )
                        ), 
                        this.props.children, 
                        React.createElement("hr", {style: this.styles.bottomBreaker})
                    )
                )
            )
        }
    });
    return SectionWraper;
});