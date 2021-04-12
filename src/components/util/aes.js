import CryptoJs from 'crypto-js'

const key = CryptoJs.enc.Utf8.parse('1111222233334444') //16位十六进制作为密钥
const iv  = CryptoJs.enc.Utf8.parse('ABCDEF1234123412') //偏移量


function Encrypt(word)//加密
{
  let srcs= CryptoJs.enc.Utf8.parse(word)
  let encrypted = CryptoJs.AES.encrypt(srcs,key,{
    iv:iv,
    mode:CryptoJs.mode.CBC,
    padding:CryptoJs.pad.Pkcs7
  })//base64格式密文
  return encrypted.ciphertext.toString()
}


function Decrypt(word){
  let encryptHexStr = CryptoJs.enc.Hex.parse(word)
  let srcs = CryptoJs.enc.Base64.stringify(encryptHexStr)
  let decrypt = CryptoJs.AES.decrypt(srcs,key,{
    iv:iv,
    mode:CryptoJs.mode.CBC,
    padding:CryptoJs.pad.Pkcs7
  })
  let decryptedStr = decrypt.toString(CryptoJs.enc.Utf8);
  return decryptedStr.toString();
}

export default{
  Encrypt,
  Decrypt
}