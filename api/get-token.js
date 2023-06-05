module.exports = (req, res) => {
    // 从req.query中获取post中的数据
    const { token } = req.query;
    // 如果password 等于 123456

    const url = "https://auth0.openai.com/oauth/token";
    data = {
        "redirect_uri": "com.openai.chat://auth0.openai.com/ios/com.openai.chat/callback",
        "grant_type": "refresh_token",
        "client_id": "pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh",
        "refresh_token": token,
    }

    // 发送post请求
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            res.status(200).json(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

};