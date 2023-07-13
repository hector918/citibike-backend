const db = require("../queries/db-config");

const insert_to_api_usage = async (body) => {
  //only accept below key name
  // const templete = {"user_name":"text", "user_input":"text", "caller":"text", "json":"object", "req_usage":"number", "url":"text", "ip_address":"text"};
  // const [col_name, val_name] = [[], []];
  // //checking column name
  // for(let x in body) if(templete[x]){
  //   col_name.push(x);
  //   val_name.push(`$[${x}]`);
  // }
  // //if not matching exit
  // if(col_name.length === 0) return false;
  // try {
  //   //insert to db
  //   const ret = await db.one(`INSERT INTO api_usage (${col_name.join(", ")}) VALUES (${val_name.join(", ")}) RETURNING *`, body);
  //   return ret;
  // } catch (error) {
  //   console.error(error);
  //   return false;
  // }
};

const read_api_usage = async (start = 0, limit = 100) => {
  // const display_fields = [
  //   'timestamp', 
  //   'user_input', 
  //   'caller', 
  //   'url', 
  //   'json', 
  //   'req_usage', 
  //   'ip_address'
  // ];
  // try {
  //   return await db.any(`SELECT ${display_fields.join(',')} FROM api_usage ORDER BY timestamp DESC OFFSET $[start] LIMIT $[limit];`, { start, limit });
  // } catch (error) {
  //   console.error(error);
  //   return false;
  // }
}

module.exports = {insert_to_api_usage, read_api_usage}