const passWord = 'Anaboy004'


const malk = () => {
 if(passWord.length > 5){
      return 'password confirmed '
 }else{
      return 'characters are less than the expected characters'
 }


}

module.exports = malk