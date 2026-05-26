// Live Timestamp Updater
function updateLiveTimestamp() {
    const el = document.getElementById('current-timestamp');
    if (el) {
        el.textContent = Math.floor(Date.now() / 1000);
    }
}
setInterval(updateLiveTimestamp, 1000);
updateLiveTimestamp();

// Base64 Tools
function encodeBase64() {
    const input = document.getElementById('base64-input').value;
    try {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        document.getElementById('base64-output').value = encoded;
    } catch (e) {
        document.getElementById('base64-output').value = '编码失败: ' + e.message;
    }
}

function decodeBase64() {
    const input = document.getElementById('base64-input').value;
    try {
        const decoded = decodeURIComponent(escape(atob(input)));
        document.getElementById('base64-output').value = decoded;
    } catch (e) {
        document.getElementById('base64-output').value = '解码失败: 密码无效或不是合法的Base64编码格式。';
    }
}

// Unix Timestamp Tools
function convertTimestamp() {
    const input = document.getElementById('timestamp-input').value.trim();
    const resultEl = document.getElementById('timestamp-result');
    
    if (!input) {
        resultEl.textContent = '请输入内容';
        return;
    }

    // Check if input is digits (timestamp)
    if (/^\d+$/.test(input)) {
        const ts = parseInt(input) * (input.length === 10 ? 1000 : 1); // handle both sec and ms
        const date = new Date(ts);
        if (isNaN(date.getTime())) {
            resultEl.textContent = '无效的时间戳';
        } else {
            resultEl.textContent = date.toLocaleString('zh-CN', { timeZoneName: 'short' });
        }
    } else {
        // Parse date string to timestamp
        const date = new Date(input);
        if (isNaN(date.getTime())) {
            resultEl.textContent = '无法解析日期格式';
        } else {
            resultEl.textContent = `${Math.floor(date.getTime() / 1000)} (秒)`;
        }
    }
}

// JSON Tools
function formatJSON() {
    const input = document.getElementById('json-input').value;
    const outputEl = document.getElementById('json-output');
    const errorEl = document.getElementById('json-error');
    
    errorEl.textContent = '';
    outputEl.textContent = '';

    if (!input.trim()) return;

    try {
        const parsed = JSON.parse(input);
        outputEl.textContent = JSON.stringify(parsed, null, 4);
    } catch (e) {
        errorEl.textContent = '错误: ' + e.message;
    }
}

function minifyJSON() {
    const input = document.getElementById('json-input').value;
    const outputEl = document.getElementById('json-output');
    const errorEl = document.getElementById('json-error');
    
    errorEl.textContent = '';
    outputEl.textContent = '';

    if (!input.trim()) return;

    try {
        const parsed = JSON.parse(input);
        outputEl.textContent = JSON.stringify(parsed);
    } catch (e) {
        errorEl.textContent = '错误: ' + e.message;
    }
}

function clearJSON() {
    document.getElementById('json-input').value = '';
    document.getElementById('json-output').textContent = '';
    document.getElementById('json-error').textContent = '';
}
