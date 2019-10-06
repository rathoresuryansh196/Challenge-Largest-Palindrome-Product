/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  function revdig(var n) 
  { 
    var rev_n = 0; 
    while(n>0) { 
        rev_n=rev_n*10+n%10; 
        n=n/10; 
    } 
    return rev_n; 
  }
   function ispal(var n)
  {
    // get the reverse of n 
    var rev_n=revdig(n);
    // Check if rev_n and n are same or not. 
    if (rev_n == n) 
        return 1; 
    else
        return 0;
  }  
  
  factor_0=pow(10,digits);factor_0=factor_0-1;
  var i,j,p=0,q=0,c;
  c=pow(10,digits-1);
  
  for(i=c;i<=factor_0;i++)
  {
    for(j=c;j<=i;j++)
    {
      if(ispal(i*j))
      {
        m=max(m,i*j);
        p=i;q=j;
      }
    }
  }  
  factor_0=p;factor_1=q;
  palindromeNumber=p*q;
  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
