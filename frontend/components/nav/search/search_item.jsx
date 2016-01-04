var React = require("react");
var Image = require("react-bootstrap").Image;
var Glyphicon = require("react-bootstrap").Glyphicon;
var History = require("react-router").History;

var SearchItem = React.createClass({
  mixins: [History],

  goToPage: function () {
    this.history.pushState(null, this.props.pathname);

    this.props.clearResults();
  },

  itemType: function () {
    if (this.props.type === "user") {
      return (
        <Glyphicon glyph="user" />
      );
    } else if (this.props.type === "track") {
      return (
        <Glyphicon glyph="music" />
      );
    }
  },

  render: function () {
    return (
      <div className="search-option" onClick={ this.goToPage }>
        <div className="search-option-image">
          <Image src={ this.props.imageUrl } className="search-option-image" />
        </div>

        <div className="search-option-name">
          { this.props.displayName }
        </div>

        <div className="search-option-type">
          { this.itemType() }
        </div>
      </div>
    );
  }
});

module.exports = SearchItem;
