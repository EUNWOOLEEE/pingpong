import HTTP from './http.js'

const mockedResponse = {
	"detail": {
	"user_id": "131722",
	"name": "eunwolee",
	"email": "eunwolee@student.42seoul.kr",
	"image": "image.jpg",
	"access_token": "Bearer tmpaccesstoken",
	"refresh_token": "tmprefreshtoken"
	},
	"code": "ok"
};

const mockedResponse2 = {
    "detail": "Given token not valid for any token type",
    "code": "ok",
    // "code": "token_not_valid",
};

export async function attemptLogin() {
	// return HTTP.get('/oauth/login') // api
	return Promise.resolve(JSON.stringify(mockedResponse)) // 임시값
		.then(response => JSON.parse(response))
		.then(userInfo => {
			// 유저랑 플레이어 이름 구분?
			if (userInfo.code == 'ok') {
				sessionStorage.setItem('isLoggedIn', true);
				sessionStorage.setItem('player_name', JSON.stringify(userInfo.detail.name));
				sessionStorage.setItem('player_image', JSON.stringify(userInfo.detail.image));
				sessionStorage.setItem('access_token', JSON.stringify(userInfo.detail.access_token));
				sessionStorage.setItem('refresh_token', JSON.stringify(userInfo.detail.refresh_token));
			}
			else {
				sessionStorage.setItem('isLoggedIn', false);
			}
		});
}

export async function validateToken() {
	const access_token = JSON.parse(sessionStorage.getItem('access_token'));
	const tokenHeader = 'Authorization: ' + access_token;

	// return	HTTP.get('/oauth/login', tokenHeader)
	return	Promise.resolve(JSON.stringify(mockedResponse2)) // 임시값
				.then(response => JSON.parse(response))
				.then(result => {
					if (result.code == 'ok') {
						return {
							success: true,
						};
					}
					else {
						// too many request면 재시도
						// access token 만료면 refresh token으로 재요청 후 갱신된 토큰 저장
						// refresh token 만료면 재로그인 -> router에서 false로 바꿔주고 connection type으로 라우팅
						return {
							success: false,
							message: 'Login failed', //실패 사유
						};
					}
				});
}