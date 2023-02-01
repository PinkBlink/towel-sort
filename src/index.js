
module.exports = function towelSort(...matrix) {
  let result=matrix;
  if (result.length==0) return result;
  for(let i=0;i<result[0].length;i++){
    if(i==1 || i%2!=0){
      result[0][i].reverse();
    }
  }
  return result.flat(2);
}


