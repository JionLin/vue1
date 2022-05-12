import CryptoJs from 'crypto-js'
import JSEncrypt from 'jsencrypt'
const base64 = require('js-base64').Base64
const forge = require('node-forge')
console.log(forge)

const md51 = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuJXE6CEe5SeC9Slk9gA5Y9EYvhYgCMUZ\n' +
'E1mG/PXG6bRl5N+a19Hhy13Hg6OYgnXUbiHJLfSyN847Z8N1wBxPculxSrBpjVszanXMg/OJFPV1\n' +
'XMTYc7OpU9GQD1GQqJTLljyuxu/l6/wtQJAh5pkw2Vj+gKmSsnjYdd96mM5FsIUuQJx+v/zQ7iYX\n' +
'h0eXukRlIbdvfuyifBvPF9fSFmmqbh2Bbvg9Ki2fYesDhejL+DOqZoSl933fEVFaRNxQGiNvINqu\n' +
'8vQwvId+s8aNCl7XJJU5I8y8l+2WsGbJEavdL7jtQO96v+C/YH7Cd0ibl4T0m0sPt1CJogoCOnhz\n' +
'41F/KwIDAQAB'
const prikey1 = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4lcToIR7lJ4L1KWT2ADlj0Ri+\n' +
'FiAIxRkTWYb89cbptGXk35rX0eHLXceDo5iCddRuIckt9LI3zjtnw3XAHE9y6XFKsGmNWzNqdcyD\n' +
'84kU9XVcxNhzs6lT0ZAPUZColMuWPK7G7+Xr/C1AkCHmmTDZWP6AqZKyeNh133qYzkWwhS5AnH6/\n' +
'/NDuJheHR5e6RGUht29+7KJ8G88X19IWaapuHYFu+D0qLZ9h6wOF6Mv4M6pmhKX3fd8RUVpE3FAa\n' +
'I28g2q7y9DC8h36zxo0KXtcklTkjzLyX7ZawZskRq90vuO1A73q/4L9gfsJ3SJuXhPSbSw+3UImi\n' +
'CgI6eHPjUX8rAgMBAAECggEAGL4yy+8Mpikau+RVnUhAaSnxSCHNH3/UMazRlH0ZseA1vG1g40dG\n' +
'Hi2u/e1jFzHWTQEIZ7miXiqt+eXQlfT1jXDPd/SX4ZP1G3M4/AMcQAv7NHlKjo/pxcuUpQkI/CAd\n' +
'/kCaKR6lUnHWWw43DSNB0hDE5NhWSsg6M+rGE0+rNdMZ7A8K8HwQrra7upm4Lk+SDehUN7R6E5J7\n' +
'8lz/2lZ7SrnwgNzTrel0ciEfTHg2t/uhV9068AcsYFUg1rLMEUZSHjiMs6aVWZMFTc98yGzqtASE\n' +
'kQZH/KreiV7yUGBl6BYJzr3+VLTPUBOck84VbIpGdfphcm7ioelo3AQvnP3q2QKBgQDuwoJppMra\n' +
'7htMe7Quu7EqfPJC7oTfq43eNJpFE0R/PBfslMwD8u52Z1/5mNddn+fP1vnxQz6JumyQ+GDGJlRD\n' +
'o9cRXBTFeKJRKpYsYba5FVYHxyV1JRhi0ErhnM46vcjMV9VjrR+WMltjhyo6+bvQB0Mr2M0K0auE\n' +
'NGBudXXWfwKBgQDF6dXsNOWjCxp8rS0phn54aGE33qCmV8eQ37dLO29fFrXYnB9xsqc17eEqdXXQ\n' +
'meklJWycA7XlBFLf285604oQ7OxzebHX1qLqbhgk+z/3Gbsjy7ZujoVDmrYRJbL+XpcbcEMAWjQA\n' +
'2lx3oxSyMRmhDzZxwpZY7+Xi1noPmBE5VQKBgQCQ+JfY74+giS0YLpCEQ8DaLI2o6EzTxsXYYxY8\n' +
'1OslWmaoZtzNlQcH69LRqeUy2vIVN9IBlTP2yrQ6/iU8i29ktqnSx5dxI8NjBzmx7w7UqMjY5imv\n' +
'THvXG+Qrw1tRPYUb1kUiRa9FMoRdFWgl8RcBxDcb+4Lci9zZ5DedOkL3nwKBgQChnt66gUwSRIwB\n' +
'yq453gJDtAHITT7l+IMZdQhLIKNHhNVFqeEnyVwxdyxMrxViH348fn5ePc1503kWJHtO5Jc4UTKa\n' +
'7oNkHnx2cye2c5N95/5iMgat7Cc52Qrbn+y3O2ms15VvoTochDXE4WGSTvR+CV1NszlyMZ6LCtkt\n' +
'COLv7QKBgFQVPoS1AJ85UKHzXWjVK0sJPXtiQyj1A1vOuphhvmFgzoOKMdEgZN70hkcXDgkx4eOG\n' +
'ieAuu0u/djjdwrxr0kDy/toUdTA+XViFbCinTFWFX+l1kn+zqEu2X0Qk2fOfP5JHYfoNl9puIfJV\n' +
'B45yUdmu9ligcZwKRypVcJWtJAyH'
const keyObj = {
    success: {
        publicKey: md51,
        prikey: prikey1
    },

    duan: {
        publicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+PAirmC71tOy/c+hW+w6r3dXoGjl9wSjwi28T4qBVT5Kmqudmzucdzb47aUm/vlpOd9kthfkg6bOgBIlNFJw2Q0CzGbOeqEC0TqYHnP8bDZ5q/HSstQxnf8jmbHe/MhOw7iVc6mYZ5WUhB5z6S42vLi82SF7lTqY3L25yWtx47wIDAQAB',
        prikey: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAL48CKuYLvW07L9z6Fb7Dqvd1egaOX3BKPCLbxPioFVPkqaq52bO5x3NvjtpSb++Wk532S2F+SDps6AEiU0UnDZDQLMZs56oQLROpgec/xsNnmr8dKy1DGd/yOZsd78yE7DuJVzqZhnlZSEHnPpLja8uLzZIXuVOpjcvbnJa3HjvAgMBAAECgYEAu6dsxhgw+p+mipVDs8mkB1WlFHgKDkrkn6RrxingD0eXWmFsMrYWtgemh+Sso0CaxJzk10s5HYZrcoYHCsox7H911w75eDC4YlpR6pW0HVR7hQSplAkz4rQG2EYeLU6ZbqFKj4zg2EyuFW0b7volYPSHAGKFy069O+SiKUuM78ECQQD0XDWzolh8cTC/rwQwUuefQunYyjGnHGaiyJP5tNR4z8OW+SLA8I2lAfKdoQvvS4Jtt0IM2bH8Gwv0C/ECcvUrAkEAx0vNPjaAIq9IsA2ElRGgNxr/4yQQGCN3eIIwoHsOBvKmLZrZCRzzweYKOUGLwCA76ywgStQfQGOniLCaUVKxTQJAHR3TpEjm5EUUevKevCdUxAxUEuncyr2+mQzvXOSoIJEZDCc5deXz6sJ1p0SmSGgl7W7VpvRVmeWbIgQ+Pn12KwJBAMAzloj9Pq40pcFECC1LhlweqdGBIhRlf/60b/kVM/33XdR1lgJ37Y1+MTXuxLxRWff/4lTIJiuO8C+fQfRT77ECQCXkqdI3zy5PQu966S4Z1UoECDqFmW7KWjKWLqMw1pF9P7+PlbwI43yGTdHQVwnJxu4FGOZ0bjkUVrakQFdy5CA='
    }
}
const md5 = keyObj['duan'].publicKey
const prikey = keyObj['duan'].prikey
const b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
const b64pad = "="
function hex2b64(h: any) {
    var i;
    var c;
    var ret = "";
    for(i = 0; i+3 <= h.length; i+=3) {
        c = parseInt(h.substring(i,i+3),16);
        ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }
    if(i+1 == h.length) {
        c = parseInt(h.substring(i,i+1),16);
        ret += b64map.charAt(c << 2);
    }
    else if(i+2 == h.length) {
        c = parseInt(h.substring(i,i+2),16);
        ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }
    while((ret.length & 3) > 0) ret += b64pad;
    return ret;
}
(JSEncrypt.prototype as any).encryptLong = function (d: any){
    var k = (this as any).key;
    var maxLength = (((k.n.bitLength() + 7) >> 3) - 11);
   
    try {
      var lt = "";
      var ct = "";
   
      if (d.length > maxLength) {
        lt = d.match(/.{1,117}/g);
        for(let i = 0; i < lt.length; i++) {
            var t1 = k.encrypt(lt[i]);
            ct += t1;
        }
        // lt.forEach(function (entry: any) {
        //   var t1 = k.encrypt(entry);
        //   ct += t1;
        // });
        return hex2b64(ct);
      }
      var t = k.encrypt(d);
      var y = hex2b64(t);
      return y;
    } catch (ex) {
      return false;
    }
  }
