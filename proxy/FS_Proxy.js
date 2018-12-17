class FSProxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }
  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error("Can only read markdown files"));
    }
    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, contents);
    });
  }
}

module.exports = FSProxy;
