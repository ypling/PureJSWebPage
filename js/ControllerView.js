/**
 * Created by l.li on 6/22/15.
 */
define(['React'], function (React) {
    var ControllerView = React.createClass({displayName: "ControllerView",
            render: function () {
                var Sections = this.props.masterData.map(function (section, index) {
                    var SectionType = window[section.sectionName];
                    return React.createElement(SectionType, {key: index, content: section.content})
                }, this);
                return (
                    React.createElement("div", null, 
                        Sections
                    )
                )
            }
        }
    );
    return ControllerView;
});