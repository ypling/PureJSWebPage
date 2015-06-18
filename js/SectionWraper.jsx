/** @jsx React.DOM */
define(['react'], function (React) {
    var SectionWraper = React.createClass({
        render: function () {
            return (
            <section id="faq" style={this.props.styles.block}>
                <div className="container">
                    <div className="row">
                        <div className="col-sx-12">
                            <h1 style={this.props.styles.sectionTitle}>{this.props.content}
                                <hr style={this.props.styles.topBreaker}/>
                            </h1>
                        </div>
                    </div>
                {this.props.children}
                </div>
                <hr style={this.props.styles.bottomBreaker}/>
            </section>
            )
        }
    });
    return SectionWraper;
});