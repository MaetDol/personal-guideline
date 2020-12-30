`사용량이 제일 많은 언어로 JS가 나와라 얍!!`;

Promise
  .all( jobs.map( job => new Promise((resolve, reject) => job(resolve, reject))) )
  .then( _=> console.log('Tada!! your job is done!') )
  .catch( _=> console.log('Oops, something goes wrong!') );

console.log([...'useless words here'].reverse());
console.log( Number.MAX_VALUE === Number.MAX_VALUE+1 );
