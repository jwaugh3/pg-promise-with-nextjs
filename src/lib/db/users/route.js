import {getDB} from '../index';
const {db} = getDB();
const {users: sql} = require('../sql');

export async function getUser(user_id) {
  try {
    console.log(sql.get_user_by_id)
    let user = await db.one(sql.get_user_by_id, {user_id})
    return user;
  } catch(err) {
    console.error('error', err)
    return;
  }
}