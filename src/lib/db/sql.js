const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');

// Helper for linking to external query files:
function sql(file) {
    const fullPath = joinPath(process.cwd(), 'src', 'lib', 'db', 'queries', file); // generating full path;
    return new QueryFile(fullPath, {minify: true});
}

module.exports = {
  users: {
    get_user_by_id: sql('./users/get_user_by_id.sql'),
  },
};