// rsa 默认工作模式和填充模式加密
export const rsaEncrypt = (data: string, key: string = '') => {
    const publicKey = key || md5
    const crypt: any = new JSEncrypt()
    crypt.setPublicKey("-----BEGIN PUBLIC KEY-----\n" + publicKey + "\n-----END PUBLIC KEY-----")
    return crypt.encryptLong(data)
}
// rsa 默认工作模式和填充模式加密
export const rsaDecrypt = (data: string, key: string = '') => {
    const privateKey = key || prikey
    const decrypt: any = new JSEncrypt()
    decrypt.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----\n" + privateKey + "\n-----END RSA PRIVATE KEY-----")
    return decrypt.decrypt(data)
}
// node-forge - start
// 生成密钥公钥对
// const { rsa, publicKeyToRSAPublicKeyPem, privateKeyToPem } = forge.pki
// rsa.generateKeyPair({ bits: 2048, workers: 2 }, function (err, keypair) {
//   if (err) {
//     return
//   }

//   // 这里就生成了字符串的公钥和密钥了，可以把生成结果保存起来
//   console.log({
//     publicKey: publicKeyToRSAPublicKeyPem(keypair.publicKey, 72).replace(/\r/g, ''),
//     privateKey: privateKeyToPem(keypair.privateKey, 72).replace(/\r/g, '')
//   })
// })
const forgeOption = {
    mgf: forge.mgf.mgf1.create(forge.md.md5.create())
}
// forg RSA 加密
export const forgeEncrypt = (val: string, key: string = '') => {
    const publicKey = key || md5
    const pki = forge.pki
    // const a = pki.rsa.generateKeyPair({bits: 2048, e: 0x10001})
    // console.log(a)
    const forgPublicKey = pki.publicKeyFromPem("-----BEGIN PUBLIC KEY-----\n" + publicKey + "\n-----END PUBLIC KEY-----")
    console.log(forgPublicKey)
    return base64.encode(forgPublicKey.encrypt(val, 'RSA-OAEP', forgeOption))
}
export const forgeDecrypt = (val: string) => {
    const data = base64.decode(val)
    const privateKey = forge.pki.privateKeyFromPem('-----BEGIN PRIVATE KEY-----\n'+ prikey + '\n-----END PRIVATE KEY-----')
    const decrypted = privateKey.decrypt(data, 'RSA-OAEP', forgeOption)
    return decrypted
}
// node-forge - END
// base64加密
export const base64Encode = (val: string) =>{
    return base64.encode(val)
}
// base64解密
export const base64Decode = (val: string) => {
    return base64.decode(val)
}
// AES - start
const getHetKey = (EK: string) => {
    return CryptoJs.enc.Utf8.parse(EK)
}
const key = getHetKey('1234123412ABCDEF')
const iv = getHetKey('ABCDEF1234123412')
// aes解密方法
export const aesDecrypt = (word: string) => {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
// aes加密方法
export const aesEncrypt = (word: string) => {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString().toUpperCase();
}
// AES - end