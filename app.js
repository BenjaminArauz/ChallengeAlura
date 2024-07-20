const encryptions = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
}

const encryption = (str) => {
    let result = '';
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        if (encryptions[str[i]]) {
            result += encryptions[str[i]];
        } else {
            result += str[i];
        }
    }
    return result;
};

const decrypt = (str) => {
    for (let key in encryptions) {
        const reg = new RegExp(encryptions[key], 'g');
        str = str.replace(reg, key);
    }
    return str;
};

const showEncryption = () => {
    const str = document.getElementById('text_message').value;
    const encryptionMsg = encryption(str);
    const outputDiv = document.querySelector('.output > div');
    outputDiv.className = 'output--solution';
    outputDiv.innerHTML = `
    <p> ${encryptionMsg} </p>
    <button onclick="copyToClipboard()" class="button secondary--button">Copiar</button>
    `;
};

const showDecryption = () => {
    const str = document.getElementById('text_message').value;
    const decryptionMsg = decrypt(str);
    const outputDiv = document.querySelector('.output > div');
    outputDiv.className = 'output--solution';
    outputDiv.innerHTML = `
    <p> ${decryptionMsg} </p>
    <button onclick="copyToClipboard()" class="button secondary--button">Copiar</button>
    `;
};

const copyToClipboard = () => {
    const text = document.querySelector('.output--solution > p').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};