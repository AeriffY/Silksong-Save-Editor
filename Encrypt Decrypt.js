const cSharpHeader = new Uint8Array([
  0x00,0x01,0x00,0x00,0x00,0xFF,0xFF,0xFF,0xFF,0x01,0x00,0x00,0x00,
  0x00,0x00,0x00,0x00,0x06,0x01,0x00,0x00,0x00
]);

const KEY = "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l";

// const fileInput = document.getElementById("fileInput");
// const outputTextarea = document.getElementById("output");
// fileInput.addEventListener('change', function(){
//     outputTextarea.textContent = '';
// });


function generateLengthPrefixedBytes(len) {
  len = Math.min(0x7FFFFFFF, len);
  const out = [];
  while (len > 0x7F) {
    out.push((len & 0x7F) | 0x80);
    len >>= 7;
  }
  out.push(len & 0x7F);
  return new Uint8Array(out);
}

function aesEncrypt(dataBytes) {
  const wordArray = CryptoJS.lib.WordArray.create(dataBytes);
  const encrypted = CryptoJS.AES.encrypt(
    wordArray,
    CryptoJS.enc.Utf8.parse(KEY),
    { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  );
  return encrypted.toString();
}

function aesDecrypt(base64Str) {
  return CryptoJS.AES.decrypt(
    base64Str,
    CryptoJS.enc.Utf8.parse(KEY),
    { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  );
}

function encryptJson(jsonObj) {
  const compact = JSON.stringify(jsonObj);
  const dataBytes = new TextEncoder().encode(compact);

  const base64Str = aesEncrypt(dataBytes);
  const base64Bytes = new TextEncoder().encode(base64Str);
  const lengthPrefix = generateLengthPrefixedBytes(base64Bytes.length);

  const result = new Uint8Array(
    cSharpHeader.length + lengthPrefix.length + base64Bytes.length + 1
  );

  let offset = 0;
  result.set(cSharpHeader, offset); offset += cSharpHeader.length;
  result.set(lengthPrefix, offset); offset += lengthPrefix.length;
  result.set(base64Bytes, offset);  offset += base64Bytes.length;
  result[offset] = 0x0B;
  return result;
}

function decryptDat(datBytes) {
  let offset = cSharpHeader.length;
  while (offset < datBytes.length && (datBytes[offset] & 0x80)) offset++;
  offset++;

  const end = datBytes.length - 1;
  const base64Bytes = datBytes.slice(offset, end);
  const base64Str = new TextDecoder().decode(base64Bytes);

  const wordArray = aesDecrypt(base64Str);
  const utf8Bytes = new Uint8Array(wordArray.sigBytes);

  for(let i = 0; i < wordArray.sigBytes; i++) {
    utf8Bytes[i] = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xFF;
  }

  const jsonStr = new TextDecoder().decode(utf8Bytes);
  return JSON.parse(jsonStr);
}

function onEncrypt() {
  const plainText = document.getElementById("output").value;
  if(!plainText) {return;}
  try{
    const obj = JSON.parse(plainText);
    const encrypted = encryptJson(obj);

    const blob = new Blob([encrypted], { type: "application/octet-stream" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "user1.dat";
    a.click();
  } catch(e){
    alert("Download error: " + e.message);
  }
}

function onDecrypt() {

  const file = document.getElementById("fileInput").files[0];
  if(!file){return;}
  // console.log("调用");

  // const text = document.getElementById("output");
  // text.textContent = "";

  file.arrayBuffer().then(buf => {
    const datBytes = new Uint8Array(buf);
    const json = decryptDat(datBytes);

    document.getElementById("output").value =
      JSON.stringify(json, null, 2);
      syncSelectorWithTextarea();
  });

  // console.log("写入")

}
