const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. public 폴더 안의 파일들(마커, 영상 등)을 사용할 수 있게 열어둠
app.use(express.static(path.join(__dirname, 'public')));

// 2. 명시적으로 기본 경로('/') 접속 시 index.html을 보여주도록 설정
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`서버가 실행되었습니다: http://localhost:${PORT}`);
});