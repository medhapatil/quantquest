import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const files=fs.readdirSync('data').filter(x=>x.endsWith('.json'));
const allowedCategories=new Set(['Probability','Combinatorics','Mental Math','Market Making','Linear Algebra & Statistics','Game Theory & Logic']);
const qs=files.flatMap(f=>{const items=JSON.parse(fs.readFileSync(path.join('data',f),'utf8'));assert(Array.isArray(items),`${f} must contain an array`);return items});
assert(qs.length>0,'Question bank must not be empty');
assert.equal(new Set(qs.map(q=>q.id)).size,qs.length,'Duplicate question IDs');
for(const q of qs){
 for(const key of ['id','category','subtopic','difficulty','text','inputType','answer','hint','explanation','estimatedSeconds','tags'])assert(q[key]!==undefined&&q[key]!==null,`${q.id}: missing ${key}`);
 assert(typeof q.id==='string'&&q.id.trim(),`${q.id}: invalid id`);
 assert(allowedCategories.has(q.category),`${q.id}: invalid category`);
 assert(['beginner','intermediate','advanced'].includes(q.difficulty),`${q.id}: invalid difficulty`);
 assert(['numeric','multiple-choice'].includes(q.inputType),`${q.id}: invalid input type`);
 assert(typeof q.text==='string'&&q.text.trim().length>10,`${q.id}: question too short`);
 assert(typeof q.explanation==='string'&&q.explanation.length>=45,`${q.id}: explanation too short`);
 assert(typeof q.hint==='string'&&q.hint.length>5,`${q.id}: missing hint`);
 assert(Number.isFinite(q.estimatedSeconds)&&q.estimatedSeconds>0,`${q.id}: invalid time`);
 assert(Array.isArray(q.tags)&&q.tags.length>0,`${q.id}: missing tags`);
 if(q.inputType==='numeric')assert(String(q.answer).trim()!==''&&Number.isFinite(Number(q.answer)),`${q.id}: invalid numeric answer`);
 else {assert(Array.isArray(q.options)&&q.options.length>=2&&new Set(q.options).size===q.options.length,`${q.id}: invalid options`);assert(q.options.includes(q.answer),`${q.id}: answer not in options`)}
}
console.log(`Validated ${qs.length} questions across ${files.length} JSON files.`);
