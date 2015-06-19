/** @jsx React.DOM */
define(['React'], function (React) {
    var SectionWraper = React.createClass({
        styles:{
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
                marginTop: '60px',
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
            <section id="faq" style={this.styles.block}>
                <div className="container">
                    <div className="row">
                        <div className="col-sx-12">
                            <h1 style={this.styles.sectionTitle}>{this.props.content}
                                <hr style={this.styles.topBreaker}/>
                            </h1>
                        </div>
                    </div>
                {this.props.children}
                </div>
                <hr style={this.styles.bottomBreaker}/>
            </section>
            )
        }
    });
    return SectionWraper;
});