const numUniqueEmails = emails => {

  const getEmail = email =>{
      let add = true
      let beforeAt = true

      let str = ''

      for(let i = 0; i < email.length; i++){
          let c = email[i]
          if(c === '+' && beforeAt){
              add = false
          }else if(c === '@'){
              add = true
              beforeAt = false
              str += c
          }else if(add){
              if(beforeAt && c !== '.') str += c
              else if(!beforeAt) str += c
          }
      }

      return str
  }

  const mails = emails.map(e => getEmail(e))
  console.log({mails})

  return (new Set(emails.map(e => getEmail(e)))).size

}