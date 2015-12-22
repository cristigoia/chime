var React = require("react");
var UploadTrack = require("./upload_track");
var UploadImage = require("./upload_image");
var UploadForm = require("./upload_form");

var Upload = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Chime In</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-8">
            <UploadTrack />

            <UploadImage />

            <UploadForm />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Upload;
